#!/usr/bin/env node

import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";
import promptsPkg from "prompts";
const { prompt } = promptsPkg;
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const templatesDir = join(__dirname, "..", "templates");

const choices = [
  { title: "Bun", value: "bun-tirne" },
  { title: "Cloudflare Workers", value: "workers-tirne" }
];

const { template } = await prompt({
  type: "select",
  name: "template",
  message: "Choose your target environment:",
  choices
});

const { targetDir } = await prompt({
  type: "text",
  name: "targetDir",
  message: "Project folder:",
  initial: "my-tirne-app"
});

const source = join(templatesDir, template);
const dest = join(process.cwd(), targetDir);

function copyRecursive(srcDir, destDir) {
  mkdirSync(destDir, { recursive: true });
  for (const file of readdirSync(srcDir)) {
    const srcFile = join(srcDir, file);
    const destFile = join(destDir, file);
    if (statSync(srcFile).isDirectory()) {
      copyRecursive(srcFile, destFile);
    } else {
      copyFileSync(srcFile, destFile);
    }
  }
}

if (!existsSync(source)) {
  console.error("Template not found:", template);
  process.exit(1);
}

copyRecursive(source, dest);

console.log(`\n✅ Tirne app created in '${targetDir}'\n`);

console.log(`✨ Next steps:`);

console.log(`  cd ${targetDir}`);
console.log(`  bun install       # or npm install`);
console.log(`  npm run dev   # or wrangler dev `);

console.log(`\n🚀 Tirne is fetch-native, zero-dependency, and Edge-ready.`);
console.log(`⭐️ Star it if you believe in small, powerful tools.`);
console.log(`   → https://github.com/Tirne-ts/Tirne\n`);

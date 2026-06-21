import { mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "deploy-dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

console.log("Cleaned deploy-dist directory.");

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const appSource = readFileSync(join(root, "src", "App.jsx"), "utf8");
const styles = readFileSync(join(root, "src", "styles.css"), "utf8");

const fail = (message) => {
  console.error(`UI strategy verification failed: ${message}`);
  process.exit(1);
};

const requiredSourceSignals = [
  'import heroImage from "./images/abhinav-hero.jpg"',
  'className="hero-image"',
  'Portfolio positioning summary',
  'Best Fit',
  'Domain Edge',
  'Differentiator',
  'Portfolio source references',
  'Public GitHub README focus',
  'Current Focus',
  'Best fit opportunities',
];

const requiredStyleSignals = [
  "overflow-x: hidden",
  ".hero-image",
  "object-fit: cover",
  ".hero-overlay",
  ".positioning-strip",
  ".positioning-card",
  "@media (max-width: 1080px)",
  "@media (max-width: 760px)",
  "@media (prefers-reduced-motion: reduce)",
  "grid-template-columns: 1fr",
  "scrollbar-width: none",
];

for (const signal of requiredSourceSignals) {
  if (!appSource.includes(signal)) {
    fail(`missing source UI signal: ${signal}`);
  }
}

for (const signal of requiredStyleSignals) {
  if (!styles.includes(signal)) {
    fail(`missing CSS UI signal: ${signal}`);
  }
}

const disallowedPatterns = [
  { pattern: /letter-spacing:\s*-/i, label: "negative letter spacing" },
  { pattern: /\b(?:orb|bokeh|blob)\b/i, label: "decorative orb/blob/bokeh styling" },
  { pattern: /font-size:\s*[^;]*vw/i, label: "viewport-width font sizing" },
];

for (const { pattern, label } of disallowedPatterns) {
  if (pattern.test(styles)) {
    fail(`found disallowed UI pattern: ${label}`);
  }
}

const cardRadiusSelectors = [".hero-proof", ".focus-card", ".feature-card", ".skill-card", ".role-card", ".credential-block"];
for (const selector of cardRadiusSelectors) {
  if (!styles.includes(selector)) {
    fail(`missing card selector: ${selector}`);
  }
}

const cardRadiusRules = [
  /hero-proof\s*\{[^}]*border-radius:\s*8px/s,
  /focus-card,\s*\n\.feature-card,\s*\n\.skill-card,\s*\n\.role-card,\s*\n\.credential-block\s*\{[^}]*border-radius:\s*8px/s,
];

for (const rule of cardRadiusRules) {
  if (!rule.test(styles)) {
    fail("portfolio cards should keep the established 8px radius");
  }
}

console.log("UI strategy verification passed.");

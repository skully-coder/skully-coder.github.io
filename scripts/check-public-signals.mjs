import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { request } from "node:https";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const appPath = join(root, "src", "App.jsx");
const oracleAgenticBlogUrl = "https://blogs.oracle.com/scm/logistics-execution-command-center-agentic-ai";

const toPageText = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&middot;/g, " ")
    .replace(/\s+/g, " ");

const numberFrom = (text, pattern, label) => {
  const match = text.match(pattern);
  if (!match) {
    throw new Error(`Could not read ${label} from GitHub public page`);
  }
  return Number(match[1].replace(/,/g, ""));
};

const languageFrom = (text, language) => (text.match(new RegExp(language, "i")) ? language : "");

const fetchText = (url) =>
  new Promise((resolve, reject) => {
    const req = request(
      url,
      {
        headers: {
          Accept: "text/html,application/xhtml+xml",
          "User-Agent": "abhinav-portfolio-signal-check",
        },
      },
      (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          if (res.statusCode < 200 || res.statusCode >= 300) {
            reject(new Error(`Public page returned ${res.statusCode} for ${url}`));
            return;
          }
          resolve(body);
        });
      },
    );

    req.on("error", reject);
    req.end();
  });

const fetchJson = (url) =>
  new Promise((resolve, reject) => {
    const req = request(
      url,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "abhinav-portfolio-signal-check",
        },
      },
      (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          if (res.statusCode < 200 || res.statusCode >= 300) {
            const resetSeconds = Number(res.headers["x-ratelimit-reset"]);
            const resetText = Number.isFinite(resetSeconds) ? `; rate limit resets at ${new Date(resetSeconds * 1000).toISOString()}` : "";
            reject(new Error(`GitHub API returned ${res.statusCode} for ${url}${resetText}. Response: ${body}`));
            return;
          }
          resolve(JSON.parse(body));
        });
      },
    );

    req.on("error", reject);
    req.end();
  });

const fail = (message) => {
  console.error(`Public signal check failed: ${message}`);
  process.exit(1);
};

const appSource = readFileSync(appPath, "utf8");
let publicSignals;
let profilePageText = "";
let shikshaAiPageText = "";
let oracleAgenticBlogText = "";

try {
  const githubUser = await fetchJson("https://api.github.com/users/skully-coder");
  const shikshaAi = await fetchJson("https://api.github.com/repos/skully-coder/shiksha-ai");
  const shikshaAiText = toPageText(await fetchText("https://github.com/skully-coder/shiksha-ai"));
  shikshaAiPageText = shikshaAiText;
  publicSignals = {
    repos: githubUser.public_repos,
    followers: githubUser.followers,
    shikshaAiStars: shikshaAi.stargazers_count,
    shikshaAiForks: shikshaAi.forks_count,
    shikshaAiCommits: numberFrom(shikshaAiText, /([0-9,]+)\s+Commits/i, "ShikshaAI commits"),
    shikshaAiLanguage: shikshaAi.language,
    shikshaAiHomepage: shikshaAi.homepage,
  };
} catch (error) {
  console.warn(`GitHub API unavailable; falling back to public HTML. ${error.message}`);
  const profileText = toPageText(await fetchText("https://github.com/skully-coder"));
  const shikshaAiText = toPageText(await fetchText("https://github.com/skully-coder/shiksha-ai"));
  profilePageText = profileText;
  shikshaAiPageText = shikshaAiText;
  publicSignals = {
    repos: numberFrom(profileText, /Repositories\s+([0-9,]+)/i, "repository count"),
    followers: numberFrom(profileText, /([0-9,]+)\s+followers/i, "follower count"),
    shikshaAiStars: numberFrom(shikshaAiText, /Stars\s+([0-9,]+)/i, "ShikshaAI stars"),
    shikshaAiForks: numberFrom(shikshaAiText, /Fork\s+([0-9,]+)/i, "ShikshaAI forks"),
    shikshaAiCommits: numberFrom(shikshaAiText, /([0-9,]+)\s+Commits/i, "ShikshaAI commits"),
    shikshaAiLanguage: languageFrom(shikshaAiText, "TypeScript"),
    shikshaAiHomepage: shikshaAiText.match(/shiksha-ai-xi\.vercel\.app/i)?.[0] ? "https://shiksha-ai-xi.vercel.app/" : "",
  };
}

if (!profilePageText) {
  profilePageText = toPageText(await fetchText("https://github.com/skully-coder"));
}

if (!shikshaAiPageText) {
  shikshaAiPageText = toPageText(await fetchText("https://github.com/skully-coder/shiksha-ai"));
}

try {
  oracleAgenticBlogText = toPageText(await fetchText(oracleAgenticBlogUrl));
} catch (error) {
  console.warn(`Oracle SCM blog live fetch unavailable; validating portfolio source link only. ${error.message}`);
}

const expectedText = [
  `${publicSignals.repos}", label: "public GitHub repositories"`,
  `value: "${publicSignals.followers}"`,
  `${publicSignals.shikshaAiStars} stars / ${publicSignals.shikshaAiForks} forks`,
  `${publicSignals.shikshaAiCommits} commits`,
  publicSignals.shikshaAiLanguage,
  publicSignals.shikshaAiHomepage,
  "Generative AI applications",
  "Agent-based systems",
  "Developer tools",
  "Backend systems in Java and Python",
  "Developing-region educator workflows",
  "Lesson planning, assessment generation, and resource creation",
  "Multilingual and diverse classroom support",
  "Genkit with Google Gemini models",
  oracleAgenticBlogUrl,
  "Oracle SCM blog",
  "Logistics Execution Command Center",
  "OTM + WMS agentic app",
];

const expectedProfileSignals = ["Generative AI applications", "Agent-based systems", "Developer tools", "Backend systems in Java and Python"];
const expectedShikshaAiSignals = [
  "developing regions",
  "lesson planning, assessment generation, and resource creation",
  "Multilingual and diverse classrooms",
  "Genkit with Google Gemini Models",
];

const expectedOracleSignals = [
  "Logistics Execution Command Center: Smarter, Faster Logistics with Agentic AI",
  "A Unified View Across OTM and WMS",
  "Ask Oracle",
  "specialized AI agents continuously monitor logistics signals across OTM and WMS",
];

for (const text of expectedProfileSignals) {
  if (!profilePageText.includes(text)) {
    fail(`GitHub profile is missing expected public README focus: ${text}`);
  }
}

for (const text of expectedShikshaAiSignals) {
  if (!shikshaAiPageText.includes(text)) {
    fail(`ShikshaAI README is missing expected project evidence: ${text}`);
  }
}

if (oracleAgenticBlogText) {
  for (const text of expectedOracleSignals) {
    if (!oracleAgenticBlogText.includes(text)) {
      fail(`Oracle SCM blog is missing expected agentic app evidence: ${text}`);
    }
  }
}

for (const text of expectedText) {
  if (!appSource.includes(text)) {
    fail(`portfolio source is missing current public signal: ${text}`);
  }
}

console.log(
  [
    "Public signal check passed:",
    `${publicSignals.repos} repos`,
    `${publicSignals.followers} followers`,
    `ShikshaAI ${publicSignals.shikshaAiStars} stars / ${publicSignals.shikshaAiForks} forks`,
    `${publicSignals.shikshaAiCommits} commits`,
  ].join(" "),
);


const fs = require("fs");
const path = require("path");

const sourceDir = "www";
const outputDir = "www";

const indexFile = path.join(sourceDir, "index.html");

if (!fs.existsSync(indexFile)) {
  throw new Error(
    "Cannot find www/index.html. Check the repository file locations."
  );
}

console.log("A² Builder web files found.");
console.log("Using the existing www folder without deleting app files.");

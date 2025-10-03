const fs = require("fs");
const path = require("path");

const logsDir = path.join(process.cwd(), "Logs");

if (!fs.existsSync(logsDir)) {
  console.log("No Logs directory to remove.");
  process.exit(0);
}

// list files, print, delete
const files = fs.readdirSync(logsDir);
if (files.length === 0) {
  console.log("Logs directory is empty.");
} else {
  for (const f of files) {
    const filePath = path.join(logsDir, f);
    console.log("Deleting file:", f);
    fs.rmSync(filePath);
  }
}

// remove the Logs directory
fs.rmdirSync(logsDir);
console.log("Removed directory:", logsDir);
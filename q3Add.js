//add.js
const fs = require("fs");
const path = require("path");

const logsDir = path.join(process.cwd(), "Logs");

function ensureLogsDir() {
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log("Created directory:", logsDir);
  } else {
    console.log("Directory already exists:", logsDir);
  }
}

function createLogFiles() {
  process.chdir(logsDir); // move into Logs
  for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file #${i}\nTimestamp: ${new Date().toISOString()}\n`);
    console.log("Created file:", fileName);
  }
}

ensureLogsDir();
createLogFiles();
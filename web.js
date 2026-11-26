const fs = require("fs");

fs.rmSync("www", { recursive: true, force: true });
fs.mkdirSync("www", { recursive: true });
fs.copyFileSync("index.html", "www/index.html");
fs.cpSync("assets", "www/assets", { recursive: true });

console.log("Copied web files to www/");

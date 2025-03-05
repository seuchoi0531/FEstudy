const { execSync } = require("child_process");
const path = require("path");

const folderName = process.argv[2] || "./";

const folderPath = path.resolve(folderName);
try {
  execSync(`npx live-server ${folderPath} --port=1010 --localhost`, {
    stdio: "inherit",
  });
} catch (error) {
  console.error("Error starting live-server:", error.message);
}

module.exports = function load_lesson(files) {
  const fs = require("node:fs");
  return files.map((file) => ({
    name: file.name,
    path: fs.readFileSync("source/lessons/" + file.path, "utf8"),
  }));
};

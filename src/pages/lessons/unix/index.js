import { useParams } from "react-router-dom";
import preval from "preval.macro";

import buildLesson from "../build_lesson.js";

const lessons = preval`
  const load_lesson = require("../../../lib/load_lesson");
  // NOTE these must be in-line, I tried.
  module.exports = load_lesson([
    { 
      name: "Filesystems",
      path: "unix/1-filesystems.md"
    },
    {
      name: "The Shell",
      path: "unix/2-the-shell.md",
    },
    {
      name: "Filesystem Commands",
      path: "unix/3-filesystem-commands.md",
    },
    {
      name: "Standard I/O",
      path: "unix/4-standard-io.md",
    },
    {
      name: "Directory Structure",
      path: "unix/5-directory-structure.md",
    },
    {
      name: "Users",
      path: "unix/6-users.md",
    },
    {
      name: "Processes",
      path: "unix/7-processes.md",
    },
    {
      name: "Devices and Links",
      path: "unix/8-devices-and-links.md",
    },
    {
      name: "Scripting",
      path: "unix/9-scripting.md",
    },
  ]);
`;

export default function LessonsUnix() {
  return buildLesson(useParams(), "unix", lessons);
}

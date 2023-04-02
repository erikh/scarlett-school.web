import { useParams } from "react-router-dom";
import preval from "preval.macro";

import buildLesson from "../build_lesson.js";

const lessons = preval`
  const load_lesson = require("../../../lib/load_lesson");
  // NOTE these must be in-line, I tried.
  module.exports = load_lesson([
    { 
      name: "Introduction to Databases",
      path: "rdbms/1-intro.md"
    },
    {
      name: "Tables",
      path: "rdbms/2-tables.md",
    },
  ]);
`;

export default function LessonsRDBMS() {
  return buildLesson(useParams(), "rdbms", lessons);
}

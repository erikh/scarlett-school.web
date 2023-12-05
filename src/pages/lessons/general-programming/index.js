import { useParams } from "react-router-dom";
import preval from "preval.macro";

import buildLesson from "../build_lesson.js";

const lessons = preval`
  const load_lesson = require("../../../lib/load_lesson");
  // NOTE these must be in-line, I tried.
  module.exports = load_lesson([
    { 
      name: "Introduction to General Programming",
      path: "general-programming/1-intro.md"
    },
    { 
      name: "Variables and Operators",
      path: "general-programming/2-variables-and-operators.md"
    },
  ]);
`;

export default function LessonsGeneralProgramming() {
  return buildLesson(useParams(), "general-programming", lessons);
}

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
    {
      name: "SQL Basics",
      path: "rdbms/3-sql-basics.md",
    },
    {
      name: "Joins & Sub-selects",
      path: "rdbms/4-joins-and-subselects.md",
    },
    {
      name: "Keys, Indices & Constraints",
      path: "rdbms/5-keys-indices-and-constraints.md",
    },
    {
      name: "Types & Sequences",
      path: "rdbms/6-types-and-sequences.md",
    },
    {
      name: "Select Options and Stanzas",
      path: "rdbms/7-select-options.md",
    },
    {
      name: "Aggregate Functions",
      path: "rdbms/8-aggregate-functions.md",
    },
  ]);
`;

export default function LessonsRDBMS() {
  return buildLesson(useParams(), "rdbms", lessons);
}

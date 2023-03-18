import Typography from "@mui/material/Typography";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import preval from "preval.macro";

export default function About() {
  const about = preval`
    const fs = require("node:fs");
    module.exports = fs.readFileSync("source/papers/rules-and-ethos.md", "utf8");
  `;
  return (
    <Typography sx={{ p: "2em" }}>
      <ReactMarkdown remarkPlugins={[[remarkGfm]]}>{about}</ReactMarkdown>
    </Typography>
  );
}

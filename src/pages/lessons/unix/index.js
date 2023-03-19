import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { light } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useParams } from "react-router-dom";
import preval from "preval.macro";

export default function LessonsUnix() {
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

  let params = useParams();

  if (params.id) {
    return (
      <React.Fragment>
        <Typography sx={{ p: "2em" }}>
          <ReactMarkdown
            remarkPlugins={[[remarkGfm]]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={light}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {lessons[params.id - 1].path}
          </ReactMarkdown>
        </Typography>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Typography sx={{ p: "2em" }}>
          <ol>
            {lessons.map((lesson, index) => (
              <li>
                <Link href={`/lessons/unix/${index + 1}`}>{lesson.name}</Link>
              </li>
            ))}
          </ol>
        </Typography>
      </React.Fragment>
    );
  }
}

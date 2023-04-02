import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function buildLesson(params, path, lessons) {
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
                    style={dark}
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
                <Link href={`/lessons/${path}/${index + 1}`}>
                  {lesson.name}
                </Link>
              </li>
            ))}
          </ol>
        </Typography>
      </React.Fragment>
    );
  }
}

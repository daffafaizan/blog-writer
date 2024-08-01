"use client";

import { useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function Blog() {
  const [content, setContent] = useState("");
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="w-full flex flex-row gap-2">
        <input
          placeholder="Title"
          className="w-1/2 border-2 border-gray-100 rounded-sm p-2"
        />
        <input
          placeholder="Author"
          className="w-1/2 border-2 border-gray-100 rounded-sm p-2"
        />
      </div>
      <textarea
        placeholder="Summary"
        className="h-32 border-2 border-gray-100 rounded-sm p-2"
      />
      <input
        placeholder="Tags"
        className="border-2 border-gray-100 rounded-sm p-2"
      />
      <div className="w-full h-full flex flex-row gap-2">
        <textarea
          className="w-1/2 h-full border-2 border-gray-100 rounded-sm p-2"
          placeholder="Create blog"
          value={content}
          name={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        />
        <Markdown
          className="w-1/2 h-full border-2 border-gray-100 rounded-sm text-justify text-sm p-2"
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props as any;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  language={match[1]}
                  style={dark}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code {...rest}>{children}</code>
              );
            },
          }}
        >
          {content}
        </Markdown>
      </div>
    </div>
  );
}

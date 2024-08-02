"use client";

import { useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import axios from "axios";
import Auth from "./ui/auth";

export default function Blog() {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/posts`;
  const [title, setTitle] = useState("");
  const [postAuthor, setPostAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleTags = (e: any) => {
    let tags = e.currentTarget.value;
    setTags(tags.split(" "));
  };
  const emptyForm = () => {
    setTitle("");
    setPostAuthor("");
    setSummary("");
    setTags([]);
    setContent("");
  };
  const inputCheck = () => {
    if (
      title === "" ||
      postAuthor === "" ||
      summary === "" ||
      tags.length === 0 ||
      content === ""
    ) {
      return false;
    }
    return true;
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const blogData = {
      title,
      postAuthor,
      summary,
      tags,
      content,
      username,
      password,
    };
    const res = await axios.post(url, blogData);
    console.log(res);
    console.log(res.status);
    if (res.status == 200) {
      emptyForm();
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full bg-[#c3c3c3] flex flex-col gap-2 px-2 py-6"
    >
      <div className="w-full flex flex-row gap-2">
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          className="w-2/4 border-2 border-t-black border-l-black focus:outline-none rounded-sm p-2"
          required
        />
        <input
          placeholder="Author"
          value={postAuthor}
          onChange={(e) => setPostAuthor(e.currentTarget.value)}
          className="w-1/4 border-2 border-t-black border-l-black focus:outline-none rounded-sm p-2"
          required
        />
        <input
          placeholder="Tags"
          value={tags}
          onChange={(e) => handleTags(e)}
          className="w-1/4 border-2 border-t-black border-l-black focus:outline-none rounded-sm p-2"
          required
        />
      </div>
      <textarea
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.currentTarget.value)}
        className="h-32 border-2 border-t-black border-l-black focus:outline-none rounded-sm p-2"
        required
      />
      <div className="w-full h-full flex flex-row gap-2">
        <textarea
          className="w-1/2 h-full border-2 border-t-black border-l-black focus:outline-none rounded-sm p-2"
          placeholder="Create blog"
          value={content}
          name={content}
          onChange={(e) => setContent(e.currentTarget.value)}
        />
        <Markdown
          className="w-1/2 h-full bg-white border-2 border-t-black border-l-black rounded-sm text-justify text-sm p-2"
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
      {inputCheck() ? (
        <Auth setUsername={setUsername} setPassword={setPassword} />
      ) : (
        <button
          disabled
          className="w-full bg-transparent hover:bg-[#010081] hover:text-white hover:border-t-black hover:border-l-black hover:border-b-white hover:border-r-white border-2 border-t-white border-l-white border-b-black border-r-black rounded-sm mt-1 py-2"
        >
          Send &gt;
        </button>
      )}
    </form>
  );
}

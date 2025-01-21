"use client";

import clsx from "clsx";
import Image from "next/image";
import { useEffect, useReducer, useState } from "react";
import newEditor from "@/app/_ui/component/editor/editor";
import { EditorContent } from "@tiptap/react"; 
import type { Post } from "@/app/_types/Post";

export default function PostContent({
  post,
}: Readonly<{
  post: Post;
}>
) {
  const Post: Post = post;
  const [liked, setLiked] = useState(false);
  const editor = newEditor("h-40 mb-20", "Write a comment");
  const comments = post.comment;
  const [likes, dispatch] = useReducer(
    (state: number, action: { type: string }) => {
      switch (action.type) {
        case "increment":
          return state + 1;
        case "decrement":
          return state - 1;
        default:
          return state;
      }
    },
    0,
  );

  return (
    <div className="w-full">
      <Image
        src={"/header.jpg"}
        alt="Header Image"
        width={1080}
        height={0}
        className="w-full h-auto sm:my-2 md:my-4 lg:my-8 rounded-lg"
      />
      <p className="text-justify sm:text-sm md:text-md lg:text-lg mb-4 text-gray-200">
        {post.content.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
            <br />
          </span>
        ))}
      </p>

      {/* Like Comment Wrapper */}
      <div className="flex justify-start sm:gap-2 md:gap-3 lg:gap-4 items-center my-4 py-4">
        {/* Like Icon */}
        <div className="flex gap-2">
          <button
            onClick={(): void => {
              setLiked(!liked);
              if (liked) {
                dispatch({ type: "decrement" });
              } else {
                dispatch({ type: "increment" });
              }
            }}
          >
            <i
              className={clsx("sm:text-xl md:text-2xl lg:text-3xl", {
                "fa-solid fa-heart text-red-500": liked === true,
                "fa-solid fa-heart text-white": liked === false,
              })}
            ></i>
          </button>
          <span>
            <span className="sm:text-sm md:text-md lg:text-lg">{likes}</span>
          </span>
        </div>
        {/* Comment icon */}
        <div className="flex gap-2">
          <button onClick={(): void => {}}>
            <i className="fa-solid fa-comment sm:text-xl md:text-2xl lg:text-3xl"></i>
          </button>
          <span>
            <span className="sm:text-sm md:text-md lg:text-lg">{comments}</span>
          </span>
        </div>

      </div>
        <EditorContent editor={editor}/>
    </div>
  );
}

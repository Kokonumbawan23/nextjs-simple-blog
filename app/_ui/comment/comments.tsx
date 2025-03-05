"use client";

import type { Comment } from "@/app/_types/Comment";
import clsx from "clsx";
import Image from "next/image";
import newEditor from "../component/editor/editor";
import { EditorContent } from "@tiptap/react";
import data from "./data";

export default function Comment() {
  const comments: Comment[] = data;  

  const editor = newEditor("h-40 mb-20 focus:ring-1 focus:outline-none focus:ring-green-500/30", "Write a comment");

  return (
    <>
      {comments.map((comment, index) => (
        <div
          key={index}
          className="flex gap-10 items-center p-5 bg-gray-500/10  0 rounded-lg mb-5"
        >
          <Image
            src={comment.profileImage}
            alt={comment.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">{comment.name}</h4>
            <p className="text-white/80">{comment.body}</p>
          </div>
        </div>
      ))}
      <div className="w-full">
        <EditorContent editor={editor} />
      </div>
    </>
  );
}

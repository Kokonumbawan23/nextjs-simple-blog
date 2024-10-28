"use client";
import NewEditor from "@/app/ui/component/editor/editor";
import { useRef } from "react";

export default function CreatePost() {
  const titleRef = useRef();
  const contentRef = useRef();

  return (
    <div className="mt-16">
      <h1 className="text-2xl font-bold my-4">Create Post</h1>
      <form action="" className="flex flex-col gap-6">
        <NewEditor ref={titleRef} placeholder="Title" />
        <NewEditor
          ref={contentRef}
          className="h-40"
          placeholder="Write Your Content Here"
        />
        <input type="file" name="image" />

        <button
          type="submit"
          className="w-20 rounded-md dark:bg-gray-200 dark:text-black p-2 font-semibold"
        >
          Publish
        </button>
      </form>
    </div>
  );
}

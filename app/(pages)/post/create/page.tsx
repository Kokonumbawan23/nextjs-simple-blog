"use client";
import newEditor from "@/app/_ui/component/editor/editor";
import { EditorContent } from "@tiptap/react";
import { FormEvent, useState } from "react";

export default function CreatePost() {
  const [imageState] = useState<File>();
  
  const titleEditor = newEditor("", "Title");
  const contentEditor = newEditor("text-lg h-40", "Content");


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    
    const formData = new FormData(e.currentTarget);
    e.preventDefault();

    

    formData.append("title", titleEditor.getHTML());
    formData.append("content", contentEditor.getHTML());
    

    const response = await fetch("/api/post", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      console.log("Post Created");
    } else {
      console.log("Error Creating Post");
    }
  };

  return (
    <div className="mt-16">
      <h1 className="text-2xl font-bold my-4">Create Post</h1>
      <form className="flex flex-col gap-6 relative" onSubmit={handleSubmit}>
        <EditorContent editor={titleEditor} />
        <EditorContent editor={contentEditor} />
        <h2 className="font-bold text-lg">Header Image</h2>
        <div className="border-4 rounded-xl border-dashed p-8 relative border-gray-500/50">
          {(imageState as File) ? (
            <img
              src={URL.createObjectURL(imageState as File)}
              alt="Header Image"
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <i className="fa-solid fa-cloud-arrow-up text-4xl text-center w-full text-gray-400"></i>
              <h3 className="text-gray-400 text-center w-full ">
                Upload Image
              </h3>
            </>
          )}
          <input
            type="file"
            name="image"
            className="bg-gray-400 w-full h-full opacity-0 absolute bottom-0 left-0"
          />
        </div>

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

"use client";
import NewEditor from "@/app/_ui/component/editor/editor";
import { useState } from "react";


export default function CreatePost() {

  const formData: FormData = new FormData();

  const [imageState, setImageState]= useState<File | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    const response = await fetch("/api/post", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      console.log("Post Created");
    } else {
      console.log("Error Creating Post");
    }

    // formData.forEach((Value, key) => {
    //   console.log(key, Value);
    // })

  };

  return (
    <div className="mt-16">
      <h1 className="text-2xl font-bold my-4">Create Post</h1>
      <form action="" className="flex flex-col gap-6 relative">
        <NewEditor placeholder="Title" handler={(title: string) => {
          formData.set("title", title);
        }} />
        <NewEditor
          handler={(content: string) => {
            formData.set("content", content);
          }}
          className="h-40"
          placeholder="Write Your Content Here"
        />
        
        <h2 className="font-bold text-lg">Header Image</h2>
        <div className="border-4 rounded-xl border-dashed p-8 relative border-gray-500/50">
          {
            ( imageState as File) ? (
              <img src={URL.createObjectURL(imageState as File)} alt="Header Image" className="w-full h-full object-cover"/>
            ) : (
              <>
                <i className="fa-solid fa-cloud-arrow-up text-4xl text-center w-full text-gray-400"></i>
                <h3 className="text-gray-400 text-center w-full ">Upload Image</h3>
              </>
            )
          }
          <input type="file" name="image" className="bg-gray-400 w-full h-full opacity-0 absolute bottom-0 left-0" onChange={
            (e: any) => {
              setImageState(e.target.files[0]);
              formData.set("image", e.target.files[0]);
            }
          }/>
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="w-20 rounded-md dark:bg-gray-200 dark:text-black p-2 font-semibold"
        >
          Publish
        </button>
      </form>
    </div>
  );
}

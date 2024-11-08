"use client";
import NewEditor from "@/app/_ui/component/editor/editor";


export default function UpdatePost() {

  const formData: FormData = new FormData();

  const handleSubmit = async (e: any) => {
    console.log(typeof e);
    e.preventDefault();
    
    const response = await fetch("/api/post", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      console.log("Post Updated");
    } else {
      console.log("Error Updating    Post");
    }
  };

  return (
    <div className="mt-16">
      <h1 className="text-2xl font-bold my-4">Update Post</h1>
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
          <i className="fa-solid fa-cloud-arrow-up text-4xl text-center w-full text-gray-400"></i>
          <h3 className="text-gray-400 text-center w-full ">Upload Image</h3>
            <input type="file" name="image" className="bg-gray-400 w-full h-full opacity-0 absolute bottom-0 left-0"/>
        </div>

        <button
          type="submit"
          className="w-20 rounded-md dark:bg-gray-200 dark:text-black p-2 font-semibold"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </form>
    </div>
  );
}

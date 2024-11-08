"use client";

import Categories from "@/app/_ui/component/categories/categories";
import Image from "next/image";
import SearchBar from "@/app/_ui/component/search-bar/search-bar";
import { useEffect, useState } from "react";
import usePost from "@/app/_hooks/usePost";
import { Suspense } from "react";

export default function Page() {

  const {getPosts}= usePost();
  const [search, setSearch]= useState<string>("");
  const {posts, error, isLoading}= getPosts(search);
  
  const handleSearchBar = (search: string) => {
    setSearch(search);
  };

  const handleCategories = (category: string) => {;
    
  };
  
  return (
    <>
      <div className="flex justify-between items-end">
        <Categories handleCategories={handleCategories} />
        <SearchBar handleSearch={handleSearchBar} />
      </div>
      {
        isLoading ? (<>Loading...</>) : error ? (<>Error...</>) :
      posts?.map((post: any, index: any) => (
            <div key={index} className="my-8">
              <div className="flex justify-between">
                <div className="flex flex-col justify-between">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={ "/9723582.jpg"}
                      alt={""}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span>Nameless author</span>
                  </div>
                  <h2 className="font-bold text-lg">{post.title}</h2>
                  <p className="text-gray-500">{post.description}</p>
                  <div className="flex gap-4">
                    <span>{post.createdAt}</span>
                    <span>
                      <i className="fa-solid fa-heart sm:text-md md:text-lg lg:text-xl"></i>{" "}
                      {post.like}
                    </span>
                    <span>
                      <i className="fa-solid fa-comment sm:text-md md:text-lg lg:text-xl"></i>{" "}
                      {post.comment}
                    </span>
                  </div>
                </div>
                <Image
                  src={"/2831104.jpg"}
                  alt={post.title}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
    </>
  );
}
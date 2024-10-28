"use client";

import Categories from "@/app/ui/component/categories/categories";
import Thumbnails from "./data";
import Image from "next/image";
import SearchBar from "@/app/ui/component/search-bar/search-bar";
import { useState, useEffect, use } from "react";

export default function Page() {
  const [data, setData] = useState(Thumbnails);
  const handleSearchBar = (search: string) => {
    if (search === "") {
      setData(Thumbnails);
    } else {
      let tempData = Thumbnails.filter((thumbnail) =>
        thumbnail.title.toLowerCase().includes(search.toLowerCase()),
      );
      setData(tempData);
    }
  };

  const handleCategories = (category: string) => {
    if (category === "") {
      setData(Thumbnails);
    } else {
      let tempData = Thumbnails.filter(
        (thumbnail) =>
          thumbnail.categories === category ||
          thumbnail.categories?.includes(category),
      );
      setData(tempData);
      console.log(tempData);
    }
  };

  return (
    <>
      <div className="flex justify-between items-end">
        <Categories handleCategories={handleCategories} />
        <SearchBar handleSearch={handleSearchBar} />
      </div>
      {data.map((thumbnail, index) => (
        <div key={index} className="my-8">
          <div className="flex justify-between">
            <div className="flex flex-col justify-between">
              <div className="flex gap-2 items-center">
                <Image
                  src={"/9723582.jpg"}
                  alt={""}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span>{thumbnail.author}</span>
              </div>
              <h2 className="font-bold text-lg">{thumbnail.title}</h2>
              <p className="text-gray-500">{thumbnail.description}</p>
              <div className="flex gap-4">
                <span>{thumbnail.date}</span>
                <span>
                  <i className="fa-solid fa-heart sm:text-md md:text-lg lg:text-xl"></i>{" "}
                  {thumbnail.like}
                </span>
                <span>
                  <i className="fa-solid fa-comment sm:text-md md:text-lg lg:text-xl"></i>{" "}
                  {thumbnail.comment}
                </span>
              </div>
            </div>
            <Image
              src={"/2831104.jpg"}
              alt={thumbnail.title}
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

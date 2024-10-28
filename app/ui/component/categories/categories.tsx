"use client";

import React, { useState } from "react";

export default function Categories({
  handleCategories,
}: Readonly<{ handleCategories: (category: string) => void }>) {
  const categories = [
    "Artificial Intelligence",
    "Data Science",
    "Machine Learning",
    "Programming",
    "Software Engineering",
    "Other",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleCategoryClick = (category: string) => {
    console.log(category);
    setActiveCategory(category);
    handleCategories(activeCategory);
  };
  return (
    <div className="mt-16 w-1/3 overflow-hidden">
      <div className="rounded-md flex">
        <button
          className="p-2 rounded-full bg-inherit hover:bg-gray-800/20"
          onClick={() => {
            const container = document.getElementById("category-list");
            if (container) {
              container.scrollBy({ left: -100, behavior: "smooth" });
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <ul
          id="category-list"
          className="flex gap-8 overflow-x-auto scrollbar-hidden"
        >
          {categories.map((category) => (
            <li
              key={category}
              className={`${
                activeCategory === category
                  ? "border-b-2 text-gray-100"
                  : "text-gray-100/50"
              }  px-4 py-2 cursor-pointer hover:text-gray-100 shrink-0`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <button
          className=" p-2 rounded-full bg-inherit hover:bg-gray-800/20"
          onClick={() => {
            const container = document.getElementById("category-list");
            if (container) {
              container.scrollBy({ left: 100, behavior: "smooth" });
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

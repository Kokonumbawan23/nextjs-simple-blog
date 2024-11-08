"use client";

import { useState } from "react";

export default function SearchBar({
  handleSearch,
}: Readonly<{ handleSearch: (a: string) => void }>) {
  const getKeywords = (keywords: string) => {
    handleSearch(keywords);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="py-3 px-6 rounded-3xl focus:outline-none focus:ring-0 min-w-[300px]"
        onChange={(e) => getKeywords(e.target.value)}
      />
    </>
  );
}

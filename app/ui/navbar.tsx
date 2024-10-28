import next from "next";
import Link from "next/link";
import React from "react";
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="grid grid-cols-6 w-full text-md border-b-2 dark:border-gray-900 px-64">
      <Link
        className="self-center justify-self-start col-span-2 flex items-center"
        href={"/pages/home"}
      >
        <Image src="/logo.png" alt="Logo" width={75} height={75} />
        <h1 className="text-xl font-bold">Simple Blog</h1>
      </Link>
      <ul className="flex gap-8 col-start-4 col-span-3 h-full items-center justify-end ">
        <li>
          <Link href={"/pages/post/create"}>
            <i className="fa-regular fa-pen-to-square sm:text-md md:text-lg lg:text-xl"></i>
          </Link>
        </li>
        <li>
          <i className="fa-regular fa-bell sm:text-md md:text-lg lg:text-xl"></i>
        </li>
        <li>
          <Image
            src="/9723582.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
          />
        </li>
      </ul>
    </nav>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center ">
        <Image src="/logo.png" alt="Logo" width={400} height={400} />

        <div className="rounded-md p-2 bg-transparent text-center max-w-md">
          <span className="text-2xl font-bold text-black dark:text-white">
            {" "}
            Place to Share All of Your Thought's
          </span>

          <p className="text-gray-600 dark:text-gray-400"></p>
        </div>

        <div className="flex gap-4">
          <Link
            href={"/pages/home"}
            className="rounded-md dark:bg-gray-200 dark:text-black px-4 py-2"
          >
            Get Started
          </Link>
          <button
            className="rounded-md dark:bg-black dark:text-gray-200 dark:border dark:border-white px-4 py-2"
            onClick={() => {
              console.log("Learn More");
            }}
          >
            Learn More
          </button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Copyright ©
      </footer>
    </div>
  );
}

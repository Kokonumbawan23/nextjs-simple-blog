import Image from "next/image";
import Post from "@/app/ui/post/post";

export default function Home() {
  return (
    <div className="text-white w-full">
      {/* Title and Subtitle */}
      <h1 className="text-start mt-16 sm:text-xl md:text-2xl lg:text-4xl font-bold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
        saepe!
      </h1>
      <h2 className="text-start sm:text-md md:text-lg lg:text-xl sm:mt-2 md:mt-4 lg:mt-8 text-gray-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minus
        accusamus incidunt!
      </h2>

      {/* Author Identity */}
      <div className="flex justify-start gap-4 items-center sm:mt-2 md:mt-4 lg:mt-8 w-2/4">
        <Image
            src="/9723582.jpg"
            alt="Home"
            width={60}
            height={60}
            className="rounded-full"
        />
        <div className="flex flex-col items-start">
        <span className="sm:text-s md:text-lg lg:text-xl">
            Nameless Author
        </span>
        <span className="text-gray-500 sm:text-sm md:text-md lg:text-lg">
            Published 10 days ago
        </span>
        </div>
      </div>

      <Post />
    </div>
  );
}

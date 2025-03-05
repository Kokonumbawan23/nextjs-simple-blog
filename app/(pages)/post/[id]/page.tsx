"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import usePost from "@/app/_hooks/usePost";
import CircularLoadingBar from "@/app/_ui/component/circularbar";
import PostContent from "@/app/_ui/post/post";
import Link from "next/link";

export default function Home() {
  const postId = useParams().id as string;
  const { getPostById } = usePost();
  const { post, error, isLoading } = getPostById(postId);
  return (
    <>
      {isLoading ? (
        <CircularLoadingBar />
      ) : error ? (
        <div>Error...</div>
      ) : (
        <div className="text-white w-full">
          {/* Title and Subtitle */}
          <div className="flex gap-4 justify-between items-start w-full">
            <div>
              <h1 className="text-start mt-16 sm:text-xl md:text-2xl lg:text-4xl font-bold">
                {post.title}
              </h1>
              <h2 className="text-start sm:text-md md:text-lg lg:text-xl sm:mt-2 md:mt-4 lg:mt-8 text-gray-400">
                {post.description}
              </h2>
            </div>

            <Link href={"/home"} className="mt-16">
            
            <i className="fa-solid fa-chevron-left"></i>  Home
            </Link>
          </div>

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
                {post.userId}
              </span>
              <span className="text-gray-500 sm:text-sm md:text-md lg:text-lg">
                Published 10 days ago
              </span>
            </div>
          </div>
          <PostContent post={post} />
        </div>
      )}
    </>
  );
}

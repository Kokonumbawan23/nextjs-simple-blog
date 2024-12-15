import { Post } from "../_types/Post";
import useSWRHook from "./useSWR";

export default function usePost() {
  return {
  
    getPosts: (search?: string, category?: string) => {
      const url = `Posts`;
      const searchParams = new URLSearchParams();

      if (search) {
        searchParams.append("title", search);
      }

      if (category) {
        searchParams.append("category", category);
      }

      const urlWithSearch = `${url}?${searchParams.toString()}`;

      const { data, error, isLoading } = useSWRHook(
        searchParams?.toString() ? urlWithSearch : url,
      );

      // check if not found
      if (!data || data === "Not found") {
        return { posts: [], error, isLoading };
      }

      const posts: Post[] = data?.map((post: any) => ({
        id: post.id,
        userId: post.userId,
        title: post.title,
        content: post.content,
        description: post.description,
        categories: data?.categories ?? [
          "Artificial Intelligence",
          "Machine Learning",
        ],
        like: post.like,
        comment: post.comment,
        createdAt: new Date(post.createdAt)
          .toDateString()
          .split(" ")
          .slice(1, 4)
          .join(" "),
      }));

      return { posts, error, isLoading };
    },
    getPostById: (id: string) => {
      const { data, error, isLoading } = useSWRHook(`Posts/${id}`);
      const post: Post = {
        id: data?.id,
        userId: data?.userId,
        title: data?.title,
        content: data?.content,
        description: data?.description,
        like: data?.like,
        categories: data?.categories ?? ["Artificial Intelligence"],
        comment: data?.comment,
        createdAt: data?.createdAt,
      };
      return { post, error, isLoading };
    },

  };
}

import { parse } from "path";
import { Post } from "../_types/Post";
import { User } from "../_types/User";
import useSWRHook from "./useSWR";

export default function useFetch() {
  return {
    getUsers: async() => {
      const {data, error, isLoading}= useSWRHook("users");
      const users: User[] = data?.map((user: any) => ({
        id: user.id,
        name: user.name,
        avatar: user.avatar,
        createdAt: user.createdAt,
      }));
      return {users, error, isLoading};
    },
    getUserById: (id: string) => {
      const {data, error, isLoading}= useSWRHook(`users/${id}`);
      const user: User = {
        id: data?.id,
        name: data?.name,
        avatar: data?.avatar,
        createdAt: data?.createdAt,
      }
      return {user, error, isLoading};
    },
    
  }
}
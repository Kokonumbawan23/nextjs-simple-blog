import { Categories, Category } from "./Categories";

export type Post = {
    id: string;
    userId: string;
    title: string;
    content: string;
    description: string;
    like: number;
    comment: number;
    createdAt: string;
    categories: Category[] | Category;
};
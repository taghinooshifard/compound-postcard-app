"use client";
import Image from "next/image";
import { PropsWithChildren, createContext, useContext } from "react";

type PostCardContext = {
  post: PostType;
};
const postCardContext = createContext<PostCardContext | undefined>(undefined);
const usePostCardContext = () => {
  const context = useContext(postCardContext);
  if (!context) {
    throw new Error("Error in PostCard Context");
  }
  return context;
};
type PostType = {
  image: string;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
};
type PostsProps = PropsWithChildren & {
  post: PostType;
};

export default function PostCard({ children, post }: PostsProps) {
  return (
    <postCardContext.Provider value={{ post }}>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          {children}
        </div>
      </a>
    </postCardContext.Provider>
  );
}
PostCard.Image = function PostCardImage() {
  const { post } = usePostCardContext();
  return (
    <Image
      className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
      src={post.image}
      width={200}
      height={200}
      alt=""
    />
  );
};
PostCard.Title = function PostsCardTitle() {
  const { post } = usePostCardContext();
  return (
    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {post.title}
    </h5>
  );
};
PostCard.Content = function PostsCardContent() {
  const { post } = usePostCardContext();
  return (
    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
      {post.content}
    </p>
  );
};
PostCard.User = function PostsCardUser() {
  const { post } = usePostCardContext();
  return (
    <div className="mb-0 font-bold text-sm underline">{post.user.name}</div>
  );
};
PostCard.Buttons = function PostsCardButtons() {
  return (
    <div className="flex items-center justify-start gap-4 mt-2">
      <button className="bg-gradient-to-tl from-orange-400 via-orange-200 to-orange-200 px-4 py-2 rounded-md ">
        Read More
      </button>
      <button className="bg-gradient-to-tl from-orange-400 via-orange-200 to-orange-200 px-4 py-2 rounded-md">
        Comments
      </button>
    </div>
  );
};

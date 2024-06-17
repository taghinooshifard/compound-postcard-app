'use client'
import PostCard from "./postCard";
import image1 from "../../public/image1.jpg";

export default function Home() {
  return (
    <main className="flex flex-col h-screen justify-center items-center">
        <PostCard post={{
            image:image1.src,
            title:"Noteworthy technology acquisitions 2021",
            content:`Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.`,
            user:{
                id:1,
                name:"Joe Smith"
            }
        }} >
            {/* <PostCard.Image/> */}
            <PostCard.Title/>
            <PostCard.Content/>
            <PostCard.User/>
            <PostCard.Buttons/>
        </PostCard>
    </main>
  );
}

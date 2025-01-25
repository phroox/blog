// src/app/page.tsx
import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";
import Topcontent from "@/components/Topcontent";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      summary: "Learn the basics of React.js and how to get started.",
      image: "/next.svg", // Exemplo de imagem da pasta public
    },
    {
      id: 2,
      title: "Next.js vs React: Key Differences",
      summary: "Understand the differences between React and Next.js.",
      image: "/vercel.svg",
    },
    {
      id: 3,
      title: "Styling in React with TailwindCSS",
      summary: "How to use TailwindCSS for styling your React projects.",
      image: "/globe.svg",
    },
  ];

  return (
    <>
      <Navbar />
      <Topcontent/>
      <div className="container">
        <h1>Welcome to My Blog</h1>
        <p>Explore the latest posts below:</p>
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} summary={post.summary} image={post.image} />
        ))}
      </div>
    </>
  );
}

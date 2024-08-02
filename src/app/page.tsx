import Blog from "@/components/blog";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="h-screen w-full bg-[#c3c3c3] border-2 border-t-[#fdffff] border-l-[#fdffff] border-b-black border-r-black">
      <Header />
      <Blog />
    </main>
  );
}

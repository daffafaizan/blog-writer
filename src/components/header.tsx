import Image from "next/image";
import Blog from "../../public/blog98.png";

export default function Header() {
  return (
    <div className="flex flex-row items-center w-full bg-[#010081] py-1 px-2">
      <Image src={Blog} alt="Blog" className="mr-2 w-5 h-5" />
      <span className="font-semibold text-white">Write A Blog</span>
    </div>
  );
}

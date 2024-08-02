import Image from "next/image";
import Blog from "../../public/blog98.png";

export default function Header() {
  return (
    <div className="flex flex-row items-center w-full bg-[#010081] py-1 px-2">
      <Image src={Blog} alt="Blog" className="mr-2 w-5 h-5" />
      <span className="font-semibold text-white">Write A Blog</span>
      <button className="bg-[#c3c3c3] h-6 w-6 ml-auto text-sm border-2 border-t-white border-l-white border-b-black border-r-black hover:border-t-black hover:border-l-black hover:border-b-white hover:border-r-white">
        ?
      </button>
      <button className="bg-[#c3c3c3] h-6 w-6 ml-1 -mr-1 text-sm border-2 border-t-white border-l-white border-b-black border-r-black hover:border-t-black hover:border-l-black hover:border-b-white hover:border-r-white">
        X
      </button>
    </div>
  );
}

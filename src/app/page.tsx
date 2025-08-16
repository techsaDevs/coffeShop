"use client"
import ArrowRightSVG from "./ArrowRightSVG";

export default function Home() {

  const handleChangeTheme = () => {
    console.log("tailwind theme changed")
  }

  return (
    <div className="flex h-screen justify-center items-center bg-white">
      <div className="w-80 h-[450px] overflow-hidden rounded-lg ">
        <div className="bg-[url('./dev.jpg')] bg-bottom bg-cover h-1/2 w-full" />
        <div className="border-2 border-gray-400/35 border-t-0 bg-white h-1/2 w-full py-4 px-4 overflow-auto flex flex-col justify-between">
          <h1 className="capitalize text-xl text-black line-clamp-2 font-bold">Noteworthy technology acquisitions 2021</h1>
          <p className="text-gray-600 line-clamp-3 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio evenietaddnewt hello there am mike
          </p>
          <button onClick={handleChangeTheme} className="bg-blue-700 text-md flex items-center justify-between px-2 w-28 cursor-pointer outline-none hover:bg-blue-800 duration-150 rounded-md py-2">
            <span className="text-sm font-semibold">Read more</span>
            <ArrowRightSVG width={12} height={12} fill="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
}
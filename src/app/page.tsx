import ChangeThemebtn from "@/Components/ChangeThemebtn";
import ArrowRightSVG from "./ArrowRightSVG";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center bg-background text-foreground">
      <div className="w-[382px] overflow-hidden rounded-lg shadow-md shadow-background border border-card-border bg-card">
        <div className="bg-[url('./dev.jpg')] bg-bottom bg-cover h-[254.52px] w-full" />
        <div className="h-1/2 w-full p-5 overflow-auto flex flex-col justify-between">
          <h3 className="capitalize">
            <Link href="/" className="block text-2xl text-card-text line-clamp-2 font-black">Noteworthy technology acquisitions 2025</Link>
          </h3>
          <p className="text-muted line-clamp-3 text-sm my-2.5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio evenietaddnewt hello there am mike
          </p>
          <ChangeThemebtn
            title="Read more"
            icon={<ArrowRightSVG width={12} height={12} fill="#fff" />}
          />
        </div>
      </div>
    </div>
  );
}
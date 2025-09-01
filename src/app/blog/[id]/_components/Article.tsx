import { IBlog } from "@/lib/types"
import Image from "next/image"

interface Props {
  blog: IBlog
}

const Article = ({ blog }: Props) => {
  return (
    <article className="lg:col-span-8 bg-background text-foreground shadow-md rounded-xl p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-foreground border-b border-gray-200 pb-4">
        {blog.title}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-4 pt-4 text-sm text-foregray">
        <span className="flex items-center gap-1">
          <i className="ri-calendar-2-line" />
          {"date" in blog
            ? `${blog.date.day} ${blog.date.month} ${blog.date.year}`
            : "تاریخ نامشخص"}
        </span>
        <span className="flex items-center gap-1">
          <i className="ri-user-3-line" />
          {blog.author ?? "نویسنده ناشناس"}
        </span>
      </div>

      {/* Banner */}
      <Image
        src={blog.image ?? "/placeholder.png"}
        alt={blog.title}
        width={900}
        height={500}
        className="rounded-xl mt-8 w-full h-auto object-cover"
      />

      {/* Content */}
      <div className="prose prose-lg max-w-none mt-8 leading-8">
        {blog.content
          ? blog.content.split("\n").map((para, i) => <p key={i}>{para}</p>)
          : <p>متن این مقاله به زودی اضافه می‌شود...</p>}
      </div>


    </article>
  )
}

export default Article

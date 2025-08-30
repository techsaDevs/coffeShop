import Link from "next/link"
import { IBlog } from "@/lib/types"

interface Props {
  blogs: IBlog[]
}

const Sidebar = ({ blogs }: Props) => {
  return (
    <aside className="lg:col-span-4 space-y-8">
      <div className="bg-background rounded-xl shadow p-6">
        <h3 className="text-lg font-bold border-b border-basket-border pb-2 text-shadow-md text-shadow-emerald-100">
          آخرین مقالات
        </h3>
        <ul className="divide-y divide-basketItem-border">
          {blogs.length > 0 ? (
            blogs.map((item) => (
              <li key={item.id} className="py-2 text-sm hover:pl-2 transition">
                <Link href={`/blog/${item.id}`}>{item.title}</Link>
              </li>
            ))
          ) : (
            <li className="py-2 text-sm text-gray-400">هیچ مقاله‌ای موجود نیست</li>
          )}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar

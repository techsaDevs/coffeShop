import Container from "@/Components/Container"
import { IBlog, ParamsID } from "@/lib/types"
import { notFound } from "next/navigation"
import Article from "./_components/Article"
import Sidebar from "./_components/Sidebar"

const BlogDetailPage = async ({ params }: ParamsID) => {
  const { id } = (await params)
  // مقاله اصلی
  const res = await fetch(
    `http://localhost:3001/blogs/${id}`,
    { cache: "no-store" }
  )
  if (!res.ok) return notFound()

  const blog: IBlog = await res.json()
  if (!blog) return notFound()

  // آخرین مقالات
  const latestRes = await fetch(
    `http://localhost:3001/blogs?_sort=id&_order=desc&_limit=5`,
    { cache: "no-store" }
  )
  const latestBlogs: IBlog[] = latestRes.ok ? await latestRes.json() : []

  return (
    <section id="BlogDetailPage" className="mt-10 lg:mt-40 mb-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Article blog={blog} />
          <Sidebar blogs={latestBlogs} />
        </div>
      </Container>
    </section>
  )
}

export default BlogDetailPage

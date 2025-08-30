import Container from "@/Components/Container"
import { IBlog } from "@/lib/types"
import { notFound } from "next/navigation"
import Article from "./_components/Article"
import Sidebar from "./_components/Sidebar"

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { slug } = (await params)
  // مقاله اصلی
  const res = await fetch(
    `http://localhost:3001/blogs?link=/blog/${slug}`,
    { cache: "no-store" }
  )
  if (!res.ok) return notFound()

  const blogs: IBlog[] = await res.json()
  if (!blogs.length) return notFound()

  const blog = blogs[0]

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

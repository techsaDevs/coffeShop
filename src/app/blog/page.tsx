import Container from "@/Components/Container"
import { IBlog } from "@/lib/types"
import Link from "next/link"
import { Button } from "@/Components/ui/button"
import BlogBox from "@/Components/Home/Blog/BlogBox"

interface ProductPageProps {
  searchParams: Promise<{page: number}>
}

const ProductPage = async ({ searchParams }: ProductPageProps) => {
  const { page } = await searchParams
  const currentPage = Number(page) || 1
  const itemsPerPage = 8

  const res = await fetch("http://localhost:3001/blogs", {
    cache: "no-store", // اگه بخوای همیشه دیتای جدید بگیری
  })
  const data: IBlog[] = await res.json()

  const reversed = data.reverse()
  const totalPages = Math.ceil(reversed.length / itemsPerPage)

  const start = (currentPage - 1) * itemsPerPage
  const end = start + itemsPerPage
  const currentItems = reversed.slice(start, end)

  return (
    <section
      id="ProductPage"
      className={`mt-3 pt-8 md:pt-24 lg:mt-4 lg:pt-44 ${currentPage === totalPages ? "mb-10" : "mb-20"}`}
    >
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5">
          {currentItems.map((item) => (
            <BlogBox key={item.id} {...item} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-2 mt-8">
          {currentPage > 1 && (
            <Link href={`?page=${currentPage - 1}`}>
              <Button className="cursor-pointer" variant="outline">قبلی</Button>
            </Link>
          )}

          {Array.from({ length: totalPages }, (_, i) => (
            <Link key={i} href={`?page=${i + 1}`}>
              <Button
                className="cursor-pointer"
                variant={currentPage === i + 1 ? "default" : "outline"}
              >
                {i + 1}
              </Button>
            </Link>
          ))}

          {currentPage < totalPages && (
            <Link href={`?page=${currentPage + 1}`}>
              <Button className="cursor-pointer" variant="outline">بعدی</Button>
            </Link>
          )}
        </div>
      </Container>
    </section>
  )
}

export default ProductPage

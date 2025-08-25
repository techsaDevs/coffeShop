import React from 'react'
import Container from '../Container'
import SectionHeader from '../SectionHeader'
import axiosInst from '@/lib/axiosConfig'
import { IBlog } from '@/lib/types'
import BlogBox from './Blog/BlogBox'

const Blog = async () => {

  const { data } = await axiosInst.get<IBlog[]>("/blogs")
  
  return (
    <div id='blog' className='mb-40'>
        <Container>
          <SectionHeader mode='title-link' title='مطالب خواندنی' link='/blog' linkTitle='مشاهده همه مطالب' />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-5">
            {
              data.map((item) => (
                <BlogBox key={item.id} {...item} />
              ))
            }
          </div>
        </Container>
    </div>
  )
}

export default Blog
import React from "react"
import { blog } from "../../dummydata"

const BlogCard = () => {
  return (
    <>
      {blog.map((val) => (
        <div key={val.id} className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt={val.title} />
          </div>
          <div className='text'>
            <a 
              href={val.externalLink} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
            >
              <h1>{val.title}</h1>
            </a>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogCard

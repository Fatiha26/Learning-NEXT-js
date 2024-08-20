import Link from 'next/link'
import React from 'react'

export default function Blog() {

    const blogs = [
        {
         id:1,
         title: "blog 1",
         des: "hey there!"
        },
        {
            id:2,
            title: "blog 2",
            des: "hey there!"
        }
    ]
  return (
    <main className="mt-10">
        <div>This is Blog page!</div>

        <ul>
            {blogs.map(blog => 
            <li key={blog.id}>
               <Link href={`/blog/${blog.id}`}>
                 {blog.title}
                </Link>
            </li>
            )}
        </ul>
    </main>
  )
}

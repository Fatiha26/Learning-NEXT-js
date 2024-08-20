"use client"
import React from 'react'

export default function About() {
  return (
    <main className="mt-10">
        <div>This is Vision page!</div>
        <button className='bg-green-500
            rounded-sm px-4 py-1'
            onClick={()=> console.log("clicked")}>
          Click Here
        </button>
    </main>
  )
}

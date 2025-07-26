import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className="min-h-[60vh] px-4  flex flex-col items-center ">
      <div className="w-30 h-30 md:w-56 md:h-56 m-4 overflow-hidden rounded-full border-4 border-blue-500">
        <Image
          className="w-full h-full object-cover"
          src="Profile_picture_3.jpg"
          alt="Profile picture"
        />
      </div>
      <section className=" flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Hi, I&apos;m <span className="text-blue-600">Affan Ahmed Ali</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mb-6">
          AI & Automation Engineer | Building smart systems with ML, Python, and the modern web.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition">View Projects</Link>
          <Link href="/contact" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition">Get in Touch</Link>
        </div>
      </section>

    </div>
  )
}

export default HomePage
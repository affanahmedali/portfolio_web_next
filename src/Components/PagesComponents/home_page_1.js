import React from 'react'

const HomePage = () => {
  return (
    <div className="min-h-[60vh] mt-8 px-4  flex flex-col items-center ">
      <div className="w-30 h-30 md:w-56 md:h-56 m-4 overflow-hidden rounded-full border-4 border-red-500">
        <img
          className="w-full h-full object-cover"
          src="Profile_picture_3.jpg"
          alt="Profile picture"
        />
      </div>
      <div className="text-center p-4">
        <h2 className="text-xl font-semibold">
          Hi, I am Affan. A humble Automation Engineer and Web Developer.
        </h2>
      </div>
    </div>
  )
}

export default HomePage
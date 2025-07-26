import React from 'react'

const ContactSection1 = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4 py-12">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 text-center">Contact Me</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-600" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-600" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-600" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-sm text-center text-gray-500">
          Or reach me at: <br />
          <a href="mailto:affanahmedali@gmail.com" className="text-blue-600 hover:underline">affanahmedali@gmail.com</a> <br />
          +92-314-9642950
        </div>
      </div>
    </div>
  )
}

export default ContactSection1
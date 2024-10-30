import React from 'react'
import Button from '../components/Button';


function Contact() {
  return (
    <div>
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg  flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8  ">
      
      <div className="lg:w-1/2 space-y-4 bg-[#4285f4] rounded p-10 shadow-lg">
        <h2 className="text-3xl font-bold text-white ">Contact Information</h2>
        <p className="text-md text-gray-100">
          Feel free to reach out to us through the contact details below or by using the form on the right.
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <p className="text-white font-semibold text-xl">Email</p>
            <p className="text-gray-200 ">awaismehmood@gmail.com</p>
          </div>

          <div>
            <p className="text-white font-semibold text-xl">Contact Number</p>
            <p className="text-gray-200">03183153371</p>
          </div>

          <div>
            <p className="text-white font-semibold text-xl">Address</p>
            <p className="text-gray-200">Scheme 33, Karachi, Pakistan</p>
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/2 p-10 ">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border border-gray-400 mt-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contact" className="block text-lg font-semibold text-gray-700">
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              className="w-full px-4 py-2 border border border-gray-400 mt-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your contact number"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-lg font-semibold text-gray-700">
              Address
            </label>
            <textarea
              id="address"
              rows={3}
              className="w-full px-4 py-2 border border-gray-400 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your address"
            ></textarea>
          </div>

          <div className='text-center'>
          <Button click='Submit here'/>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact

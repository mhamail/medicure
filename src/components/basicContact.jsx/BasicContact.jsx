import React from 'react'

const BasicContact = () => {
    return (
        <div className='bg-gray-100 p-1'>
            <div className='bg-white shadow-md rounded-md p-4'>
                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            rows="4"
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BasicContact
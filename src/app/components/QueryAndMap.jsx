import React from 'react'

const QueryAndMap = () => {
    return (
        <div>
            <section id="contact" className="py-16">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-orange-600">
                        Ask a Query
                    </h2>
                    <form className="mt-8 max-w-4xl mx-auto grid grid-cols-1 gap-6">
                        <input
                            type="text"
                            placeholder="Name"
                            className="border-2 border-gray-300 p-4 rounded-lg"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="border-2 border-gray-300 p-4 rounded-lg"
                        />
                        <textarea
                            placeholder="Describe the product"
                            className="border-2 border-gray-300 p-4 rounded-lg"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default QueryAndMap
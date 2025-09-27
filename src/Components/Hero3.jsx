import React from 'react'

const Hero3 = () => {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
            <div class="bg-[#f5f5f7] text-black text-center p-8">
                <h1 class="text-4xl font-bold">AirPods Pro 3</h1>
                <h3 class="text-xl mt-2">The world’s best in-ear</h3>
                <h3 class="text-xl">Active Noise Cancellation.</h3>
                <h4 class="text-gray-600 mt-2">Available from 19 Sep</h4>
                <div class="flex justify-center gap-5 mt-4">
                    <button class="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Learn More</button>
                    <button class="px-6 py-2 text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white">Pre-order</button>
                </div>
                <div class="flex justify-center mt-6">
                    <img alt="AirPods" class="max-h-72 object-contain" src="./images/airpod.jpg"></img>
                </div>
            </div>
            <div class="bg-[#f5f5f7] text-black text-center p-8">
                <div class="flex justify-center items-center gap-2">
                    <img alt="AppleLogo" class="h-10 w-10" src="./images/apple-logo.png"></img>
                    <h1 class="text-4xl font-bold">WATCH SERIES 11</h1>
                </div>
                <h3 class="text-xl mt-2">The ultimate watch</h3>
                <h3 class="text-xl">for a healthy life.</h3>
                <h4 class="text-gray-600 mt-2">Available from 19 Sep</h4>
                <div class="flex justify-center gap-5 mt-4">
                    <button class="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Learn More</button>
                    <button class="px-6 py-2 text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white">Pre-order</button>
                </div>
                <div class="flex justify-center mt-10">
                    <img alt="Apple Watch" class="max-h-72 object-contain" src="./images/watch.jpg"></img>
                </div>
            </div>
        </div>
    )
}

export default Hero3

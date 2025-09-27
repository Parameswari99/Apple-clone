import React from 'react'

const Hero4 = () => {
    return (
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-6">
            <div class="bg-[#f5f5f7] text-black text-center p-8">
                <div class="flex justify-center items-center gap-2">
                    <img alt="AppleLogo" class="h-10 w-10" src="./images/apple-logo.png"></img>
                    <h1 class="text-4xl font-bold">WATCH SE 3</h1>
                </div>
                <h3 class="text-xl mt-2">Walk it. Talk it. Track it. Love it.</h3>
                <h4 class="text-gray-600 mt-2">Available from 19 Sep</h4>
                <div class="flex justify-center gap-5 mt-4">
                    <button class="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Learn More</button>
                    <button class="px-6 py-2 text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white">Pre-order</button>
                </div>
                <div class="flex justify-center mt-10">
                    <img alt="Apple Watch" class="max-h-72 object-contain" src="./images/watch4.jpg"></img>
                </div>
            </div>
            <div class="bg-black text-white text-center p-8">
                <div class="flex justify-center items-center gap-2">
                    <img alt="AppleLogo" class="h-10 w-10 " src="./images/appleicons.png"></img>
                    <h1 class="text-4xl font-bold">WATCH ULTRA 3</h1>
                </div>
                <h3 class="text-xl mt-2">Personal beast.</h3>
                <h4 class="text-gray-600 mt-2">Available from 19 Sep</h4>
                <div class="flex justify-center gap-5 mt-4">
                    <button class="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Learn More</button>
                    <button class="px-6 py-2 text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white">Pre-order</button>
                </div>
                <div class="flex justify-center mt-10">
                    <img alt="Apple Watch" class="max-h-72 object-contain" src="./images/watch3.jpg"></img>
                </div>
            </div>
        </div>
    )
}

export default Hero4
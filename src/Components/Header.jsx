import React from 'react'

const Header = () => {
    return (
        <div className='bg-black text-white '>
            <div class="p-5">
                <h1 class="text-center text-6xl font-bold">iPhone 17 Pro</h1>
                <h3 class="text-center text-3xl mt-1 ">All out Pro</h3>
            </div>
            <div class="flex justify-center items-center gap-7 mt-1">
                <button class="px-6 py-2 bg-blue-700 text-white border-2 rounded-full border-blue-700">Learn More</button>
                <button class="px-6 py-2 hover:bg-blue-700 text-white border-2 rounded-full border-blue-700">Pre-Order</button>
            </div>
            <div class="flex justify-center mt-10 border-none bg-black">
                <img alt="Header" class="w-[1000px] h-auto object-cover rounded-xl" src="./images/Header12.jpg"></img>
            </div>
        </div>
    )
}

export default Header

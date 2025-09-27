import React from 'react'

const Hero1 = () => {
    return (
        <div className='bg-white '>
            <div className='' > <h1 className=' text-5xl font-bold text-center'>iPhone Air</h1>
                <h2 className=' text-3xl text-center'>The thinnest iPhone ever.<br /> With the power of pro inside.</h2>
                <div class="flex justify-center items-center gap-7 mt-4">
                    <button class="px-6 py-2 bg-blue-700 text-white border-2 rounded-full border-blue-700">Learn More</button>
                    <button class="px-6 py-2 hover:bg-blue-700 hover:text-white text-blue-800 border-2 rounded-full border-blue-700">Pre-Order</button>
                </div></div>
            <div class="flex justify-end border-none w-full ">
                <img alt="Header" class="size-max rounded-xl bg-white-50 " src="./images/Header21.jpg"></img>
            </div>
        </div >
    )
}

export default Hero1
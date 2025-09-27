
import React from 'react'

const Content = () => {
    return (
        <div>
            <div class="items-center lg:flex justify-between px-6 lg:px-12 mt-8">
                <h2 class="text-3xl md:text-4xl lg:text-3xl  font-bold w-[80%] md:w-[60%] lg:w-[40%] text-[#1d1d1f]">Why Apple is the best.place to buy iPhone.</h2>
                <p class="text-base mt-1 md:text-xl lg:mt-0 text-blue-600 cursor-pointer hover:underline">Shop Now ›</p>
            </div>

            <div class="slick-slider slick-initialized"><div class="slick-list">
                <div class="slick-track" style={{ width: "1524px", opacity: 1, transform: "translate3d(0px, 0px, 0px)" }}>
                    <div data-index="0" class="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style={{ outline: "none", width: "381px" }}>
                        <div>
                            <div class="p-6 lg:p-12" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                                <div class="w-60 h-96 lg:w-80 lg:h-full overflow-hidden relative shadow-lg rounded-xl p-3 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                    <h3 class="text-blue-600 text-sm lg:text-base">Apple Trade In</h3>
                                    <p class="text-sm py-1 lg:text-xl font-bold text-[#1d1d1f]  ">Save on a new iPhone with a trade in</p>
                                    <p class="text-gray-500 text-sm py-1 lg:text-sm">A program that lets you trade in your current smartphone or other eligible</p>
                                    <img class="h-40 mt-10 object-cover lg:h-60 rounded-md" src="./images/trade-in-FITEbnQE.jpg"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="1" class="slick-slide slick-active" tabindex="-1" aria-hidden="false" style={{ outline: "none", width: "381px" }}>
                        <div>
                            <div class="p-6 lg:p-12" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                                <div class="w-60 h-96 lg:w-80 lg:h-full overflow-hidden relative shadow-lg rounded-xl p-3 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                    <h3 class="text-blue-600 text-sm lg:text-base">Ways to Buy</h3>
                                    <p class="text-sm py-1 lg:text-xl font-bold text-[#1d1d1f]  ">Monthly payment options are available.</p>
                                    <p class="text-gray-500 text-sm py-1 lg:text-sm">Choose the easy way to finance with concvenient monthly payment options.</p>
                                    <img class="h-40 mt-10 object-cover lg:h-60 rounded-md" src="./images/credit-card-9lcTsfVy.jpg"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="2" class="slick-slide slick-active" tabindex="-1" aria-hidden="false" style={{ outline: "none", width: "381px" }}>
                        <div>
                            <div class="p-6 lg:p-12" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                                <div class="w-60 h-96 lg:w-80 lg:h-full overflow-hidden relative shadow-lg rounded-xl p-3 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                    <h3 class="text-blue-600 text-sm lg:text-base">Personal Setup</h3>
                                    <p class="text-sm py-1 lg:text-xl font-bold text-[#1d1d1f]  ">Make the most of your iPhone with an online session.</p>
                                    <p class="text-gray-500 text-sm py-1 lg:text-sm">Talk- one-to-one with a speacialist to set up your device and discover new features.</p>
                                    <img class="h-40 mt-10 object-cover lg:h-60 rounded-md" src="./images/personal-setup-CdrprNaH.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-index="3" class="slick-slide slick-active" tabindex="-1" aria-hidden="false" style={{ outline: "none", width: "381px" }}>
                        <div>
                            <div class="p-6 lg:p-12" tabindex="-1" style={{ width: "100%", display: "inline-block" }}>
                                <div class="w-60 h-96 lg:w-80 lg:h-full overflow-hidden relative shadow-lg rounded-xl p-3 cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                    <h3 class="text-blue-600 text-sm lg:text-base">Delivery and Pickup</h3>
                                    <p class="text-sm py-1 lg:text-xl font-bold text-[#1d1d1f]  ">Get flexible delivery and easy pickup.</p>
                                    <p class="text-gray-500 text-sm py-1 lg:text-sm">Faster than you can imagine. Get free delivery or pickup at your Apple Store .</p>
                                    <img class="h-40 mt-10 object-cover lg:h-60 rounded-md" src="./images/delivery-bag-CuwPUWBi.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Content

<<<<<<< HEAD
import React from 'react'

function Navbar() {

    return (
        <nav className="bg-white-100 text-black p-3">
            <div className="container mx-auto flex items-center px-64 space-x-9 text-xs">
                <div className=""><img height={15} width={15} src='data:image/png;base64,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' alt=''></img></div>
                <ul className=" flex space-x-9">
                    <li class="hover:text-gray-400">Store</li>
                    <li class="hover:text-gray-400">Mac</li>
                    <li class="hover:text-gray-400">iPad</li>
                    <li class="hover:text-gray-400">iPhone</li>
                    <li class="hover:text-gray-400">Watch</li>
                    <li class="hover:text-gray-400">AirPods</li>
                    <li class="hover:text-gray-400">TV & Home</li>
                    <li class="hover:text-gray-400">Entertainment</li>
                    <li class="hover:text-gray-400">Accessories</li>
                    <li class="hover:text-gray-400">Support</li>
                    <button class="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search" aria-hidden="true">
                            <path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8">
                            </circle></svg></button>
                    <button class="hover:text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag" aria-hidden="true"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z">
                    </path></svg></button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
||||||| 00a00d5
=======
import React from 'react'

function Navbar() {

    return (
        <nav className="bg-white-100 text-black p-3">
            <div className="container mx-auto flex items-center px-64 space-x-9 text-xs">
                <div className=""><img height={15} width={15} src='data:image/png;base64,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' alt=''></img></div>
                <ul className=" flex space-x-9">
                    <li class="hover:text-gray-400">Store</li>
                    <li class="hover:text-gray-400">Mac</li>
                    <li class="hover:text-gray-400">iPad</li>
                    <li class="hover:text-gray-400">iPhone</li>
                    <li class="hover:text-gray-400">Watch</li>
                    <li class="hover:text-gray-400">AirPods</li>
                    <li class="hover:text-gray-400">TV & Home</li>
                    <li class="hover:text-gray-400">Entertainment</li>
                    <li class="hover:text-gray-400">Accessories</li>
                    <li class="hover:text-gray-400">Support</li>
                    <button class="hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search" aria-hidden="true">
                            <path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8">
                            </circle></svg></button>
                    <button class="hover:text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag" aria-hidden="true"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z">
                    </path></svg></button>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
>>>>>>> fbc93a6e6c5e9c7c2ad31b5c191515920a6b843a

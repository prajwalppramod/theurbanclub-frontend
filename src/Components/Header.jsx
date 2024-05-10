import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Header = () => {
    return (
        <div className='text-white'>
            <header class=" body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row  items-center">
                <a class="mr-5 font-bold hover:text-gray-900">SHOP</a>
                <a class="mr-5 font-bold hover:text-gray-900">NEW IN</a>
                <a class="mr-5 font-bold hover:text-gray-900">ACCESSORIES</a>
                    <nav class="md:ml-auto flex flex-wrap items-center gap-5 pr-7 text-base justify-center">
                        <SearchIcon className='hover:text-gray-900'/>
                        <ShoppingCartOutlinedIcon className='hover:text-gray-900'/>
                    </nav>
                    <button class="inline-flex items-center bg-white text-[#A020F0] border-0 py-1 px-6 focus:outline-none hover:text-gray-900 font-semibold rounded-xl text-base mt-4 md:mt-0">Account
                    </button>
                </div>
            </header>
        </div>
    )
}

export default Header
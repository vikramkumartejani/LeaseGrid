import React, { useState } from 'react'
import Logo from '../assets/lease-grid-logo.svg'
import Menu from '../assets/menu.svg'
import CloseIcon from '../assets/close-menu.svg'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className='px-4 sm:px-7 md:px-14 xl:px-28 max-w-[1440px] w-full mx-auto py-5 sticky flex items-center justify-between'>
            <img src={Logo} alt='Logo' className='w-[225px] md:w-[265px]' />

            {/* Desktop Menu */}
            <div className='lg:flex hidden items-center gap-6'>
                <ul className='flex items-center gap-6'>
                    <li><a href='/' className='text-black_100 font-medium leading-[19.5px]'>Home</a></li>
                    <li><a href='/' className='text-black_100 font-medium leading-[19.5px]'>Key Features</a></li>
                    <li><a href='/' className='text-black_100 font-medium leading-[19.5px]'>Why Choose Us?</a></li>
                    <li><a href='/' className='text-black_100 font-medium leading-[19.5px]'>FAQ</a></li>
                </ul>
                <button className='border border-blueberry_blue text-base text-blueberry_blue font-bold px-5 h-[46px] rounded-[150px]'>
                    Contact Us
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className='lg:hidden flex items-center'
            >
                <img src={menuOpen ? CloseIcon : Menu} alt='menu' width={30} height={30} />
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='absolute left-0 z-50 top-full w-full bg-white shadow-md py-5'>
                    <ul className='flex flex-col items-center gap-4'>
                        <li><a href='/' className='text-black_100 font-medium leading-[19.5px]'>Home</a></li>
                        <li><a href='/' className='text-black_100 font-medium leading-[19.5px]'>Key Features</a></li>
                        <li><a href='/' className='text-black_100 font-medium leading-[19.5px]'>Why Choose Us?</a></li>
                        <li><a href='/' className='text-black_100 font-medium leading-[19.5px]'>FAQ</a></li>
                        <li>
                            <button className='border border-blueberry_blue text-base text-blueberry_blue font-bold px-5 h-[46px] rounded-[150px]'>
                                Contact Us
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header

import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-400 via-purple-700 to-indigo-900 mt-10 px-4 py-3 w-full min-h-44">
            <nav className="flex flex-wrap justify-end items-center gap-4 px-8 font-light text-white text-sm">
                <Link href="/about" className="">
                    About Us
                </Link>
                <Link href="/careers" className="">
                    Careers
                </Link>
                <Link href="/blog" className="">
                    Blog
                </Link>
                <Link href="/contact" className="">
                    Contact Us
                </Link>
                <Link href="/help" className="">
                    Help Center
                </Link>
                <Link href="/accessibility" className="">
                    Accessibility
                </Link>
            </nav>
            <div className="flex text-[4rem] text-white/15 lg:text-[12rem]">
                <p className='text-white/5'>Hiring</p> Scout
            </div>
        </footer>
    );
};

export default Footer;

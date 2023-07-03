"use client";

import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-16 py-4'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/logo.svg'
            alt='logo'
            width={50}
            height={18}
            className='object-contain'
          />
          <h1 className="font-sans text-2xl font-semibold ml-5">Car Hunter</h1>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
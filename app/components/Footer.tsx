import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="p-[20px] flex items-center justify-between bg-white text-black dark:text-white dark:bg-black">
      <div className="flex-1 flex flex-col gap-[14px]">
        <div className="flex items-center gap-[10px]">
          {/* <Image src="/logo.png" alt="lama blog" width={50} height={50} /> */}
          <h1 className="text-xl hidden md:block">SOLIDITHAI</h1>
        </div>
        <p className="font-[300] w-max-[500px] hidden md:block">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        {/* <div className="mt-[10px] flex gap-[10px] ">
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div> */}
      </div>
      {/* <div className="flex justify-end gap-[100px]">
        <div className="flex-1 flex flex-col gap-[10px] font-[300]">
          <span className="font-bold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-[10px] font-[300]">
          <span className="font-bold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="flex flex-col gap-[10px] font-[300]">
          <span className="font-bold">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div> */}
      <div>@ 2024 SOLIDITHAI CO,. LTD</div>
    </div>
  );
};

export default Footer;

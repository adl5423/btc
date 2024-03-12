import React from "react";
import Link from "next/link";

function Header() {
  return (
    <div className="relative flex justify-end items-center pr-10 pt-4">
      <Link href="">
        <img
          className="w-10 mr-8 cursor-pointer"
          src="/twitter_pixel_logo.png"
          alt=""
        />
      </Link>
      <Link href="">
        <img className="w-10 mr-8 cursor-pointer" src="/discord.png" alt="" />
      </Link>
      <Link href="">
        <img className="w-10 cursor-pointer" src="/mint.png" alt="" />
      </Link>
    </div>
  );
}

export default Header;

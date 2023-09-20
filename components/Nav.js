"use client";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/images/logo.png";

const Nav = () => {
  return (
    <div className="flex-between w-full display mt-4">
      <Link href={"/"} className="flex gap-3 flex-center">
        <Image
          className="object-contain rounded-full bg-black"
          alt="Vrundavan Logo"
          src={logo}
          width={35}
          height={35}
        />
        <p className="logo_text ">Vrundavan</p>
      </Link>

      <div className="flex-row gap-12 flex flex-center">
        <Link href={"/"} className="nav_text">
          Home
        </Link>

        <Link href={"/getKnow"} className="nav_text">
          Get to know us
        </Link>

        <Link href={"/portfolio"} className="nav_text">
          Portfolio
        </Link>

        <Link href={"/joinUs"} className="nav_text">
          Join us
        </Link>

        <Link
          href={"/contactUs"}
          className="nav_text px-6 bg-slate-400 rounded-full py-3 text-white"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Nav;

"use client";
import { useUIStore } from "@/store";
import Link from "next/link";

import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  return (
    <div className="flex px-5 justify-between item-center w-full bg-gray-100 relative">
      {/*   logo */}
      <div>
        <Link href={"/"}>
          <span className="font-bold">Principal</span>
          <span> | Shop</span>
        </Link>
      </div>
      {/*    center menu */}
      <div className="hidden md:block">
        <Link
          href={"/category/men"}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-300"
        >
          Hombres
        </Link>
        <Link
          href={"/category/women"}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-300"
        >
          Mujeres
        </Link>
        <Link
          href={"/category/kids"}
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-300"
        >
          Niños
        </Link>
      </div>
      {/*  iconos search, cart y menu */}
      <div className="flex items-center">
        <Link href={"/search"} className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href={"/cart"} className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={openSideMenu}
        >
          Menu
        </button>
      </div>
    </div>
  );
};

export default TopMenu;

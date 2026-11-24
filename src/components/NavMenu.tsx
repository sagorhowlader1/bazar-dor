"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export interface INavMenuItem {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

interface NavMenuProps {
  items: INavMenuItem[];
}

const NavMenu = ({ items }: NavMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="my-2">
      {/* Mobile: hamburger menu */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="ক্যাটাগরি মেনু"
        aria-expanded={open}
        className="btn btn-ghost btn-sm gap-2 px-2 font-medium text-base-content sm:hidden"
      >
        {open ? <FaTimes /> : <FaBars />} ক্যাটাগরি
      </button>

      {open && (
        <div className="mt-2 flex flex-col gap-1 rounded-lg border border-base-300 bg-base-100 p-2 shadow-sm sm:hidden">
          {items?.map((navs) => (
            <Link
              key={navs.id}
              href={`/category/${navs.slug}`}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 font-medium text-base-content hover:bg-base-300"
            >
              {navs.icon} {navs.nameBn}
            </Link>
          ))}
        </div>
      )}

      {/* Tablet / Laptop: horizontal row */}
      <div className="hidden gap-6 overflow-x-auto whitespace-nowrap font-medium sm:flex">
        {items?.map((navs) => (
          <Link key={navs.id} href={`/category/${navs.slug}`}>
            {navs.icon} {navs.nameBn}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavMenu;

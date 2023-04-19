import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "~/logo.png";
import { Bag, Profile, SearchNormal1 } from "iconsax-react";
import NavbarLink from "@/components/navbar/NavbarLink";
import Search from "@/components/navbar/Search";

export interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="pt-4 bg-white">
      <div className="max-w-7xl mx-auto h-navbar-height flex flex-row items-stretch justify-between px-4">
        <ul className="h-full flex flex-row items-center gap-6">
          <li>
            <Link href="/">
              <Image
                className="h-12 w-12 object-contain"
                src={logo}
                alt="logo"
              />
            </Link>
          </li>
          <NavbarLink href="/">خانه</NavbarLink>
          <NavbarLink href="/">بزرگسال</NavbarLink>
          <NavbarLink href="/">نوجوان</NavbarLink>
          <NavbarLink href="/">کودک</NavbarLink>
          <NavbarLink href="/">درباره ما</NavbarLink>
          <NavbarLink href="/">تماس با ما</NavbarLink>
        </ul>
        <ul className="flex flex-row-reverse h-full items-center gap-[10px]">
          <li>
            <Bag size="30" className="text-primary-main" variant="Linear" />
          </li>
          <li>
            <Profile size="30" className="text-primary-main" variant="Linear" />
          </li>
          <li>
            <Search />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

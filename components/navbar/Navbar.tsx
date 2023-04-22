import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "~/logo.png";
import { Bag, HambergerMenu, Profile } from "iconsax-react";
import NavbarLink from "@/components/navbar/NavbarLink";
import Search from "@/components/navbar/Search";
import { useAppDispatch } from "@/store";
import { actions } from "@/store/ui-slice";
import useScrollData from "@/hooks/useScrollData";
import { Fragment } from "react";

export interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [biggerThan5] = useScrollData(5);
  const dispatch = useAppDispatch();

  const navbarClasses = biggerThan5 ? "shadow" : "lg:pt-4";

  return (
    <Fragment>
      <div className="h-navbar-height pt-4" />
      <nav
        className={`fixed left-0 right-0 top-0 z-40 bg-white/90 ${navbarClasses} backdrop-blur-md transition-[padding] duration-300`}>
        <div className="mx-auto flex h-navbar-height max-w-7xl flex-row items-stretch justify-between px-4">
          <ul className="flex h-full flex-row items-center lg:hidden">
            <li>
              <button
                onClick={() => dispatch(actions.toggleSidebar())}
                className="block">
                <HambergerMenu size="32" color="#FD8F32" />
              </button>
            </li>
          </ul>
          <ul className="hidden h-full flex-row items-center gap-6 lg:flex">
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
          <ul className="flex h-full flex-row-reverse items-center gap-[10px]">
            <li className="block lg:hidden">
              <Image className="h-8 w-8" src={logo} alt="logo" />
            </li>
            <li>
              <Bag size="30" className="text-primary-main" variant="Linear" />
            </li>
            <li className="hidden lg:block">
              <Profile
                size="30"
                className="text-primary-main"
                variant="Linear"
              />
            </li>
            <li>
              <Search />
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;

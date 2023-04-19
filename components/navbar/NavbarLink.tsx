import type { FC, ReactNode } from "react";
import Link from "next/link";

export interface NavbarLinkProps {
  children?: ReactNode;
  href: string;
}

const NavbarLink: FC<NavbarLinkProps> = ({ children, href }) => {
  return (
    <li className="relative">
      <Link
        className="peer text-text-main hover:text-primary-main transition-colors duration-300"
        href={href}>
        {children}
      </Link>
      <span className="absolute bottom-[120%] right-1/2 translate-x-1/2 block w-1.5 h-1.5 rounded-full bg-transparent peer-hover:bg-primary-main transition-colors duration-300" />
    </li>
  );
};

export default NavbarLink;

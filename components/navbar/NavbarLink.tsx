import type { FC, ReactNode } from "react";
import Link from "next/link";

export interface NavbarLinkProps {
  children?: ReactNode;
  href: string;
}

const NavbarLink: FC<NavbarLinkProps> = ({ children, href }) => {
  return (
    <li>
      <Link className="text-text-main hover:text-primary-main transition-colors duration-300" href={href}>
        {children}
      </Link>
    </li>
  );
};

export default NavbarLink;

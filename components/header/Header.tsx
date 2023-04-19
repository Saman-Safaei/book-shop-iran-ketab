import type { FC } from "react";
import Image from "next/image";

import leftImage from "~/leftHead.png";
import patternImage from "~/rightPattern.png";
import Button from "@/components/ui/Button";

export interface HeaderProps {
  isIndex?: boolean;
}

const Header: FC<HeaderProps> = (props) => {
  const Component = props.isIndex ? "h1" : "h3";

  return (
    <header className="font-sans py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto p-4">
        <div className="order-2 lg:order-1 flex flex-col gap-2 justify-center items-center relative w-full z-0">
          <Image
            src={patternImage}
            alt="pattern"
            className="hidden lg:block absolute w-full top-0 right-0 -z-[1]"
          />
          <Component className="font-vazirmatn hidden lg:block text-4xl text-primary-main font-bold">
            ایران کتاب
          </Component>
          <p className="hidden lg:block text-xl mb-2">
            جایی برای دوست داران کتاب
          </p>
          <Button className="w-9/12 md:w-6/12 lg:w-auto">
            همین حالا خرید کنید !
          </Button>
        </div>
        <div className="order-1 lg:order-2 relative z-0 w-full shrink-0">
          <Component className="block font-vazirmatn lg:hidden text-4xl text-primary-main font-bold text-center mb-2">
            ایران کتاب
          </Component>
          <p className="block lg:hidden text-xl text-center mb-6">
            جایی برای دوست داران کتاب
          </p>
          <Image
            className="w-full mx-auto md:w-8/12 lg:w-full"
            src={leftImage}
            alt="header-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

import type { FC } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import HeaderGenre from "@/components/header/HeaderGenre";
import useQuery from "@/hooks/useQuery";

import leftImage from "~/leftHead.png";
import patternImage from "~/rightPattern.png";
import heroGenreIcon from "~/category/hero.png";
import fantasyGenreIcon from "~/category/fantasy.png";
import romanceGenreIcon from "~/category/romance.png";
import murderGenreIcon from "~/category/murdur.png";
import classicGenreIcon from "~/category/classic.png";
import horrorGenreIcon from "~/category/horror.png";
import puzzleGenreIcon from "~/category/puzzle.png";

export interface HeaderProps {
  isIndex?: boolean;
}

const Header: FC<HeaderProps> = (props) => {
  const Component = props.isIndex ? "h1" : "h3";
  const { isBigger, isSmaller } = useQuery("lg");

  return (
    <header className="font-sans py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto p-4 mb-14">
        <div className="order-2 lg:order-1 flex flex-col gap-2 justify-center items-center relative w-full z-0">
          <Image
            src={patternImage}
            alt="pattern"
            className="hidden lg:block absolute w-full top-0 right-0 -z-[1]"
          />
          {isBigger && (
            <Component className="font-vazirmatn hidden lg:block text-4xl text-primary-main font-bold">
              ایران کتاب
            </Component>
          )}
          <p className="hidden lg:block text-xl mb-2">
            جایی برای دوست داران کتاب
          </p>
          <Button className="w-9/12 md:w-6/12 lg:w-auto">
            همین حالا خرید کنید !
          </Button>
        </div>
        <div className="order-1 lg:order-2 relative z-0 w-full shrink-0">
          {isSmaller && (
            <Component className="block font-vazirmatn lg:hidden text-4xl text-primary-main font-bold text-center mb-2">
              ایران کتاب
            </Component>
          )}
          <p className="block lg:hidden text-xl text-center mb-6">
            جایی برای دوست داران کتاب
          </p>
          <Image
            className="w-full mx-auto md:w-8/12 lg:w-full"
            src={leftImage}
            alt="header-image"
            priority
          />
        </div>
      </div>

      <div className="px-4">
        <div className="max-w-6xl mx-auto bg-gray-50 shadow-lg p-2 rounded-lg">
          <div className="w-fit mx-auto flex flex-row-reverse flex-wrap justify-center bg-white rounded-lg">
            <HeaderGenre
              icon={heroGenreIcon}
              iconAlt={"heroic"}
              customPadding="p-1">
              قهرمانانه
            </HeaderGenre>

            <HeaderGenre icon={fantasyGenreIcon} iconAlt={"fantasy"}>
              علمی تخیلی
            </HeaderGenre>

            <HeaderGenre icon={romanceGenreIcon} iconAlt={"romance"}>
              عاشقانه
            </HeaderGenre>

            <HeaderGenre icon={murderGenreIcon} iconAlt={"murder"}>
              جنایی
            </HeaderGenre>

            <HeaderGenre icon={classicGenreIcon} iconAlt={"classic"}>
              کلاسیک
            </HeaderGenre>

            <HeaderGenre icon={horrorGenreIcon} iconAlt={"horror"}>
              ترسناک
            </HeaderGenre>

            <HeaderGenre icon={puzzleGenreIcon} iconAlt={"puzzle"}>
              معمایی
            </HeaderGenre>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

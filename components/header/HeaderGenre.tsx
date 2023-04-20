import type { FC, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

export interface HeaderGenreProps {
  children?: ReactNode;
  icon: string | StaticImageData | { default: StaticImageData };
  iconAlt: string;
  customPadding?: string;
}

const HeaderGenre: FC<HeaderGenreProps> = (props) => {
  return (
    <div className="flex flex-col gap-2 items-center w-28 p-4 shrink-0 2xl:text-center">
      <Image
        className={`w-full h-8 object-contain object-center ${
          props.customPadding ?? ""
        }`}
        width={24}
        height={24}
        src={props.icon}
        alt={props.iconAlt}
      />
      <span className="text-sm text-text-300 text-center">{props.children}</span>
    </div>
  );
};

export default HeaderGenre;

import type { FC } from "react";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  PrimaryFooter,
  PrimaryHover,
} from "@/components/book-slider/SilderBook/PrimaryDetails";
import {
  SecondaryFooter,
  SecondaryHover,
} from "@/components/book-slider/SilderBook/SecondaryDetails";

export interface SliderBookProps {
  image: string;
  title: string;
  price: number;
  variant: "primary" | "secondary";
}

const SliderBook: FC<SliderBookProps> = (props) => {
  const [isBought, setIsBought] = useState<boolean>(false);

  useEffect(() => {
    if (isBought) setTimeout(() => setIsBought(false), 2000);
  }, [isBought]);

  return (
    <div className="w-full">
      <div className="group relative z-0">
        <Image
          className="aspect-[220/320] w-full rounded-md object-cover"
          width={220}
          height={320}
          src={props.image}
          alt={props.title}
        />
        {props.variant === "primary" && <PrimaryHover />}
        {props.variant === "secondary" && <SecondaryHover />}
      </div>
      {props.variant === "primary" && (
        <PrimaryFooter
          onAddClick={() => setIsBought(true)}
          price={props.price}
          isBought={isBought}
        />
      )}
      {props.variant === "secondary" && <SecondaryFooter />}
    </div>
  );
};

export default SliderBook;

import type { FC } from "react";
import Image from "next/image";
import { AddCircle, Eye, Heart, TickCircle } from "iconsax-react";
import { useEffect, useState } from "react";

export interface SliderBookProps {
  image: string;
  title: string;
  price: number;
}

const SliderBook: FC<SliderBookProps> = (props) => {
  const [isBought, setIsBought] = useState<boolean>(false);
  const boughtClasses = isBought ? "translate-x-0" : "translate-x-full";

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
        <div className="absolute inset-0 z-10 flex flex-row items-center justify-center gap-2 rounded-md bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <button className="rounded-md bg-white p-0.5">
            <Eye color="var(--primary-color)" variant="Linear" size="24" />
          </button>
          <button className="rounded-md bg-white p-0.5">
            <Heart color="var(--primary-color)" variant="Linear" size="24" />
          </button>
        </div>
      </div>
      <div className="relative flex flex-row items-center justify-between overflow-hidden py-1.5 text-sm text-text-500">
        <button className="select-none" onClick={() => setIsBought(true)}>
          <AddCircle color="var(--primary-color)" variant="Bold" size="18" />
        </button>
        <span className="select-none">قیمت</span>
        <span className="select-none">{props.price.toLocaleString()}</span>
        <span
          className={`absolute inset-x-0 inset-y-1 flex items-center justify-center ${boughtClasses} rounded-md bg-green-500 transition-all duration-300`}>
          <TickCircle color="white" size="18" variant="Bold" />
        </span>
      </div>
    </div>
  );
};

export default SliderBook;

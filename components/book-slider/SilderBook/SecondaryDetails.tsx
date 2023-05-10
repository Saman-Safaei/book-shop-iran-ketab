import type { FC } from "react";
import { Bag, Heart } from "iconsax-react";

export interface SecondaryHoverProps {}

export interface SecondaryFooterProps {}

export const SecondaryHover: FC<SecondaryHoverProps> = () => {
  return (
    <div className="absolute inset-0 z-10 flex flex-col justify-end rounded-md bg-black/30 p-4 opacity-0 transition-[opacity] duration-300 hover:opacity-100">
      <div className="flex flex-row items-center justify-between rounded-md bg-white/70 px-3 py-2 text-center text-sm text-text-main backdrop-blur">
        <span>قیمت</span>
        <span>123,000</span>
      </div>
    </div>
  );
};
export const SecondaryFooter: FC<SecondaryFooterProps> = () => {
  return (
    <div className="relative flex flex-row items-center justify-between overflow-hidden py-1.5 text-sm text-text-500">
      <button>
        <Bag variant="Bold" size="22" color="var(--primary-color)" />
      </button>
      <button>
        <Heart variant="Linear" size="22" color="var(--primary-color)" />
      </button>
    </div>
  );
};

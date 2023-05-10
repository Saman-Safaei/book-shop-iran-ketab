import type { FC } from "react";
import { AddCircle, Eye, Heart, TickCircle } from "iconsax-react";

export interface PrimaryHoverProps {}

export interface PrimaryFooterProps {
  onAddClick(): any;
  price: number;
  isBought: boolean;
}

export const PrimaryHover: FC<PrimaryHoverProps> = (props) => {
  return (
    <div className="absolute inset-0 z-10 flex flex-row items-center justify-center gap-2 rounded-md bg-black/30 opacity-0 transition-all duration-300 group-hover:opacity-100">
      <button className="rounded-md bg-white p-0.5">
        <Eye color="var(--primary-color)" variant="Linear" size="24" />
      </button>
      <button className="rounded-md bg-white p-0.5">
        <Heart color="var(--primary-color)" variant="Linear" size="24" />
      </button>
    </div>
  );
};

export const PrimaryFooter: FC<PrimaryFooterProps> = (props) => {
  const boughtClasses = props.isBought ? "translate-x-0" : "translate-x-full";
  
  return (
    <div className="relative flex flex-row items-center justify-between overflow-hidden py-1.5 text-sm text-text-500">
      <button className="select-none" onClick={props.onAddClick}>
        <AddCircle color="var(--primary-color)" variant="Bold" size="18" />
      </button>
      <span className="select-none">قیمت</span>
      <span className="select-none">{props.price.toLocaleString()}</span>
      <span
        className={`absolute inset-x-0 inset-y-1 flex items-center justify-center ${boughtClasses} rounded-md bg-green-500 transition-all duration-300`}>
        <TickCircle color="white" size="18" variant="Bold" />
      </span>
    </div>
  );
};

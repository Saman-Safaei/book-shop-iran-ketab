import type { FC, ReactNode } from "react";
import { useSwiper } from "swiper/react";

export interface BooksSectionButtonProps {
  slot: "container-start" | "container-end" | "wrapper-start" | "wrapper-end";
  icon: ReactNode;
  position: "right" | "left";
}

const BooksSectionButton: FC<BooksSectionButtonProps> = (props) => {
  const swiper = useSwiper();
  const className = props.position === "left" ? "left-2" : "right-2";

  const clickHandler = () => {
    if (props.position === "right") swiper.slidePrev();
    else if (props.position === "left") swiper.slideNext();
  };

  return (
    <button
      onClick={clickHandler}
      className={`absolute top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/60 p-1 backdrop-blur-sm ${className}`}
      slot={props.slot}>
      {props.icon}
    </button>
  );
};

export default BooksSectionButton;

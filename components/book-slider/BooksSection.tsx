import type { FC, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowLeft2, ArrowRight2 } from "iconsax-react";
import SliderBook from "@/components/book-slider/SilderBook/SliderBook";
import BooksSectionButton from "@/components/book-slider/BooksSectionButton";

export interface BooksSectionProps {
  icon?: ReactNode;
  title: string;
  category: string;
  products: LimitedBook[];
  variant?: "primary" | "secondary";
}

const BooksSection: FC<BooksSectionProps> = ({
  variant = "primary",
  ...props
}) => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4">
      <div className="flex flex-row items-center justify-between py-4">
        <div className="flex flex-row items-center gap-2">
          {props.icon}
          <h3 className="text-lg font-bold">{props.title}</h3>
        </div>
        <button>
          <ArrowLeft size="24" />
        </button>
      </div>
      <div className="overflow-hidden px-10 sm:px-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={32}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="!overflow-visible sm:!overflow-hidden"
          dir="rtl">
          <BooksSectionButton
            position="right"
            slot="container-start"
            icon={<ArrowRight2 size="18" />}
          />
          {props.products.map((product) => (
            <SwiperSlide key={product.id}>
              <SliderBook
                variant={variant}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </SwiperSlide>
          ))}
          <BooksSectionButton
            position="left"
            slot="container-end"
            icon={<ArrowLeft2 size="18" />}
          />
        </Swiper>
      </div>
    </section>
  );
};

export default BooksSection;

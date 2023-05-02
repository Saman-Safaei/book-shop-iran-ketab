import type { FC, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowLeft, ArrowLeft2, ArrowRight2} from "iconsax-react";
import SliderBook from "@/components/book-slider/SliderBook";
import BooksSectionButton from "@/components/book-slider/BooksSectionButton";

export interface BooksSectionProps {
  icon?: ReactNode;
  title: string;
  category: string;
  products: LimitedBook[];
}

const BooksSection: FC<BooksSectionProps> = (props) => {
  return (
    <section className="mx-auto max-w-7xl w-full px-4">
      <div className="flex flex-row items-center justify-between py-4">
        <div className="flex flex-row items-center gap-2">
          {props.icon}
          <h3 className='font-bold'>{props.title}</h3>
        </div>
        <button>
          <ArrowLeft size="24" />
        </button>
      </div>
      <div className='px-10 sm:px-0 overflow-hidden'>
        <Swiper
          slidesPerView={1}
          spaceBetween={32}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className='!overflow-visible sm:!overflow-hidden'
          dir="rtl">
          <BooksSectionButton position='right' slot='container-start' icon={<ArrowRight2 size='18' />} />
          {props.products.map((product) => (
            <SwiperSlide key={product.id}>
              <SliderBook image={product.image} title={product.title} price={product.price} />
            </SwiperSlide>
          ))}
          <BooksSectionButton position='left' slot='container-end' icon={<ArrowLeft2 size='18' />} />
        </Swiper>
      </div>
    </section>
  );
};

export default BooksSection;

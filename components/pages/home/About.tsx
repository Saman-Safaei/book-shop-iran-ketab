import type { FC } from "react";
import Container from "@/components/ui/Container";
import { Book } from "iconsax-react";
import Image from "next/image";

import bookshopImg from "~/bookshop-illustration.png";
import audioBookImg from "~/audio-book-illustration.png";

export interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <Container component="section">
      <div className="flex flex-row items-center gap-2">
        <Book variant="Linear" size="26" />
        <h3 className="font-bold text-xl">درباره ایران کتاب</h3>
      </div>
      <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:gap-28">
        <Image
          src={bookshopImg}
          alt="bookshop guy"
          className="w-full shrink-0 lg:w-5/12"
        />
        <p className="leading-8">
          وقتی وارد یک فروشگاه کتاب می‌شوی، حس خوبی به آدم دست می‌دهد. این ‌که
          کتاب را برمی‌داری و چند برگی از آن را ورق میزنی، شوق کتاب‌خوانی در
          وجودت اوج می گیرد. راستش، همین که بوی کتاب نو به مشام می‌رسد، آدم هوس
          کتاب می‌کند و دوست دارد بیشتر و بیشتر کتاب بخواند.
          <br />
          در فروشگاه‌های مجازی، این حس و حال کمتر به چشم می‌خورد و آدم آن نزدیکی
          واقعی با کتاب را ندارد. اما فروشگاه ما هم حرف‌هایی برای گفتن دارد.
          اگرچه در فروشگاه اینترنتی ایران کتاب، خبری از بوی کتاب نیست، اما جایی
          است که برای تجربه‌ی یک خرید خوب می‌شود روی آن حساب کرد.
        </p>
      </div>
      <div className="flex flex-col items-stretch gap-6 lg:flex-row-reverse lg:items-center lg:gap-28">
        <Image
          src={audioBookImg}
          alt="audio book"
          className="w-full shrink-0 lg:w-5/12"
        />
        <p className="leading-8">
          در فرصت‌های اندک میان هیاهوی روزانه، زمانی که می‌شود استراحت کوتاهی
          کرد، یک فنجان چای نوشید و به موسیقی دلخواه خود گوش کرد. زمانیست که
          می‌شود در فضای مجازی گشتی زد، اخبار روز را مرور کرد و بر روی عکس‌ها و
          حرف‌های دوستان نظر داد. زمانیست که می‌توان وارد این فروشگاه شد، کتابی
          سفارش داد و در فاصله‌ای کوتاه آن را تحویل گرفت.
          <br />
          حال دیگر این نوای موسیقی و عطر چای شماست که به فروشگاه کتاب ما حال و
          هوایی دیگر می‌دهد. بسیار خرسندیم که میزبان شما در شهر کتاب آنلاین
          هستیم.
        </p>
      </div>
    </Container>
  );
};

export default About;

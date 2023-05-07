import type { FC } from "react";
import Link from "next/link";
import {
  Call,
  Facebook,
  Heart,
  Instagram,
  Location,
  Send2,
  Sms,
} from "iconsax-react";
import Image from "next/image";

import eSymbol1 from "~/enamad1.png";
import eSymbol2 from "~/enamad2.png";

export interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="bg-secondary-main text-text-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 pb-8 pt-10 px-4 gap-8 lg:gap-4">
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 lg:gap-8">
            <div className="flex flex-col items-stretch gap-2.5">
              <h5 className="text-primary-main font-bold text-lg">
                حساب کاربری
              </h5>
              <ul className="flex flex-col items-stretch gap-2.5 text-sm">
                <li>
                  <Link href="/">ورود</Link>
                </li>
                <li>
                  <Link href="/">ثبت نام</Link>
                </li>
                <li>
                  <Link href="/">حساب من</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-stretch gap-2.5">
              <h5 className="text-primary-main font-bold text-lg">
                راهنمای استفاده
              </h5>
              <ul className="flex flex-col items-stretch gap-2.5 text-sm">
                <li>
                  <Link href="/">راهنمای خرید</Link>
                </li>
                <li>
                  <Link href="/">قوانین</Link>
                </li>
                <li>
                  <Link href="/">راهنمای چالش کتابخوانی</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <h5 className="text-primary-main font-bold text-lg">
            مجله اینترنتی شهر کتاب
          </h5>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
            <ul className="flex flex-col items-stretch gap-2.5 text-sm">
              <li>
                <Link href="/">مقاله روز</Link>
              </li>
              <li>
                <Link href="/">نویسنده</Link>
              </li>
              <li>
                <Link href="/">نیم دانگ کتاب</Link>
              </li>
              <li>
                <Link href="/">شخصیت‌های جذاب داستان</Link>
              </li>
            </ul>
            <ul className="flex flex-col items-stretch gap-2.5 text-sm">
              <li>
                <Link href="/">مروری بر کتاب</Link>
              </li>
              <li>
                <Link href="/">کودک و نوجوان</Link>
              </li>
              <li>
                <Link href="/">اخبار ادبی</Link>
              </li>
              <li>
                <Link href="/">اطلاعات عمومی</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 lg:gap-8">
            <div className="flex flex-col items-stretch gap-2.5">
              <h5 className="text-primary-main font-bold text-lg">
                تماس با ما
              </h5>
              <ul className="flex flex-col items-stretch gap-2.5 text-sm">
                <li>
                  <Link href="/">راهنمای خرید</Link>
                </li>
                <li>
                  <Link href="/">قوانین</Link>
                </li>
                <li>
                  <Link href="/">راهنمای چالش کتابخوانی</Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-stretch gap-2.5">
              <h5 className="text-primary-main font-bold text-lg">
                شبکه های اجتماعی
              </h5>
              <ul className="flex flex-row items-center gap-4">
                <li>
                  <Link href="/">
                    <Send2 size="30" variant="TwoTone" color="white" />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Instagram size="30" variant="TwoTone" color="white" />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Facebook size="30" variant="TwoTone" color="white" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-3 items-stretch">
            <div className="flex flex-row items-start gap-2">
              <Location
                size="30"
                variant="TwoTone"
                color="#FD8F32"
                className="shrink-0"
              />
              <p>
                تهران، خیابان ملاصدرا، خیابان گلدشت، کوچه گلدشت یکم، پلاک 14، کد
                پستی 1993643651
              </p>
            </div>
            <div className="flex flex-row items-start gap-2">
              <Call
                size="30"
                variant="TwoTone"
                color="#FD8F32"
                className="shrink-0"
              />
              <p>
                <span>پشتیبانی</span>{" "}
                <span className="font-vazirmatn" dir="ltr">
                  021-34234543
                </span>
              </p>
            </div>
            <div className="flex flex-row items-start gap-2">
              <Sms
                size="30"
                variant="TwoTone"
                color="#FD8F32"
                className="shrink-0"
              />
              <p>info@iranketab.com</p>
            </div>
            <div className="grid grid-cols-[80px,80px] gap-6">
              <Image className="w-full" src={eSymbol1} alt={"icon"} />
              <Image className="w-full" src={eSymbol2} alt={"icon"} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary-main p-4 text-white">
        <p className="text-center text-sm">
          <span>طراحی شده با</span> <Heart className="inline" />{" "}
          <span>
            <span>توسط </span>
            <a target='_blank' href='https://samansafaei.ir/' className="font-bold">سامان صفائی</a>
            <span> - ایده و دیزاین از </span>
            <a target='_blank' href='https://fatemeweb.vercel.app/' className="font-bold">فاطمه غفاری</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;

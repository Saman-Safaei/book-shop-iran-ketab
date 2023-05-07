import type { NextPageWithLayout } from "@/pages/_app";
import { Fragment } from "react";
import { Crown, DiscountShape, Flash } from "iconsax-react";
import MasterLayout from "@/components/layout/MasterLayout";
import BooksSection from "@/components/book-slider/BooksSection";
import SiteBanner1 from "@/components/pages/home/SiteBanner1";
import SiteBanner2 from "@/components/pages/home/SiteBanner2";

import books from "@/assets/fake-data/new-books.json";
import mostSellBooks from "@/assets/fake-data/most-sell-books.json";
import discountBooks from "@/assets/fake-data/discount-books.json";
import About from "@/components/pages/home/About";

export interface HomePageProps {}

const HomePage: NextPageWithLayout<HomePageProps> = () => {
  return (
    <Fragment>
      <BooksSection
        title="تازه ها"
        category="new"
        icon={<Flash size="26" />}
        products={books}
      />
      <BooksSection
        title="پر فروش ترین ها"
        category="most-sell"
        icon={<Crown size="26" />}
        products={mostSellBooks}
      />
      <SiteBanner1 />
      <BooksSection
        title="تخفیفات ویژه"
        category="special-offers"
        icon={<DiscountShape size="26" />}
        products={discountBooks}
      />
      <SiteBanner2 />
      <About />
    </Fragment>
  );
};

HomePage.getLayout = (page) => (
  <MasterLayout
    mainClassName="flex flex-col items-stretch gap-6 py-16"
    index
    pageTitle="خانه"
    header
    navbar
    footer>
    {page}
  </MasterLayout>
);

export default HomePage;

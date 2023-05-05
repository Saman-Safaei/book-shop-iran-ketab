import type { NextPageWithLayout } from "@/pages/_app";
import { Fragment } from "react";
import MasterLayout from "@/components/layout/MasterLayout";
import BooksSection from "@/components/book-slider/BooksSection";
import { Crown, Flash } from "iconsax-react";

import books from "@/assets/fake-data/new-books.json";
import mostSellBooks from '@/assets/fake-data/most-sell-books.json';

export interface HomePageProps {}

const HomePage: NextPageWithLayout<HomePageProps> = () => {
  return (
    <Fragment>
      <BooksSection
        title="تازه ها"
        category="all"
        icon={<Flash size="24" />}
        products={books}
      />
      <BooksSection
        title="پر فروش ترین ها"
        category="all"
        icon={<Crown size="24" />}
        products={mostSellBooks}
      />
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

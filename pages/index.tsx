import type { NextPageWithLayout } from "@/pages/_app";
import { Fragment } from "react";
import MasterLayout from "@/components/layout/MasterLayout";
import BooksSection from "@/components/pages/home/BooksSection";
import {Flash} from "iconsax-react";
import books from '@/assets/fake-data/books.json';

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
    </Fragment>
  );
};

HomePage.getLayout = (page) => (
  <MasterLayout index pageTitle="خانه" header navbar footer>
    {page}
  </MasterLayout>
);

export default HomePage;

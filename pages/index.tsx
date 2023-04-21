import type { NextPageWithLayout } from "@/pages/_app";
import { Fragment } from "react";
import MasterLayout from "@/components/layout/MasterLayout";

export interface HomePageProps {}

const HomePage: NextPageWithLayout<HomePageProps> = () => {
  return <Fragment></Fragment>;
};

HomePage.getLayout = (page) => (
  <MasterLayout index pageTitle="خانه" header navbar footer>{page}</MasterLayout>
);

export default HomePage;

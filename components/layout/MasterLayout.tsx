import type { FC, ReactNode } from "react";
import Header from "@/components/header/Header";
import { Vazirmatn } from "next/font/google";
import LocalFont from "next/font/local";
import Navbar from "@/components/navbar/Navbar";
import {Fragment} from "react";
import Head from "next/head";

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
  variable: "--vazirmatn",
});

const localFont = LocalFont({
  src: [
    {
      path: "../../public/fonts/Estedad-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Estedad-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--estedad",
});

export interface MasterLayoutProps {
  children?: ReactNode;
  index?: boolean;
  pageTitle?: string;
  header?: boolean;
  navbar?: boolean;
}

const MasterLayout: FC<MasterLayoutProps> = (props) => {
  const pageTitle = props.pageTitle ? `${props.pageTitle} - ایران کتاب` : 'ایران کتاب'
  
  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div
        className={`${vazirmatn.variable} ${localFont.variable} font-sans text-text-main`}>
        {props.navbar && <Navbar />}
        {props.header && <Header isIndex={props.index} />}
        <main>{props.children}</main>
      </div>
    </Fragment>
  );
};

export default MasterLayout;

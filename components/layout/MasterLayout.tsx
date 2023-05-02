import type { FC, ReactNode } from "react";
import Head from "next/head";
import { Fragment } from "react";
import LocalFont from "next/font/local";
import { Vazirmatn } from "next/font/google";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Sidebar from "@/components/sidebar/Sidebar";

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
  mainClassName?: string;
  index?: boolean;
  pageTitle?: string;
  header?: boolean;
  navbar?: boolean;
  footer?: boolean;
}

const MasterLayout: FC<MasterLayoutProps> = (props) => {
  const pageTitle = props.pageTitle
    ? `${props.pageTitle} - ایران کتاب`
    : "ایران کتاب";
  
  const mainClasses = props.mainClassName ?? "";

  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div
        className={`${vazirmatn.variable} ${localFont.variable} font-sans text-text-main`}>
        {props.navbar && <Navbar />}
        {props.navbar && <Sidebar />}
        {props.header && <Header isIndex={props.index} />}
        <main className={mainClasses}>{props.children}</main>
        {props.footer && <Footer />}
      </div>
    </Fragment>
  );
};

export default MasterLayout;

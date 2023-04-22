import { NextPageWithLayout } from "@/pages/_app";
import { Fragment } from "react";
import MasterLayout from "@/components/layout/MasterLayout";

export interface Error404Props {}

const Error404: NextPageWithLayout<Error404Props> = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-2.5">
      <h1 className="text-center text-2xl font-bold text-primary-main">
        صفحه مورد نظر پیدا نشد
      </h1>
      <p className="text-center text-text-200">
        صفحه ای که قصد دسترسی به آن را دارید جا به جا شده یا وجود ندارد.
      </p>
    </div>
  );
};

Error404.getLayout = (page) => (
  <MasterLayout footer navbar pageTitle="صفحه مورد نظر پیدا نشد">
    {page}
  </MasterLayout>
);

export default Error404;

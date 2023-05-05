import type { FC } from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

import siteBanner4 from "~/home-banner4.png";
import siteBanner3 from "~/home-banner3.png";

export interface SiteBanner2Props {}

const SiteBanner2: FC<SiteBanner2Props> = () => {
  return (
    <Container
      component="section"
      className="my-4"
      divClassName="flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
      <Link className="order-2 shrink-0 lg:order-1" href="/">
        <Image
          className="lg:h-64 w-auto rounded-2xl"
          src={siteBanner4}
          alt="banner"
        />
      </Link>
      <Link className="order-1 w-full lg:order-2 lg:w-auto lg:grow" href="/">
        <Image
          className="lg:h-64 w-full rounded-2xl object-cover"
          src={siteBanner3}
          alt="banner"
        />
      </Link>
    </Container>
  );
};

export default SiteBanner2;

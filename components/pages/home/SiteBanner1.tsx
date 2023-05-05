import type { FC } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

import siteBanner1 from "~/home-banner1.png";
import siteBanner2 from "~/home-banner2.png";

export interface SiteBanner1Props {}

const SiteBanner1: FC<SiteBanner1Props> = () => {
  return (
    <Container
      component="section"
      className='my-4'
      divClassName="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Link className='w-full' href='/'>
        <Image className='w-full rounded-2xl' src={siteBanner2} alt='banner' />
      </Link>
      <Link className='w-full' href='/'>
        <Image className='w-full rounded-2xl' src={siteBanner1} alt='banner' />
      </Link>
    </Container>
  );
};

export default SiteBanner1;

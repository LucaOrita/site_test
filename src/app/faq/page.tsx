import React from 'react';

import { Faq12 } from '@/components/faq12';
import ZippayCtaCard from '@/components/sections/zippay-cta-card';
// import ZippayFaqPage from '@/components/sections/zippay-faq-page';

const page = () => {
  return (
    <>
      <Faq12 />
      {/* <ZippayFaqPage /> */}
      <ZippayCtaCard />
    </>
  );
};

export default page;

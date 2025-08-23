import React from 'react';
import Container from '@/Components/Container';
import ShapeSVG from '../SVGs/home/landing/ShapeSVG';
import LandingButton from './Landing/LandingButton';

const Landing = () => {
  return (
    <section id='home' className="relative h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-header bg-no-repeat bg-cover bg-[center_top]">
      <Container
        className="h-full md:min-h-screen flex items-center justify-end relative overflow-y-hidden">
        <div className="md:w-auto text-white">
          <h2 className="font-morabba-bold text-2xl sm:text-4xl md:text-6xl/[62px] mb-0.5 md:mb-2 md:leading-tight">
            قهوه عربیکا تانزانیا
          </h2>
          <span className="font-morabba text-xl sm:text-3xl md:text-5xl/[64px]">
            یک فنجان بالانس !
          </span>
          <span className="block bg-orange-300 h-px md:h-0.5 w-20 md:w-25 my-3 md:my-8" />
          <p className="max-w-[201px] md:max-w-[460px] text-xs sm:text-lg md:text-2xl">
            قطعا نام آشنای عربیکا را شنیده اید. عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.
          </p>
        </div>

        <div className="circle circle_main invisible md:visible">
          <div className="circle circle_midd">
            <div className="circle circle_smal" />
          </div>
        </div>


      </Container>

      <ShapeSVG className='invisible md:visible absolutebCenter fill-body w-[100px] h-[22px]' width={100} height={22} />
      <LandingButton />
    </section>
  );
};

export default Landing;

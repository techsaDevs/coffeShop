import React from 'react';
import Container from '@/Components/Container';

const Landing = () => {
  return (
    <section className="bg-header bg-no-repeat bg-[length:100%_auto] bg-topo">
      <Container
        className="
      flex
      h-64 
      items-center
      justify-end
      md:h-auto
      md:min-h-screen 
      ">
        <div className="md:w-auto text-white">
          <h2 className="font-morabba-bold text-2xl md:text-6xl mb-1 md:mb-2 leading-snug md:leading-tight break-words">
            قهوه عربیکا تانزانیا
          </h2>
          <span className="font-morabba text-xl md:text-5xl block md:inline-block mb-2 md:mb-8 break-words">
            یک فنجان بالانس !
          </span>
          <span className="bg-orange-300 h-px md:h-0.5 w-20 md:w-25 block my-3 md:my-8" />
          <p className="text-xs md:text-2xl max-w-[50vw] md:max-w-[460px] break-words">
            قطعا نام آشنای عربیکا را شنیده اید. عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Landing;

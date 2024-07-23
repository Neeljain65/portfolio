"use client"
import { FaLocationArrow } from "react-icons/fa6";
import motion from 'framer-motion'
import MagicButton from "./MagicButton";
import Tile from "./ui/tile";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="w-full relative">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
        <section className="w-full grid grid-cols-20 gap-0 h-screen overflow-y-clip">
        {Array.from(Array(20 * 12), (i) => (
          <Tile key={i} />
        ))}
      </section>
     

      <div className="pointer-events-none absolute inset-0 flex justify-center  my-20 z-10">
        <div className="z-10 max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">

          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Neel, a Full stack Developer based in India.
          </p>

          <a href="NeelResume_July.pdf" download={"Neel_Resume"} className="pointer-events-auto"> 
            <MagicButton
              title="Download Resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      
    </div>
  );
};

export default Hero;

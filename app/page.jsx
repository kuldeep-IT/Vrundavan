import React from "react";
import Image from "next/image";
import home1 from "../public/assets/images/home1.jpg";
import Technologies from "@components/Technologies";
import OurValues from "@components/OurValues";
import About from "@components/About";

const Home = () => {
  return (
    <section className="flex display w-full flex-col">
      <div className="flex-center flex-row display">
        <div className="flex justify-end h-screen w-full flex-col pb-40">
          <p className="font-inter text-[22px]">
            Welcome to Vrundavan Technologies!
          </p>

          <h1 className="head_text ">
            Build Innovative
            <br /> Software a Products that <br /> Scale with us!
          </h1>

          <h3 className="text-[28px] mt-3 font-satoshi ">
            Bring your ideas to life!
          </h3>

          <div className="w-[180px] px-10 py-4 rounded-md bg-green-300 text-black font-satoshi font-medium mt-3">
            Get in touch
          </div>
        </div>

        <div className="flex w-full bg-red-100 flex-center bg-red-700">
          <Image src={home1} alt="Vrundavan Logo" />
        </div>
      </div>
      <Technologies />
      <OurValues />
      <About />
    </section>
  );
};

export default Home;

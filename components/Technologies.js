import Image from "next/image";
import React from "react";
import CustomTech from "./CustomTech";
import web from "../public/assets/images/web.png";
import appdevelopment from "../public/assets/images/appdevelopment.png";
import graphics from "../public/assets/images/graphics.png";
import strategic from "../public/assets/images/strategic.png";
import uiux from "../public/assets/images/uiux.png";

const Technologies = () => {
  const dataTech = [
    {
      image: web,
      name: "Web Development",
      desc: "We can help you build SAAS/ E-commerce or Progressive Web applications(PWA).",
    },
    {
      image: appdevelopment,
      name: "App Development",
      desc: "We can build native iOS and Android apps using React Native, which is performant and cost-effective.",
    },
    {
      image: uiux,
      name: "UI/UX Designer",
      desc: "We ensure that all content within a user experience is delivered to the user at the right time, place, and format.",
    },
    {
      image: graphics,
      name: "Graphic Design",
      desc: "We create visual content to communicate messages by applying visual hierarchy and page layout techniques.",
    },
    {
      image: strategic,
      name: "Strategic Partnerships",
      desc: "We partner with start-ups and other IT consulting companies to provide them with best software developers at affordable rates.",
    },
  ];

  return (
    <div className="flex display w-full flex-col">
      <h1 className="text-3xl align-middle font-satoshi font-semibold flex-center">
        We build immersive experiences
      </h1>
      <p className="text-center font-satoshi flex-center mt-1 text-2xl">
        Propelius Technologies is focused on delivering quality, innovative
        <br />
        solutions with groundbreaking technology.
      </p>

      <div className="flex flex-wrap">
        {dataTech.map((item, index) => (
          <CustomTech image={item.image} desc={item.desc} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;

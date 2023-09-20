import React from "react";
import web from "../public/assets/images/web.png";
import Image from "next/image";

const CustomTech = (props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-4">
      <Image
        className="mt-10"
        src={props.image}
        alt="web developers"
        width={100}
        height={100}
      />
      <p className="semi_satoshi mt-2">{props.name}</p>
      <p className="font-satoshi mt-2 ">{props.desc}</p>
    </div>
  );
};

export default CustomTech;

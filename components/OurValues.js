import Image from "next/image";
import React from "react";

import rocket from "../public/assets/images/rocket.png";
import profit from "../public/assets/images/profit.png";
import transparent from "../public/assets/images/transparent.png";

const OurValues = () => {
  return (
    <div className="flex justify-between w-full flex-wrap  mt-10 mb-10 ">
      {/* md:w-1/2 lg:w-1/3 */}
      <div className="border-2 rounded-xl border-solid border-gray-500 m-4 flex-col w-1/3 justify-center align-middle flex-1 flex-center  p-4">
        {/* Innovation */}

        <Image
          className="mt-4"
          src={rocket}
          height={100}
          width={100}
          alt="Innovation"
        />
        <h2 className="semi_satoshi text-xl mt-2">Innovation</h2>
        <p className=" text-lg mt-2 text-center px-3 pb-4">
          We believe in innovating and meeting customer needs in every project.
        </p>
      </div>
      <div className="border-2 rounded-xl border-solid border-gray-500 m-4 flex-col w-1/3  justify-center align-middle flex-1 flex-center">
        {/* 100% Transparency */}

        <Image
          className="mt-4"
          src={transparent}
          height={100}
          width={100}
          alt="100% Transparency"
        />
        <h2 className="semi_satoshi text-xl mt-2">100% Transparency</h2>
        <p className=" text-lg mt-2 text-center px-3 pb-4">
          We believe in innovating and meeting customer needs in every project.
        </p>
      </div>
      <div className="m-4 border-2 rounded-xl border-solid border-gray-500 flex-col w-1/3  justify-center align-middle flex-1 flex-center">
        {/* Value for Money */}
        <Image
          className="mt-4"
          src={profit}
          height={100}
          width={100}
          alt="Value for Money"
        />
        <h2 className="semi_satoshi text-xl mt-2">Value for Money</h2>
        <p className=" text-lg mt-2 text-center px-3 pb-4">
          We believe in innovating and meeting customer needs in every project.
        </p>
      </div>
    </div>
  );
};

export default OurValues;

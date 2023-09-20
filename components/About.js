import Image from "next/image";
import React from "react";
import logo from "../public/assets/images/logo.png";
import linkedin from "../public/assets/images/linkedin.png";
import facebook from "../public/assets/images/facebook.png";
import instagram from "../public/assets/images/instagram.png";
import skype from "../public/assets/images/skype.png";
import email from "../public/assets/images/email.png";
import phone from "../public/assets/images/phone.png";
import location from "../public/assets/images/location.png";

const About = () => {
  return (
    <div className="justify-center flex flex-wrap mt-32 w-full mb-40">
      <div className="justify-between w-full flex flex-wrap">
        <div className="flex-col ">
          <Image src={logo} height={100} width={200} alt="Vrundavan" />
          <div className="flex-row flex flex-wrap justify-between mt-3">
            <Image src={linkedin} height={30} width={30} alt="Vrundavan" />
            <Image src={instagram} height={30} width={30} alt="Vrundavan" />
            <Image src={skype} height={30} width={30} alt="Vrundavan" />
            <Image src={facebook} height={30} width={30} alt="Vrundavan" />
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-black font-satoshi mb-4">SUPPORT</h2>
          <h3 className="about_text">Careers</h3>
          <h3 className="about_text">Get to know us</h3>
          <h3 className="about_text">Portfolio</h3>
        </div>
        <div>
          <div className="about_head_text">CONNECT US</div>
          <div className="flex-row flex items-center">
            <Image src={phone} height={30} width={30} alt="Vrundavan" />
            <h3 className="about_text mx-3 text-center flex-center ">
              +91 7096698277 / <br />
              +91 9737114083
            </h3>
          </div>

          <div className="flex-row flex items-center mt-2">
            <Image src={email} height={30} width={30} alt="Vrundavan" />
            <h3 className="about_text mx-3 text-center flex-center ">
              kuldeep.v.rathod@gmail.com
            </h3>
          </div>
        </div>
        <div>
          <div className="about_head_text">FIND US</div>
          <div className="flex-row flex items-center">
            <Image src={location} height={30} width={30} alt="Vrundavan" />
            <h3 className="about_text mx-3 flex-center ">
              13, Swaminarayan soc-2, <br /> Opp. Renukabhavan, <br />
              Puna to Bombay market road, <br /> Varachha, Surat - 395010.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

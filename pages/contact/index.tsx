import ParticlesContainer from "@/components/ParticlesContainer";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="h-full relative">
      <div className="text-center flex flex-row items-center justify-center xl:pt-10 xl:text-left h-full container mx-auto relative">
        <h1 className="h1">Contact us.</h1>
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <p>By phone</p>
            <p>+46(0) 20 353 432</p>
            <p>By email</p>
            <p>support@novavest.com</p>
          </div>
          <Image src={"/phone.png"} alt="phone" width={600} height={400} />
        </div>
      </div>

      <div>
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Contact;

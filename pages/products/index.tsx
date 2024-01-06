import ContentSection__2 from "@/components/ContentSectionTwo";
import ParticlesContainer from "@/components/ParticlesContainer";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="h-full relative">
      <div className="text-center flex flex-col xl:pt-40 xl:text-left h-full container mx-auto relative">
        <h1 className="h1">Products.</h1>
        <ContentSection__2/>
      </div>

      <div>
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Contact;

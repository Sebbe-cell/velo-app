import ContentSection__2 from "@/components/ContentSectionTwo";
import ParticlesContainer from "@/components/ParticlesContainer";
import React from "react";

const About = () => {
  return (
    <div className="h-full">
      <div className="text-center flex flex-col xl:pt-40 xl:text-left h-full container mx-auto">
        <h1 className="h1">About us.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
          animi possimus officiis fugiat, corrupti modi similique nam laboriosam
          voluptas! Tempore.
        </p>
      </div>

      <ContentSection__2 />
      <div>
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default About;

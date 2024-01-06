import ParticlesContainer from "../components/ParticlesContainer";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";
import Image from "next/image";
import ContentSection from "@/components/ContentSection";
import Cta from "@/components/Cta";

const Home = () => {
  return (
    <div className="h-full">
      <div className="w-full h-full">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <div className="xl:flex xl:flex-row justify-between mt-20">
            <div>
              {/* title */}
              <motion.h1
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="sm:h1 text-[36px] pt-10 xl:p-0"
              >
                Unlock new possibilities
                <br /> with{" "}
                <span className=" text-blue-400">NovaVest Financial</span>
              </motion.h1>
              {/* subtitle */}
              <motion.p
                variants={fadeIn("down", 0.3)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
              >
                {`Discover personalized investment strategies tailored to your goals and aspirations.`}
              </motion.p>
            </div>
            <Image
              className="hidden xl:flex"
              src={"/graphs.svg"}
              width={220}
              height={48}
              alt=""
              priority={true}
            />
          </div>
        </div>
      </div>

      <ContentSection
        title="Explore the Future of Investing"
        description_first="Dive into a world of financial possibilities with NovaVest Financial."
        description_second="Our personalized investment strategies are designed to align with your unique goals and aspirations."
        buttonText="Learn more"
      />

      <div className="relative z-10">
        <Cta />
      </div>

      <ContentSection
        title="Explore the Future of Investing"
        description_first="Dive into a world of financial possibilities with NovaVest Financial."
        description_second="Our personalized investment strategies are designed to align with your unique goals and aspirations."
        buttonText="Learn more"
      />

      <div className="max-h-[500px] overflow-hidden relative">
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Home;

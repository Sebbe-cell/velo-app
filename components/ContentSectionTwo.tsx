import Image from "next/image";
import React from "react";

const ContentSection__2 = (): JSX.Element => {
  return (
    <section className="max-container py-20">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Discover Our Services
          </h2>
          <p className="mb-4">
            {`Explore a wide range of financial services designed to meet your unique needs and goals. Our team is dedicated to providing you with personalized solutions for a brighter financial future.`}
          </p>
          <p>
            {`Whether you are looking for investment advice, retirement planning,
            or assistance with managing your assets, we've got you covered. Join
            us on the path to financial success.`}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src="/card.jpg"
            alt="office content 1"
            width={300}
            height={200}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="/numbers.jpg"
            alt="office content 2"
            width={300}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default ContentSection__2;

import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoesCard from "../components/ShoesCard";

const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1);

  return (
    <>
      <section
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
      >
        <div className="relative xl:w-2/5 flex flex-col justify-start items-start w-full max-xl:padding-x pt-28">
          <p className="text-xl font-montserrat text-coral-blue">
            All Weather Collections
          </p>
          <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold ">
            <span className="relative xl:bg-white xl:whitespace-nowrap lg:z-10 pr-10">
              The Most Latest
            </span>
            <br />
            <span className="text-coral-blue inline-block mt-3">Nike</span>{" "}
            Shoes
          </h1>
          <p className="text-slate-gray font-montserrat text-lg leadnig-8 mt-6 mb-14 max-w-lg">
            Explore Nike's world of premium sportswear and athletic footwear.
            Discover top-quality products designed to enhance your athletic
            performance and style. Shop the latest collections and enjoy
            unbeatable comfort and style. Join the Nike community today.
          </p>
          <Button label={"Shop now"} iconUrl={arrowRight} />
          <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((item, index) => (
              <div key={index}>
                <p className="text-4xl font-bold font-palanquin">
                  {item.value}
                </p>
                <p className="leading-7 font-montserrat text-slate-gray">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative  flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-gradient-to-b from-blue-300 to-teal-50 ">
          <img
            src={bigShoe}
            alt="shoes"
            width={610}
            height={500}
            className="object-contain releative"
          />
          <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 z-11">
            {shoes.map((img, index) => (
              <div key={index}>
                <ShoesCard
                  index={index}
                  imgUrl={img}
                  changeBigShoe={(shoe) => setBigShoe(shoe)}
                  bigShoe={bigShoe}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

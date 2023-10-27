import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";
const Quality = () => {
  return (
    <>
      <section
        id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
      >
        <div className="flex flex-1 flex-col">
          <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg font-hold">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
              Discover{" "}
              <span className="text-coral-blue inline-block mt-3">Prrmium</span>{" "}
            </span>{" "}
            <br />
            <span className="text-coral-blue inline-block mt-3">Footwear</span>
          </h2>
          <p className="mt-4 lg:maz-w-lg info-text">
            Explore Nike's world of top-tier sportswear and athletic footwear.
            Uncover high-quality products meticulously crafted to elevate both
            your athletic performance and style. Shop the latest collections and
            indulge in unbeatable comfort and fashion. Join the Nike community
            today.
          </p>
          <p className="mt-6 lg:max-w-lg info-text">
            Immerse yourself in our newest collections, delivering unparalleled
            comfort and unrivaled style. Become a part of the Nike community
            today and experience the pinnacle of sportswear excellence.
          </p>

          <div className="mt-11 ">
            <Button label={"View Details"} />
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center bg-gradient-to-r from-blue-200 to-green-100 rounded">
          <img
            src={shoe8}
            alt="shoe"
            width={570}
            height={522}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Quality;

import React from "react";

const ShoesCard = ({ imgUrl, changeBigShoe, bigShoe }) => {
  const handleClick = () => {
    if (bigShoe !== imgUrl.bigShoe) {
      changeBigShoe(imgUrl.bigShoe);
    }
  };
  return (
    <>
      <div
        className={`border-2 rounded-xl ${
          bigShoe === imgUrl.bigShoe
            ? "border-coral-blue"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div
          className="flex justify-center items-center bg-gradient-to-b from-red-300
         to-teal-100 sm:h-40 rounded"
        >
          <img
            src={imgUrl.thumbnail}
            alt="shoe"
            width={127}
            height={103}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default ShoesCard;

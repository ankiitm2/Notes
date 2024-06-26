import Image from "next/image";
import React from "react";

const Heroes = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/Documents.svg"
            alt="documents"
            fill
            className="object-contain"
          />
        </div>
        <div className="relative w-[400px] h-[400px] hidden md:block">
          <Image
            src="/Reading.svg"
            alt="reading"
            className="object-contain"
            fill
          />
        </div>
      </div>
    </div>
  );
};
export default Heroes;

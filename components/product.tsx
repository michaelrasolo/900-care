'use client'
import React from "react";
import Image from "next/image";
import Accordion from "./accordion";
import { useState } from "react";

function Product() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="p-20 bg-white h-max flex-col flex items-center space-y-10 w-screen text-almost-black">
      <h1 className="text-center font-ultra text-6xl font-bold text-almost-black">
        Nos produits à reconstituer
      </h1>
      <div className=" w-full h-screen shrink-0 relative">
        <Image
          src="/gamme.png"
          alt="Produits à reconstituer"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
className="rounded-large"
        />{" "}
      </div>
      <Accordion
        title="Comment utiliser mon gel douche ?"
        isOpen={isOpen}
        toggleAccordion={toggleAccordion}
      />    </div>
  );
}

export default Product;

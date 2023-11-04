import React from "react";
import Image from "next/image";
function Product() {
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
    </div>
  );
}

export default Product;

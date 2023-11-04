import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex h-screen-minus-90 item-stretch w-screen gap-2.5 border-t">
      <div className="w-5/12 h-screen-minus-90 shrink-0 relative">
        <Image
          src="/hero.png"
          alt="Home image"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />{" "}
      </div>
      <div className="text-almost-black  flex p-10 flex-col justify-center items-start gap-8 flex-1 ">
        <h1 className="font-ultra text-6xl font-extrabold leading-3.75rem">
          Bienvenue chez 900.care !
        </h1>
        <p className="text-almost-black font-poppins text-xl font-normal leading-6">
          Si vous lisez ce livret, c&apos;est que vous avez décidé de faire un
          “happy change” dans votre salle de bain : de réduire vos déchets
          plastiques, de transporter moins d&apos;eau pour rien, de consommer
          local et de lutter contre la surproduction. Et pour cela on vous
          dit...
        </p>
        <h2 className="text-almost-black font-ultra2 text-xl font-bold leading-6">
          Merci, bravo et BIENVENUE !
        </h2>
        <p className="text-almost-black font-poppins text-xl font-normal leading-6 overflow-hidden">
          Chez 900.care, notre mission c&apos;est de vous faire ADORER nos
          produits d&apos;hygiène et de soins rechargeables pour que vous disiez
          bye-bye au plastique jetable. Nous avons créé pour vous (et avec vous
          !) des produits très naturels, qui sentent bon, qui moussent quand il
          faut, qui respectent votre peau, vos cheveux, vos dents et votre
          santé. Tout cela, en vous apportant un vrai moment de PLAISIR !
        </p>
      </div>
    </div>
  );
}

export default Hero;

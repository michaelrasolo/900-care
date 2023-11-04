import React from 'react';

interface PlanetCardProps {
  number: number;
  text: string;
}

function PlanetCard(props: PlanetCardProps) {
    const formattedNumber = props.number.toLocaleString('fr-FR');

  return (
    <div className="bg-light-yellow flex w-64 h-72 px-3 flex-col justify-center items-center gap-2 rounded-3xl">
      <h1 className="font-ultra w-52 text-9xl font-black leading-3.75rem text-center">
        {formattedNumber}
      </h1>
      <h2 className="text-almost-black w-52 font-poppins text-base font-semibold leading-5 text-center">
        {props.text}
      </h2>
    </div>
  );
}

export default PlanetCard;

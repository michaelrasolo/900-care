import React from 'react'
import PlanetCard from './planetCard'
const infos = [
  {number:110, text:"kilos de CO2 économisés, soit un trajet Paris - Barcelone en voiture (1035 km)"},
  {number:6, text:"fois moins d'émissions de CO2"},
  {number:35, text:"litres d'eau non-transportés par camion ou avion"},
  {number:6.5, text:"kilos de plastique évité par an"},
]
function Planet() {
  return (
<div className="py-20 bg-yellow h-screen-minus-90 flex-col flex items-center space-y-10 w-screen text-almost-black">
        <h1 className="font-ultra text-6xl font-bold leading-3.75rem text-almost-black text-center">
          Meilleur pour notre planète
        </h1>
        <h2 className="w-[500px] text-almost-black font-ultra2 text-2xl font-bold leading-6 text-center">
          Grâce à l'utilisation des produits 900.care, pour une joyeuse tribu de
          4 personnes et par an, c'est plus de :{" "}
        </h2>

        <div className="flex-wrap flex justify-center items-start gap-10">
        {infos.map((info,index) => (
            <PlanetCard
            key={index}
              number={info.number}
              text={info.text}
            />
          ))}
        </div>
      </div>  )
}

export default Planet
import React from 'react'
import PlanetCard from './planetCard'
function Planet() {
  return (
<div className="py-20 bg-yellow h-screen-minus-90 flex-col flex items-center space-y-10 w-screen text-almost-black">
        <h1 className="font-ultra text-6xl font-bold leading-3.75rem text-almost-black text-center">
          Meilleur pour notre planète
        </h1>
        <h2 className="w-[500px] text-almost-black font-ultra2 text-2xl font-bold leading-6 text-center">
          Grâce à l&apos;utilisation des produits 900.care, pour une joyeuse tribu de
          4 personnes et par an, c&apos;est plus de :{" "}
        </h2>

        <div className="flex-wrap flex justify-center items-start gap-10">
        <PlanetCard number={110} text="kilos de CO2 économisés, soit un trajet Paris - Barcelone en voiture (1035 km)" />
        <PlanetCard number={6} text="fois moins d&apos;émissions de CO2" />
        <PlanetCard number={35} text="litres d&apos;eau non-transportés par camion ou avion" />
        <PlanetCard number={6.5} text="kilos de plastique évité par an" />
        </div>
      </div>  )
}

export default Planet
import React from 'react'
import Image from 'next/image';

interface accordionCardProps {
  imageSrc: string;
  number: number;
  description: string;
}
function AccordionCard(props:accordionCardProps) {
  return (
<div className="flex h-52 p-3 items-center gap-8">
      <Image src={props.imageSrc} alt="Your Image" width={64} height={64} />
      <div className="flex-1 flex flex-col gap-2.5">
        <div className="w-12 h-12 rounded-full flex justify-center items-center font-ultra text-3xl text-white bg-pink">
          {props.number}
        </div>
        <div className="font-poppins text-xl text-almost-black">
          {props.description}
        </div>
      </div>
    </div>  )
}

export default AccordionCard
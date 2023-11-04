import React from 'react'
interface EllipseProps {
    backgroundColor: string;
    title: string;
    description: string;
    number: string;
  }
function SubEllipse(props:EllipseProps) {
  return (
<div className={`flex w-96 h-96 flex-col justify-center items-center gap-2.5 self-stretch rounded-full bg-${props.backgroundColor}`}>
      <p className="text-center font-ultra text-6xl font-bold text-almost-black">
        {props.number}
      </p>
      <h2 className="w-48 text-almost-black font-ultra text-3xl font-bold leading-7 text-center">
        {props.title}
      </h2>
      <p className="text-center flex flex-col justify-center font-poppins text-xl text-almost-black leading-6 w-64 h-24">
        {props.description}
      </p>
    </div>  )
}

export default SubEllipse
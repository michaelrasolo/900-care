import React from "react";
interface SubCardProps {
  title: string;
  text: string;
}
function SubCard(props: SubCardProps) {
  return (
    <div className="flex w-72 p-6 flex-col justify-center items-center gap-2">
      <h2 className="w-64 text-almost-black font-ultra text-3xl font-bold leading-7 text-center">
        {props.title}
      </h2>
      <p className="text-almost-black w-64 font-poppins text-base font-semibold leading-5 text-center">
        {props.text}
      </p>
    </div>
  );
}

export default SubCard;

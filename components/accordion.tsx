import Image from "next/image";
import AccordionCard from "./accordionCard";

interface AccordionProps {
  title: string;
  isOpen: boolean;
  toggleAccordion: () => void;
}

export default function Accordion(props: AccordionProps) {
  return (
    <div className="rounded-2xl border border-gray-300 flex flex-col w-[814px] gap-2.5">
      <button
        className="py-5 px-10 flex flex-col"
        onClick={props.toggleAccordion}
      >
        <div className="self-stretch space-x-2.5 text-almost-black text-left font-poppins text-base font-semibold leading-6 transition duration-300">
          <div>
            {props.title}
            <div
              className={`w-8 h-8 float-right transform transition-transform duration-300 ${
                props.isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              {props.isOpen ? (
                <p className="text-center text-4xl font-poppins font-normal">
                  -
                </p>
              ) : (
                <p className="text-center text-4xl font-poppins font-normal">
                  +
                </p>
              )}
            </div>
          </div>
        </div>
      </button>
      {props.isOpen && (
        <div className="grid grid-cols-2 grid-rows-2 p-3 transition-ease-in-out duration-500">
            <AccordionCard
        imageSrc="/shower01.png"
        number={1}
        description="Insérez deux batônnets dans votre bouteille réutilisable"
      />
            <AccordionCard
        imageSrc="/shower02.png"
        number={2}
        description="Ajoutez de l&apos;eau chaude jusqu&apos;au trait (240 mL)"
      />
            <AccordionCard
        imageSrc="/shower03.png"
        number={3}
        description="Posez votre flacon tête en haut, languette ouverte et laissez reposer 6h minimum"
      />
            <AccordionCard
        imageSrc="/shower04.png"
        number={4}
        description="Refermez la languette, secouez un peu, moussez !"
      />
        </div>
      )}
    </div>
  );
}

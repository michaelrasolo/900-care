import React from "react";
import SubCard from "./subCard";
import SubEllipse from "./subEllipse";
const subInfos = [
  {
    title: "C'est + écologique",
    text: "Pas de surproduction ni de stock périmés, des livraisons regroupées et neutres en carbone.",
  },
  {
    title: "C'est + économique",
    text: "Nous pouvons vous offrir le prix le plus juste en étant sûrs de nos revenus à long terme.",
  },
  {
    title: "C'est + pratique",
    text: "Vous n'oubliez jamais qu'il fallait acheter du dentifrice. Bye bye la charge mentale !",
  },
];

const steps = [
  {
    backgroundColor: "light-blue",
    number: "#1",
    title: "Réception de votre kit d'essai",
    description: "Vous permet de tester nos produits pendant 2 semaines !",
  },
  {
    backgroundColor: "light-pink",
    number: "#2",
    title: "Et dans 20 jours",
    description:
      "Vous recevez votre première livraison de recharges, directement dans votre boite aux lettres !",
  },
];
function Subscription() {
  return (
    <div className="py-20 bg-light-green h-max flex-col flex items-center space-y-10 w-screen text-almost-black">
      <h1 className="text-center font-ultra text-6xl font-bold text-dark-green w-[800px]">
        L'abonnement 900% libre, pourquoi ?
      </h1>
      <h2 className="w-[500px] text-almost-black font-ultra text-3xl font-bold leading-7 text-center">
        Pourquoi l'abonnement ?
      </h2>

      <div className="flex-wrap flex justify-center items-start gap-10">
        {subInfos.map((info, index) => (
          <SubCard key={index} text={info.text} title={info.title} />
        ))}
      </div>
      <h2 className="w-[500px] text-almost-black font-ultra text-3xl font-bold leading-7 text-center">
        Comment ça marche ?
      </h2>
      <div className="flex-wrap flex justify-center items-start gap-10">
        {steps.map((step, index) => (
          <SubEllipse
            backgroundColor={step.backgroundColor}
            number={step.number}
            title={step.title}
            description={step.description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Subscription;

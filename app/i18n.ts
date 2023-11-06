import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "fr",
    resources: {
      en: {
        translation: {
          hero: {
            title: "Welcome to 900.care!",
            p1: "If you are reading this booklet, it means you have decided to make a 'happy change' in your bathroom: to reduce your local waste and fight against overproduction. And for that, we say...",
            p2: "At 900.care, our mission is to make you LOVE our rechargeable hygiene and care products so that you can say goodbye to disposable plastic. We have created for you (and with you!) very natural products that smell good, lather when needed, respect your skin, hair, teeth, and your health. All of this while bringing you a real moment of PLEASURE!",
            subtitle: "Thank you, congratulations, and WELCOME!",
          },
        },
      },
      fr: {
        translation: {
          hero: {
            title: "Bienvenue chez 900.care !",
            p1: "Si vous lisez ce livret, c&apos;est que vous avez décidé de faire un “happy change” dans votre salle de bain : de réduire vos déchets local et de lutter contre la surproduction. Et pour cela on vous dit...",
            p2: "Chez 900.care, notre mission c&apos;est de vous faire ADORER nos produits d&apos;hygiène et de soins rechargeables pour que vous disiezbye-bye au plastique jetable. Nous avons créé pour vous (et avec vous!) des produits très naturels, qui sentent bon, qui moussent quand ilfaut, qui respectent votre peau, vos cheveux, vos dents et votresanté. Tout cela, en vous apportant un vrai moment de PLAISIR !",
            subtitle: "Merci, bravo et BIENVENUE !",
          },
        },
      },
    },
  });

export default i18n;

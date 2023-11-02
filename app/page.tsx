import Image from "next/image";
//Node.js 18.17
export default function Home() {
  const figmaLink =
    "https://www.figma.com/file/L3cW4GiDuvudnL5DGpF5qv/Figma---Livret?type=design&node-id=0%3A1&mode=design&t=7Xf0rPf03m3P157n-1";
  return (
    <main className="flex min-h-screen items-center flex-wrap gap-4 p-24">
      <div className="p-8 gap-4 flex flex-col font-poppins justify-center">
        <h1 className="text-4xl font-ultra text-center">Instructions</h1>
        <p className="text-xl bg-slate-100 p-4 rounded-2xl">
          À partir d&apos;un design disponible sur{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-blue-600 cursor-pointer hover:underline"
            href={figmaLink}
          >
            Figma
          </a>
          , votre tâche consiste à créer une page en transcrivant fidèlement ce
          design.
        </p>
        <div className="flex flex-col gap-1 p-4 bg-slate-100 rounded-2xl">
          <p className="text-lg font-bold">Voici les étapes à suivre :</p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              Décomposer le design en composants appropriés et les intégrer dans
              votre page.
            </li>
            <li>
              Utiliser les technologies suivantes : Next.js, TailwindCSS,
              i18next et Typescript.
            </li>
            <li>
              Le design comporte un bouton permettant de changer la langue de la
              page. Implémenter la traduction de la page avec i18next, en
              incluant uniquement les langues française et anglaise.
            </li>
            <li>
              Structurer votre code de manière à ce qu&apos;il soit facilement
              maintenable et lisible.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

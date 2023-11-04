import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Planet from "@/components/planet";
import Subscription from "@/components/subscription";
import Product from "@/components/product";
const Home = () => {
  const figmaLink =
    "https://www.figma.com/file/L3cW4GiDuvudnL5DGpF5qv/Figma---Livret?type=design&node-id=0%3A1&mode=design&t=7Xf0rPf03m3P157n-1";
  return (
    <main className="flex min-h-screen min-h-screen justify-start	items-center flex-wrap gap-0">
      <Navbar />
      <Hero />
      <Planet />
      <Subscription />
      <Product/>
    </main>
  );
};
export default Home;

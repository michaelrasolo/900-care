import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Planet from "@/components/planet";
import Subscription from "@/components/subscription";
import Product from "@/components/product";

const Home = () => {
  
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

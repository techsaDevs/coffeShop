import Landing from "@/Components/Home/Landing";
import Products from "@/Components/Home/Products";
import Popular from "@/Components/Home/Popular";
import Categorys from "@/Components/Home/Categorys";
import BestSelling from "@/Components/Home/BestSelling";
import CoffeClub from "@/Components/Home/CoffeClub";
import Blog from "@/Components/Home/Blog";

export default function Home() {
  return (
    <main className="text-foreground min-h-screen">
        <Landing />
        <Products />
        <Popular />
        <Categorys />
        <BestSelling />
        <CoffeClub />
        <Blog />
    </main>
  );
}
import Landing from "@/Components/Home/Landing";
import Products from "@/Components/Home/Products";
import Popular from "@/Components/Home/Popular";
import Categorys from "@/Components/Home/Categorys";

export default function Home() {
  return (
    <main className="text-foreground min-h-screen">
        <Landing />
        <Products />
        <Popular />
        <Categorys />
    </main>
  );
}
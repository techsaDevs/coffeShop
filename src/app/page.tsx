import Landing from "@/Components/Home/Landing";
import Products from "@/Components/Home/Products";
import Popular from "@/Components/Home/Popular";

export default function Home() {
  return (
    <main className="text-foreground min-h-screen">
        <Landing />
        <Products />
        <Popular />
        
    </main>
  );
}
import Landing from "@/Components/Home/Landing";
import Products from "@/Components/Home/Products";

export default function Home() {
  return (
    <main className="text-foreground min-h-screen">
        <Landing />
        <Products />
    </main>
  );
}
// Components
import Header from "@components/commons/structure/Header";
import { HeroBanner } from "@components/sections/HeroBanner";
import { Product } from "@components/sections/Product";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <Product />
      </main>
    </>
  );
}

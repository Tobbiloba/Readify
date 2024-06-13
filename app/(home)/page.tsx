
import ActiveProducts from "@/components/active-products";
import Hero from "@/components/hero/Hero";
import { getActiveProducts } from "@/lib/server-actions";
import BestSellingBooks from "@/sections/best-selling/best-selling-books";




const Home = async () => {

  const activeProducts = await getActiveProducts();

  console.log (activeProducts, 'active products here')


  return (
   <>
   <div className="max-w-[100vw] overflow-x-hidden py-0">
    <Hero />
    <BestSellingBooks />
    <ActiveProducts
    activeProducts={activeProducts}
    
    />
   </div>
   </>
  );
}


export default Home;
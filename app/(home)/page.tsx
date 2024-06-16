
import ActiveProducts from "@/components/active-products";
import Hero from "@/components/hero/Hero";
import { getActiveProducts } from "@/lib/server-actions";
import BestSellingBooks from "@/app/sections/best-selling/best-selling-books";
import DealOfTheWeek from "@/app/sections/deals-of-the-week/deals-of-the-week";
import Trending from "../sections/trending/trending";
import Review from "../sections/reviews/review";
import PopularBooks from "../sections/popular-books/popular-books";




const Home = async () => {

  // const activeProducts = await getActiveProducts();

  // console.log (activeProducts, 'active products here')


  return (
   <>
   <div className="max-w-[100vw] overflow-x-hidden py-0">
    <Hero />
    <BestSellingBooks />
    <DealOfTheWeek />
    <Trending />
    <Review />
    <PopularBooks />
    {/* <ActiveProducts
    activeProducts={activeProducts}
    
    /> */}
   </div>
   </>
  );
}


export default Home;
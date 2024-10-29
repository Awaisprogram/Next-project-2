import Comp from "./components/about";
import Contact from "./components/contact";
import Review from "./components/reviews";
import Features from "./features/page";
import  Main  from "./home/page";

export default function Home() {
  return (
   <>
   <Main/>
   <Features/>
   <Comp/>
   <Review/>
   <Contact/>
   </>
  );
}

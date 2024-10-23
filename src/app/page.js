import VideoResult from "../app/VideoResult/page"
import Headers from "../app/Headers/page"
import Pricing from "../app/Pricing/page"
import HeroSection from "../app/Hero/page"
import Variety from "../app/Variety/page"
import AiStyleSelector from "../app/AiStyleSelector/page"
import Faq from "../app/Faq/page"
import Footer from "../app/Footer/page"
import GetStarted from "../app/GetStarted/page"
export default function Home() {
  return (
  <>
  <Headers/>
  <HeroSection/>
  <VideoResult/>
  <Pricing/>
  <Variety/>
  <AiStyleSelector/>
  <GetStarted/>
  <Faq/>
  <Footer/>
  </>
  );
}

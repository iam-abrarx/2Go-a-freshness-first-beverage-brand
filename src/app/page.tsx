import DesignHero from "@/components/DesignHero";
import Navbar from "@/components/Navbar";
import MissionQuote from "@/components/MissionQuote";
import Categories from "@/components/Categories";
import Banners from "@/components/Banners";
import Reviews from "@/components/Reviews";
import Locations from "@/components/Locations";
import SocialFeed from "@/components/SocialFeed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="transition-all duration-500">
      <Navbar />
      <DesignHero />
      <MissionQuote />
      <Categories />
      <Banners />
      <Reviews />
      <Locations />
      <SocialFeed />
      <Contact />
      <Footer />
    </main>
  );
}

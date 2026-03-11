import OldHero from "@/components/OldHero";
import Navbar from "@/components/Navbar";
import MissionQuote from "@/components/MissionQuote";
import Categories from "@/components/Categories";
import Stories from "@/components/Stories";
import Reviews from "@/components/Reviews";
import Locations from "@/components/Locations";
import SocialFeed from "@/components/SocialFeed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LogoSlider from "@/components/LogoSlider";

export default function HeroDemoPage() {
  return (
    <main className="transition-all duration-500 min-h-screen">
      <Navbar />
      <OldHero />
      <MissionQuote />
      <Categories />
      <Stories />
      <LogoSlider />
      <Reviews />
      <Locations />
      <SocialFeed />
      <Contact />
      <Footer />
    </main>
  );
}

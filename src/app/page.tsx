import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Banners from "@/components/Banners";
import Reviews from "@/components/Reviews";
import Locations from "@/components/Locations";
import SocialEmbeds from "@/components/SocialEmbeds";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Categories />
      <Banners />
      <Reviews />
      <Locations />
      <SocialEmbeds />
      <Contact />
      <Footer />
    </main>
  );
}

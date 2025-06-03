import HeroSection from "./components/home/hero";
import NewArrivals from "./components/home/new-arrivals";
import PartnerSlider from "./components/home/partner";

export default function Home() {
  return (
    <main className="py-4">
      <HeroSection />
      <PartnerSlider />
      <NewArrivals />
    </main>
  );
}

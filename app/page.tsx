import HeroSection from "./components/home/hero";
import PartnerSlider from "./components/home/partner";

export default function Home() {
  return (
    <main className="py-4">
      <HeroSection />
      <PartnerSlider />
    </main>
  );
}

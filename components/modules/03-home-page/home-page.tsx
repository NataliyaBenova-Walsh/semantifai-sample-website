import QuotesSection from "./quotes-section";
import HeroSection from "@/components/modules/03-home-page/hero-section";
import ProductSection from "@/components/modules/03-home-page/product-section";
import DescriptionSection from "@/components/modules/03-home-page/description-section";

export default function HomePage() {
    return (
     <div>
      <HeroSection />
      
      <QuotesSection />
      <ProductSection />
     </div>
    );
  }
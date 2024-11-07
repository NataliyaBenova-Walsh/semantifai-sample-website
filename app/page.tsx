import { Main } from "@/components/common/02-page-ui/main";
import HeroSection from "@/components/modules/03-home-page/hero-section";
import ProductSection from "@/components/modules/03-home-page/product-section";
import DescriptionSection from "@/components/modules/03-home-page/description-section";

export default function Home() {
  return (
   <div>
    <HeroSection />
    <DescriptionSection />
    <ProductSection />
   </div>
  );
}

import ProductSkeleton from "@/components/products/product-skeleton";
import FeaturedProducts from "@/components/ui/landing-page/featured-products";
import HeroSection from "@/components/ui/landing-page/hero-section";
import RecentlyLaunchedProducts from "@/components/ui/landing-page/recently-launched-products";
import { LoaderIcon } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <FeaturedProducts />

      <Suspense fallback={<ProductSkeleton />}>
        <RecentlyLaunchedProducts />
      </Suspense>
    </div>
  );
}

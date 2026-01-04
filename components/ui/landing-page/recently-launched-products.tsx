import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import ProductCard from "@/components/products/product-card";
import EmptyState from "../common/empty-state";

export default function RecentlyLaunchedProducts() {
  const recentlyLaunchedProducts: typeof ProductCard extends React.FC<{product: infer T}> ? T[] : never = [];
  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader
          title="Recently Launched"
          icon={RocketIcon}
          description="Discover the latest products from our community."
        />

        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No products launched in the last week. Check back for new launches."
            icon={CalendarIcon}
          />
        )}
      </div>
    </section>
  );
}

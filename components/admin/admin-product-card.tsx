import { ProductType } from "@/types";
import { Trash2Icon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import AdminActions from "@/components/admin/admin-actions";
import { cn } from "@/lib/utils";

export default function AdminProductCard({
  product,
}: {
  product: ProductType;
}) {
  return (
    <div className="border rounded-lg p-6 bg-background hover:shadow-md transition-shadow">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <Badge
              className={cn(
                product.status === "pending" &&
                  "bg-yellow-600/10 text-yellow-600 border-yellow-600",
                product.status === "approved" &&
                  "bg-green-500/10 text-green-600 border-green-500",
                product.status === "rejected" &&
                  "bg-red-500/10 text-red-500 border-red-500"
              )}
            >
              {product.status}
            </Badge>
          </div>

          <p className="text-muted-foreground">{product.tagline}</p>

          <div className="flex flex-wrap items-center gap-2">
            {product.tags?.map((tag) => (
              <Badge variant="secondary" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <p>
              <span className="font-bold">By:</span> {product.submittedBy}
            </p>
            <p>
              {product.createdAt
                ? new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  }).format(new Date(product.createdAt?.toISOString() ?? ""))
                : ""}
            </p>
            <p>
              <a
                href={product.websiteUrl ?? ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </p>
          </div>

          <Button variant="outline">
            <Trash2Icon className="size-4" />
            Delete
          </Button>
        </div>
        <div className="lg:shrink-0">
          <AdminActions status={product.status ?? ""} productId={product.id} />
        </div>
      </div>
    </div>
  );
}

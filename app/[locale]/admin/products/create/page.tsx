export const dynamic = "force-dynamic";
import ProductForm from "./product-form";
import { getAllCategories } from "@/lib/actions/product.actions";

export default async function CreateProductPage() {
  const categories = await getAllCategories();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Create Product</h1>
        <p className="text-muted-foreground">
          Add a new product to your store
        </p>
      </div>
      <ProductForm categories={categories} />
    </div>
  );
} 
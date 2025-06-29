import Image from "next/image";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { IProduct } from "@/lib/db/models/product.model";
import Rating from "@/components/shared/product/rating";

import { formatNumber, generateId, round2 } from "@/lib/utils";
import ProductPrice from "@/components/shared/product/product-price";
import ImageHover from "@/components/shared/product/image-hover";
import AddToCart from "./add-to-cart";
import { Badge } from "@/components/ui/badge";

const ProductCard = ({
  product,
  hideBorder = false,
  hideDetails = false,
  hideAddToCart = false,
}: {
  product: IProduct;
  hideDetails?: boolean;
  hideBorder?: boolean;
  hideAddToCart?: boolean;
}) => {
  const ProductImage = () => (
    <Link href={`/product/${product.slug}`}>
      <div className="relative h-52 group overflow-hidden rounded-lg">
        {product.images.length > 1 ? (
          <ImageHover
            src={product.images[0]}
            hoverSrc={product.images[1]}
            alt={product.name}
          />
        ) : (
          <div className="relative h-52">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="80vw"
              className="object-contain transition-transform group-hover:scale-105"
            />
          </div>
        )}
        {product.tags.includes("todays-deal") && (
          <Badge className="absolute top-2 left-2 bg-red-500 text-white">
            Deal
          </Badge>
        )}
        {product.countInStock <= 3 && product.countInStock > 0 && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            Only {product.countInStock} left
          </Badge>
        )}
      </div>
    </Link>
  );
  
  const ProductDetails = () => (
    <div className="flex-1 space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
          {product.brand}
        </p>
        <Rating rating={product.avgRating} />
      </div>
      
      <Link
        href={`/product/${product.slug}`}
        className="block group"
      >
        <h3 
          className="font-medium text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {product.name}
        </h3>
      </Link>
      
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span>({formatNumber(product.numReviews)} reviews)</span>
        {product.numSales > 0 && (
          <span>• {formatNumber(product.numSales)} sold</span>
        )}
      </div>

      <ProductPrice
        isDeal={product.tags.includes("todays-deal")}
        price={product.price}
        listPrice={product.listPrice}
        forListing
      />
    </div>
  );

  const AddButton = () => {
    return (
      <div className="w-full">
        <AddToCart
          minimal={true}
          item={{
            clientId: generateId(),
            product: product._id,
            size: product.sizes[0],
            color: product.colors[0],
            countInStock: product.countInStock,
            name: product.name,
            slug: product.slug,
            category: product.category,
            price: round2(product.price),
            quantity: 1,
            image: product.images[0],
          }}
        />
      </div>
    );
  };

  return hideBorder ? (
    <div className="flex flex-col group hover:shadow-lg transition-all duration-200 rounded-lg overflow-hidden">
      <ProductImage />
      {!hideDetails && (
        <>
          <div className="p-4 flex-1">
            <ProductDetails />
          </div>
          {!hideAddToCart && (
            <div className="px-4 pb-4">
              <AddButton />
            </div>
          )}
        </>
      )}
    </div>
  ) : (
    <Card className="flex flex-col h-full group hover:shadow-lg transition-all duration-200 overflow-hidden">
      <CardHeader className="p-4 pb-2">
        <ProductImage />
      </CardHeader>
      {!hideDetails && (
        <>
          <CardContent className="p-4 pt-0 flex-1">
            <ProductDetails />
          </CardContent>
          <CardFooter className="p-4 pt-0">
            {!hideAddToCart && <AddButton />}
          </CardFooter>
        </>
      )}
    </Card>
  );
};

export default ProductCard;

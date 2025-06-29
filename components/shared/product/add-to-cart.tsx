/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import useCartStore from "@/hooks/use-cart-store";
import { OrderItem } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from 'next-intl'
import { ShoppingCart, Zap } from "lucide-react";

export default function AddToCart({
  item,
  minimal = false,
}: {
  item: OrderItem;
  minimal?: boolean;
}) {
  const router = useRouter();
  const t = useTranslations()
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async (buyNow = false) => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      const itemId = await addItem(item, quantity);
      
      if (buyNow) {
        router.push('/checkout');
      } else if (minimal) {
        toast.success(t('Product.Added to Cart'), {
          action: {
            label: t('Product.Go to Cart'),
            onClick: () => router.push("/cart"),
          },
        });
      } else {
        router.push(`/cart/${itemId}`);
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return minimal ? (
    <Button
      className="rounded-full w-auto gap-2"
      onClick={() => handleAddToCart(false)}
      disabled={isLoading}
    >
      <ShoppingCart className="w-4 h-4" />
      {isLoading ? t('Product.Adding') : t('Product.Add to Cart')}
    </Button>
  ) : (
    <div className="w-full space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{t('Product.Quantity')}:</span>
        <Select
          value={quantity.toString()}
          onValueChange={(i) => setQuantity(Number(i))}
          disabled={isLoading}
        >
          <SelectTrigger className="w-24">
            <SelectValue />
          </SelectTrigger>
          <SelectContent position="popper">
            {Array.from({ length: Math.min(item.countInStock, 10) }).map((_, i) => (
              <SelectItem key={i + 1} value={`${i + 1}`}>
                {i + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Button
          className="rounded-full w-full gap-2"
          onClick={() => handleAddToCart(false)}
          disabled={isLoading}
        >
          <ShoppingCart className="w-4 h-4" />
          {isLoading ? t('Product.Adding') : t('Product.Add to Cart')}
        </Button>
        
        <Button
          variant="secondary"
          onClick={() => handleAddToCart(true)}
          disabled={isLoading}
          className="w-full rounded-full gap-2"
        >
          <Zap className="w-4 h-4" />
          {t('Product.Buy Now')}
        </Button>
      </div>
    </div>
  );
}

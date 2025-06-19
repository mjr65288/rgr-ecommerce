import { HomeCard } from "@/components/shared/home/home-card";
import { HomeCarousel } from "@/components/shared/home/home-carousel";
import ProductSlider from "@/components/shared/product/product-slider";
import {
  getAllCategories,
  getProductsByTag,
  getProductsForCard,
} from "@/lib/actions/product.actions";
import data from "@/lib/data";
import { toSlug } from "@/lib/utils";

export default async function Page() {
  const categories = (await getAllCategories()).slice(0, 4);
  const newArrivals = await getProductsForCard({
    tag: "new-arrival",
    limit: 4,
  });
  const featureds = await getProductsForCard({
    tag: "featured",
    limit: 4,
  });
  const bestSellers = await getProductsForCard({
    tag: "best-seller",
    limit: 4,
  });

  const cards = [
    {
      title: "Categories to explore",
      link: {
        text: "See more",
        href: "/search",
      },
      items: categories.map((category) => {
        //console.log(`/images/categories/${toSlug(category)}.jpg`);
        // pictures should match the name  of of the toSlug(category) format
        // See the data.ts file for the images
        return {
          name: category,
          href: `/images/${toSlug(category)}.jpg`,
          image: `/images/categories/${toSlug(category)}.jpg`,
        };
      }),
    },
    {
      title: "Explore New Arrivals",
      link: {
        text: "View all",
        href: "/search?tag=new-arrival",
      },
      items: newArrivals,
    },
    {
      title: "Discover Best Sellers",
      link: {
        text: "View all",
        href: "/search?tag=best-seller",
      },
      items: bestSellers,
    },
    {
      title: "Featured Products",
      link: {
        text: "Show Now",
        href: "/search?tag=new-arrival",
      },
      items: featureds,
    },
  ];

  const todaysDeal = await getProductsByTag({tag: "todays-deal"});

  return (
    <>
      <HomeCarousel items={data.carousels} />
      <div className="md:p-4 md:space-y-4 bg-border">
        <HomeCard cards={cards} />
        <ProductSlider title="Today's Deal" products={todaysDeal} />
      </div>
    </>
  );
}

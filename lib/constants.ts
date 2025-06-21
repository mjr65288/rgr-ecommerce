export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "RGR-ECOMMERCE";
export const APP_SLOGAN = process.env.NEXT_PUBLIC_APP_SLOGAN || "Spend less, enjoy more";
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || "An Amazon clone build with Next.js and MongoDB";
export const APP_COPYRIGHT =
  process.env.NEXT_PUBLIC_APP_COPYRIGHT ||
  `© 2025 ${APP_NAME}. All rights reserved.`;

export const PAGE_SIZE = Number(process.env.NEXT_PUBLIC_PAGE_SIZE) || 9;

export const FREE_SHIPPING_MIN_PRICE = Number(
    process.env.FREE_SHIPPING_MIN_PRICE) || 35;
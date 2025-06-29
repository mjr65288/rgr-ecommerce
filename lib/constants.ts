export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "RGR-ECOMMERCE";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

export const SENDER_EMAIL = process.env.SENDER_EMAIL || 'rgr-ecommerce@resend.dev'
export const SENDER_NAME = process.env.SENDER_NAME || APP_NAME

export const APP_SLOGAN = process.env.NEXT_PUBLIC_APP_SLOGAN || "Spend less, enjoy more";
export const APP_DESCRIPTION = process.env.NEXT_PUBLIC_APP_DESCRIPTION || "An Amazon clone build with Next.js and MongoDB";
export const APP_COPYRIGHT =
  process.env.NEXT_PUBLIC_APP_COPYRIGHT ||
  `© 2025 ${APP_NAME}. All rights reserved.`;

export const PAGE_SIZE = Number(process.env.NEXT_PUBLIC_PAGE_SIZE) || 9;

export const FREE_SHIPPING_MIN_PRICE = Number(
  process.env.FREE_SHIPPING_MIN_PRICE) || 35;

export const USER_ROLES = [
  'admin',
  'user',
  'moderator'
] as const;

export const AVAILABLE_PAYMENT_METHODS = [
  {
    name: 'PayPal',
    commission: 0,
    isDefault: true,
  },
  {
    name: 'Stripe',
    commission: 0,
    isDefault: false,
  },
  {
    name: 'Cash On Delivery',
    commission: 0,
    isDefault: false,
  }
]

export const DEFAULT_PAYMENT_METHOD = process.env.DEFAULT_PAYMENT_METHOD || 'PayPal'

export const AVAILABLE_DELIVERY_DATES = [
  {
    name: 'Tomorrow',
    daysToDeliver: 1,
    shippingPrice: 12.9,
    freeShippingMinPrice: 0,
  },
  {
    name: 'Next 2 Days',
    daysToDeliver: 3,
    shippingPrice: 6.9,
    freeShippingMinPrice: 0,
  },
  {
    name: 'Next 5 Days',
    daysToDeliver: 5,
    shippingPrice: 4.9,
    freeShippingMinPrice: 35,
  }
]

export const COLORS = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose'
] as const

export const THEMES = [
  'light',
  'dark',
  'system'
] as const


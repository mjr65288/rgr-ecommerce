'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  Home, 
  Search, 
  Grid3X3, 
  ShoppingCart, 
  User,
  Heart
} from "lucide-react"
import { useTranslations } from 'next-intl'
import useCartStore from "@/hooks/use-cart-store"
import { OrderItem } from "@/types"

export default function MobileBottomBar() {
  const pathname = usePathname()
  const t = useTranslations()
  const { cart } = useCartStore()
  
  const cartItemCount = cart.items.reduce((total: number, item: OrderItem) => total + item.quantity, 0)

  const navigationItems = [
    {
      name: t('Navigation.Home'),
      href: '/',
      icon: Home,
      active: pathname === '/'
    },
    {
      name: t('Navigation.Search'),
      href: '/search',
      icon: Search,
      active: pathname.startsWith('/search')
    },
    {
      name: t('Navigation.Categories'),
      href: '/search',
      icon: Grid3X3,
      active: pathname.startsWith('/search') && pathname.includes('category')
    },
    {
      name: t('Navigation.Wishlist'),
      href: '/#browsing-history',
      icon: Heart,
      active: pathname.includes('browsing-history')
    },
    {
      name: t('Navigation.Cart'),
      href: '/cart',
      icon: ShoppingCart,
      active: pathname.startsWith('/cart'),
      badge: cartItemCount > 0 ? cartItemCount : undefined
    },
    {
      name: t('Navigation.Account'),
      href: '/account',
      icon: User,
      active: pathname.startsWith('/account')
    }
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-around px-2 py-1">
          {navigationItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center w-full py-2 px-1 text-xs transition-colors",
                  item.active
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                )}
              >
                <div className="relative">
                  <Icon className="h-5 w-5 mb-1" />
                  {item.badge && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center min-w-[16px]">
                      {item.badge > 99 ? '99+' : item.badge}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-medium">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
} 
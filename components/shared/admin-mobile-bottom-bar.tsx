'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  LayoutDashboard, 
  Package, 
  ShoppingBag, 
  Users, 
  FileText,
  Settings
} from "lucide-react"
import { useTranslations } from 'next-intl'

export default function AdminMobileBottomBar() {
  const pathname = usePathname()
  const t = useTranslations()

  const navigationItems = [
    {
      name: t('Admin.Dashboard'),
      href: '/admin/overview',
      icon: LayoutDashboard,
      active: pathname === '/admin/overview'
    },
    {
      name: t('Admin.Products'),
      href: '/admin/products',
      icon: Package,
      active: pathname.startsWith('/admin/products')
    },
    {
      name: t('Admin.Orders'),
      href: '/admin/orders',
      icon: ShoppingBag,
      active: pathname.startsWith('/admin/orders')
    },
    {
      name: t('Admin.Users'),
      href: '/admin/users',
      icon: Users,
      active: pathname.startsWith('/admin/users')
    },
    {
      name: t('Admin.Pages'),
      href: '/admin/web-pages',
      icon: FileText,
      active: pathname.startsWith('/admin/web-pages')
    },
    {
      name: t('Admin.Settings'),
      href: '/admin/settings',
      icon: Settings,
      active: pathname.startsWith('/admin/settings')
    }
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-gray-900 text-white border-t border-gray-700">
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
                    ? "text-blue-400"
                    : "text-gray-400 hover:text-gray-100"
                )}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span className="text-[10px] font-medium">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
} 
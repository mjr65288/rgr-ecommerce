'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { Home, Package, ShoppingBag, Users, FileText, Settings } from 'lucide-react'

const links = [
  { title: 'Overview', href: '/admin/overview', icon: <Home className="w-4 h-4" /> },
  { title: 'Products', href: '/admin/products', icon: <Package className="w-4 h-4" /> },
  { title: 'Orders', href: '/admin/orders', icon: <ShoppingBag className="w-4 h-4" /> },
  { title: 'Users', href: '/admin/users', icon: <Users className="w-4 h-4" /> },
  { title: 'Pages', href: '/admin/web-pages', icon: <FileText className="w-4 h-4" /> },
  { title: 'Settings', href: '/admin/settings', icon: <Settings className="w-4 h-4" /> },
]

export function AdminNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()
  const t = useTranslations('Admin')
  return (
    <nav
      className={cn(
        'flex items-center gap-1 md:gap-3 flex-wrap overflow-hidden',
        className
      )}
      {...props}
      aria-label="Admin navigation"
    >
      {links.map((item) => {
        const isActive = pathname.startsWith(item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-1 px-3 py-2 rounded-full transition-colors text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50',
              isActive
                ? 'bg-primary text-white shadow'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            )}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.icon}
            <span className="hidden sm:inline">{t(item.title)}</span>
          </Link>
        )
      })}
    </nav>
  )
}
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import data from "@/lib/data";
import Search from "./search";
import Sidebar from "./sidebar";
import { getAllCategories } from "@/lib/actions/product.actions";
import { getTranslations } from 'next-intl/server'

export default async function Header() {

  const categories = await getAllCategories();
  const { site } = data.settings[0]
  const t = await getTranslations()

  return (
    <header className="bg-black text-white shadow-lg sticky top-0 z-40">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity"
            >
              <Image
                src={site.logo}
                width={40}
                height={40}
                alt={`${site.name} logo`}
                className="w-8 h-8 md:w-10 md:h-10"
              />
              <span className="hidden sm:block">{site.name}</span>
            </Link>
          </div>

          <div className="hidden md:block flex-1 max-w-2xl mx-8">
            <Search />
          </div>
          <Menu />
        </div>
        <div className="md:hidden mt-3">
          <Search />
        </div>
      </div>
      <div className="flex items-center px-4 py-2 bg-gray-800/90 backdrop-blur-sm">
       <Sidebar categories={categories}/>
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className="whitespace-nowrap px-3 py-1 rounded-md hover:bg-white/10 transition-colors text-sm font-medium"
            >
              {t('Header.' + menu.name)}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'
import { getAllCategories } from '@/lib/actions/product.actions'
import { getTranslations } from 'next-intl/server'
import data from '@/lib/data'

export default async function Search() {

  const categories = await getAllCategories();
  const {
    site: { name },
  } = data.settings[0]

  const t = await getTranslations()
  
  return (
    <form action="/search" method="GET" className="flex items-stretch h-11 group">
      <Select name="category">
        <SelectTrigger className="h-11 w-auto bg-white dark:bg-gray-800 text-black dark:text-white border-r border-gray-200 dark:border-gray-600 rounded-l-md rounded-r-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all">
          <SelectValue placeholder={t('Header.All')} />
        </SelectTrigger>
        <SelectContent position="popper" className="max-h-60">
          <SelectItem value='all'>{t('Header.All')}</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        className="h-11 flex-1 rounded-none bg-white dark:bg-gray-800 text-black dark:text-white text-base border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-gray-500 dark:placeholder:text-gray-400"
        placeholder={t('Header.Search Site', { name })}
        name="q"
        type="search"
        autoComplete="off"
      />
      <button
        type="submit"
        className="h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-e-md rounded-s-none px-4 py-2 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <SearchIcon className="w-5 h-5" />
      </button>
    </form>
  );
}

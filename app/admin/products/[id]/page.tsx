import { getProductById, getAllCategories } from '@/lib/actions/product.actions'
import ProductForm from '../create/product-form'
import { notFound } from 'next/navigation'

interface EditProductPageProps {
  params: Promise<{ id: string }>
}

export default async function EditProductPage({ params }: EditProductPageProps) {
  const { id } = await params

  try {
    await getProductById(id)
    const categories = await getAllCategories()
    
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Edit Product</h1>
          <p className="text-muted-foreground">
            Update product information
          </p>
        </div>
        <ProductForm productId={id} categories={categories} />
      </div>
    )
  } catch {
    notFound()
  }
} 
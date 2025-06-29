'use client'

import { useState, useTransition, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { X, Plus } from 'lucide-react'
import { createProduct, updateProduct, getProductById } from '@/lib/actions/product.actions'
import { toSlug } from '@/lib/utils'
import { ProductInputSchema } from '@/lib/validator'
import { IProductInput } from '@/types'
import { toast } from 'sonner'

type ProductFormProps = {
  productId?: string
  categories: string[]
}

export default function ProductForm({ productId, categories }: ProductFormProps) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [images, setImages] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>(['new arrival'])
  const [colors, setColors] = useState<string[]>(['White', 'Red', 'Black'])
  const [sizes, setSizes] = useState<string[]>(['S', 'M', 'L'])
  const [newImage, setNewImage] = useState('')
  const [newTag, setNewTag] = useState('')
  const [newColor, setNewColor] = useState('')
  const [newSize, setNewSize] = useState('')

  const form = useForm({
    resolver: zodResolver(ProductInputSchema),
    defaultValues: {
      name: '',
      slug: '',
      category: '',
      brand: '',
      description: '',
      price: 0,
      listPrice: 0,
      countInStock: 0,
      isPublished: false,
      avgRating: 0,
      numReviews: 0,
      numSales: 0,
      images: [],
      tags: ['new arrival'],
      colors: ['White', 'Red', 'Black'],
      sizes: ['S', 'M', 'L'],
      ratingDistribution: [
        { rating: 1, count: 0 },
        { rating: 2, count: 0 },
        { rating: 3, count: 0 },
        { rating: 4, count: 0 },
        { rating: 5, count: 0 },
      ],
      reviews: [],
    },
  })

  // Load product data if editing
  useEffect(() => {
    if (productId) {
      startTransition(async () => {
        try {
          const product = await getProductById(productId)
          form.reset({
            name: product.name,
            slug: product.slug,
            category: product.category,
            brand: product.brand,
            description: product.description,
            price: product.price,
            listPrice: product.listPrice,
            countInStock: product.countInStock,
            isPublished: product.isPublished,
            avgRating: product.avgRating,
            numReviews: product.numReviews,
            numSales: product.numSales,
            images: product.images || [],
            tags: product.tags || ['new arrival'],
            colors: product.colors || ['White', 'Red', 'Black'],
            sizes: product.sizes || ['S', 'M', 'L'],
            ratingDistribution: product.ratingDistribution || [
              { rating: 1, count: 0 },
              { rating: 2, count: 0 },
              { rating: 3, count: 0 },
              { rating: 4, count: 0 },
              { rating: 5, count: 0 },
            ],
            reviews: product.reviews || [],
          })
          setImages(product.images || [])
          setTags(product.tags || ['new arrival'])
          setColors(product.colors || ['White', 'Red', 'Black'])
          setSizes(product.sizes || ['S', 'M', 'L'])
        } catch {
          toast.error('Failed to load product')
        }
      })
    }
  }, [productId, form])

  const onSubmit = (values: IProductInput) => {
    if (images.length === 0) {
      toast.error('At least one image is required')
      return
    }

    const productData = {
      ...values,
      images,
      tags,
      colors,
      sizes,
    }

    startTransition(async () => {
      try {
        if (productId) {
          const result = await updateProduct(productId, productData)
          if (result.success) {
            toast.success('Product updated successfully')
            router.push('/admin/products')
          } else {
            toast.error(result.message)
          }
        } else {
          const result = await createProduct(productData)
          if (result.success) {
            toast.success('Product created successfully')
            router.push('/admin/products')
          } else {
            toast.error(result.message)
          }
        }
      } catch {
        toast.error('Something went wrong')
      }
    })
  }

  const addImage = () => {
    if (newImage && !images.includes(newImage)) {
      setImages([...images, newImage])
      setNewImage('')
    }
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag])
      setNewTag('')
    }
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag))
  }

  const addColor = () => {
    if (newColor && !colors.includes(newColor)) {
      setColors([...colors, newColor])
      setNewColor('')
    }
  }

  const removeColor = (color: string) => {
    setColors(colors.filter(c => c !== color))
  }

  const addSize = () => {
    if (newSize && !sizes.includes(newSize)) {
      setSizes([...sizes, newSize])
      setNewSize('')
    }
  }

  const removeSize = (size: string) => {
    setSizes(sizes.filter(s => s !== size))
  }

  const generateSlug = () => {
    const name = form.getValues('name')
    if (name) {
      form.setValue('slug', toSlug(name))
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <div className="flex gap-2">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={generateSlug}
                      >
                        Generate
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="brand"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={4} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Pricing & Stock */}
          <Card>
            <CardHeader>
              <CardTitle>Pricing & Stock</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="listPrice"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>List Price</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="countInStock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isPublished"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Published</FormLabel>
                      <FormDescription>
                        Make this product visible to customers
                      </FormDescription>
                    </div>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        </div>

        {/* Images */}
        <Card>
          <CardHeader>
            <CardTitle>Product Images</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Image URL"
                value={newImage}
                onChange={(e) => setNewImage(e.target.value)}
              />
              <Button type="button" onClick={addImage}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative">
                  <div className="relative w-full h-32">
                    <Image
                      src={image}
                      alt={`Product ${index + 1}`}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-1 right-1"
                    onClick={() => removeImage(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tags */}
        <Card>
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Add tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
              <Button type="button" onClick={addTag}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 ml-1"
                    onClick={() => removeTag(tag)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Colors & Sizes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add color"
                  value={newColor}
                  onChange={(e) => setNewColor(e.target.value)}
                />
                <Button type="button" onClick={addColor}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <Badge key={color} variant="outline">
                    {color}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 ml-1"
                      onClick={() => removeColor(color)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sizes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add size"
                  value={newSize}
                  onChange={(e) => setNewSize(e.target.value)}
                />
                <Button type="button" onClick={addSize}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <Badge key={size} variant="outline">
                    {size}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 ml-1"
                      onClick={() => removeSize(size)}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Statistics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="avgRating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Average Rating</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.1" min="0" max="5" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="numReviews"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Reviews</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="numSales"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Sales</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="submit" disabled={isPending}>
            {isPending ? 'Saving...' : productId ? 'Update Product' : 'Create Product'}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push('/admin/products')}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  )
} 
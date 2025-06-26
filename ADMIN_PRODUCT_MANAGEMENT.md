# Admin Product Management

This document describes the new product management functionality added to the admin panel.

## Features

### 1. Product List (`/admin/products`)
- View all products in a paginated table
- Search products by name
- See product details including ID, name, price, category, stock, rating, and publication status
- Actions: Edit, View (opens product page), Delete

### 2. Create Product (`/admin/products/create`)
- Comprehensive form to create new products
- All product fields supported:
  - Basic Information: name, slug, category, brand, description
  - Pricing & Stock: price, list price, stock quantity, publication status
  - Images: Add/remove product images via URLs
  - Tags: Add/remove product tags
  - Colors & Sizes: Manage product variants
  - Statistics: Average rating, number of reviews, number of sales

### 3. Edit Product (`/admin/products/[id]`)
- Same form as create, but pre-populated with existing product data
- Update any product field
- Maintains existing product statistics

## Form Features

### Validation
- Name: minimum 3 characters
- Slug: minimum 3 characters (auto-generate from name)
- Category: required selection from predefined list
- Brand: required
- Description: required
- Price & List Price: must be positive numbers
- Stock: must be non-negative
- Images: at least one image required

### Auto-generation
- Slug can be auto-generated from the product name
- Default tags, colors, and sizes are provided
- Rating distribution is automatically initialized

### User Experience
- Real-time validation with error messages
- Loading states during save operations
- Success/error notifications
- Cancel button to return to product list
- Responsive design for mobile and desktop

## Technical Implementation

### Backend Actions
- `createProduct(productData)`: Creates new product
- `updateProduct(id, productData)`: Updates existing product
- `getProductById(id)`: Retrieves product for editing
- `deleteProduct(id)`: Deletes product (existing functionality)

### Frontend Components
- `ProductForm`: Reusable form component for create/edit
- Form validation with custom error handling
- Image management with preview
- Dynamic tag/color/size management

### Data Flow
1. Form data is validated client-side
2. Valid data is sent to server actions
3. Database is updated
4. Cache is revalidated
5. User is redirected to product list
6. Success/error notifications are shown

## Usage

### Creating a Product
1. Navigate to `/admin/products`
2. Click "Create Product" button
3. Fill out the form with product details
4. Add at least one image URL
5. Configure tags, colors, and sizes as needed
6. Set publication status
7. Click "Create Product"

### Editing a Product
1. Navigate to `/admin/products`
2. Click "Edit" on any product row
3. Modify the desired fields
4. Click "Update Product"

### Deleting a Product
1. Navigate to `/admin/products`
2. Click the delete button on any product row
3. Confirm deletion in the dialog

## Categories

The following product categories are available:
- Alarma e intrusión
- Paneles de Control de Acceso
- Redes y networking
- videovigilancia

## Default Values

New products are created with these defaults:
- Tags: ["new arrival"]
- Colors: ["White", "Red", "Black"]
- Sizes: ["S", "M", "L"]
- Published: false
- Average Rating: 0
- Number of Reviews: 0
- Number of Sales: 0
- Rating Distribution: All ratings set to 0 count 
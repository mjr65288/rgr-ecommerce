# Mobile Bottom Bar

A responsive mobile bottom navigation bar that provides easy access to key features on mobile devices.

## Features

### User Mobile Bottom Bar
- **Home**: Navigate to the homepage
- **Search**: Access the search functionality
- **Categories**: Browse product categories
- **Wishlist**: View browsing history/favorites
- **Cart**: Access shopping cart with item count badge
- **Account**: User account management

### Admin Mobile Bottom Bar
- **Dashboard**: Admin overview and analytics
- **Products**: Product management
- **Orders**: Order management
- **Users**: User management
- **Pages**: Web page management
- **Settings**: Site configuration

## Implementation

### Components
- `components/shared/mobile-bottom-bar.tsx` - User mobile bottom bar
- `components/shared/admin-mobile-bottom-bar.tsx` - Admin mobile bottom bar

### Layout Integration
The mobile bottom bars are integrated into the following layouts:
- `app/[locale]/(root)/layout.tsx` - Main user layout
- `app/[locale]/(home)/layout.tsx` - Home page layout
- `app/[locale]/admin/layout.tsx` - Admin layout

### Styling
- Fixed positioning at bottom of screen
- Hidden on desktop (md: breakpoint and above)
- Responsive design with proper spacing
- Dark theme support
- Active state highlighting
- Cart badge for item count

### Translations
Navigation labels are internationalized using next-intl:
- English: `messages/en-US.json`
- Spanish: `messages/es-MX.json`

### Key Features
- **Responsive**: Only shows on mobile devices
- **Accessible**: Proper ARIA labels and keyboard navigation
- **Interactive**: Hover states and active indicators
- **Real-time**: Cart badge updates automatically
- **Themed**: Supports light/dark mode
- **Internationalized**: Multi-language support

## Usage

The mobile bottom bars are automatically included in the respective layouts and will appear on mobile devices (screen width < 768px). No additional configuration is required.

### Cart Badge
The cart badge automatically displays the total number of items in the cart and updates in real-time using the Zustand cart store.

### Active States
Navigation items highlight when the user is on the corresponding page or section, providing clear visual feedback about the current location.

## Technical Details

- Uses Lucide React icons for consistent iconography
- Integrates with the existing cart store for real-time updates
- Follows the existing design system and color scheme
- Implements proper TypeScript types
- Uses Tailwind CSS for styling
- Client-side component with proper hydration handling 
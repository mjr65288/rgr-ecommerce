import { Data, IProductInput, IUserInput } from '@/types'
import { toSlug } from './utils'
import bycrypt from 'bcryptjs'
import { i18n } from '@/i18n-config'

const users: IUserInput[] = [
    {
        name: 'manuel',
        email: 'admin@example.com',
        password: bycrypt.hashSync('123456', 5),
        role: 'Admin',
        address: {
            fullName: 'Manuel',
            street: '123 Main St',
            city: 'Anytown',
            province: 'CA',
            postalCode: '12345',
            country: 'USA',
            phone: '1234567890',
        },
        paymentMethod: 'Stripe',
        emailVerified: false,
    },
    {
        name: 'raul',
        email: 'rau@example.com',
        password: bycrypt.hashSync('123456', 5),
        role: 'User',
        address: {
            fullName: 'Raul',
            street: '123 Main St',
            city: 'Anytown',
            province: 'CA',
            postalCode: '12345',
            country: 'USA',
            phone: '1234567890',
        },
        paymentMethod: 'Stripe',
        emailVerified: false,
    }
]

const products: IProductInput[] = [
    {
        name: 'TL-SG2218P TP-LINK TL-SG2218P ',
        slug: toSlug('TL-SG2218P TP-LINK TL-SG2218P '),
        category: 'Redes y networking',
        images: ['/images/TL-SG2218P.jpg'],
        tags: ['new-arrival'],
        isPublished: true,
        price: 202.16,
        listPrice: 202.16,
        brand: 'tp-link',
        avgRating: 4.71,
        numReviews: 7,
        ratingDistribution: [
            { rating: 1, count: 0 },
            { rating: 2, count: 0 },
            { rating: 3, count: 0 },
            { rating: 4, count: 2 },
            { rating: 5, count: 5 },
        ],
        numSales: 9,
        countInStock: 11,
        description:
            'TL-SG2218P TP-LINK TL-SG2218P - Switch inteligente de 16 puertos POE+ Gigabit JetStram , 2 puertos SFP , POE 802.3at/af , 150W totales , Gestión centralizada con OMADA , soporta QoS L2/L3/L4 y snooping IGMP , IPV6 , ACL , DHCP Snooping, 802.1X',
        sizes: ['16 puertos'],
        colors: ['Black'],

        reviews: [],
    },
    {
        name: 'DHI-ARD1130-CAM DAHUA ARD1130-CAM',
        slug: toSlug('DHI-ARD1130-CAM DAHUA ARD1130-CAM'),
        category: 'Alarma e intrusión',
        images: [
            '/images/DAHUA-DHT1180020-MODULO-CAMARA-PIR-HD-IP66-PRINCIPAAL.jpg',
        ],
        tags: ['featured'],
        isPublished: true,
        price: 44.52,
        listPrice: 44.52,
        brand: 'dahua',
        avgRating: 4.2,
        numReviews: 10,
        ratingDistribution: [
            { rating: 1, count: 1 },
            { rating: 2, count: 0 },
            { rating: 3, count: 0 },
            { rating: 4, count: 4 },
            { rating: 5, count: 5 },
        ],
        numSales: 29,
        countInStock: 12,
        description:
            'Módulo cámara PIR HD con 112° de apertura y alcance IR de 15 m. Incluye monitoreo de temperatura, protección IP66, y se integra con la APP. #LoNuevo /#AlarmasDahuaPor App/ #AlarmasDahua',

        sizes: ['112° de apertura y alcance IR de 15 m'],
        colors: ['white'],

        reviews: [],
    },
    {
        name: "ACCESSK8 Mini Controlador de Acceso con Teclado Inalámbrico ",
        slug: toSlug('ACCESSK8 Mini Controlador de Acceso con Teclado Inalámbrico '),
        category: 'Paneles de Control de Acceso',
        brand: 'Accesspro',
        images: ['/images/ACCESSK8-h.jpg'],
        tags: ['best-seller'],
        isPublished: true,
        price: 64.16,
        listPrice: 64.16,
        avgRating: 4,
        numReviews: 12,
        ratingDistribution: [
            { rating: 1, count: 1 },
            { rating: 2, count: 0 },
            { rating: 3, count: 2 },
            { rating: 4, count: 4 },
            { rating: 5, count: 5 },
        ],
        numSales: 55,
        countInStock: 13,
        description:
            'Cuenta con Botón de Salida Inalámbrico / Soporta Tarjeta y Contraseña / Cuenta con Botón de Timbre',
        sizes: ['112° de apertura y alcance IR de 15 m'],
        colors: ['Metallic'],

        reviews: [],
    },
    {
        name: 'UVC-G6-BULLET-W',
        slug: toSlug(
            'UVC-G6-BULLET-W'
        ),
        category: 'videovigilancia',
        brand: 'viusystem',
        images: ['/images/portada_0S2000.jpg'],
        tags: ['todays-deal'],
        isPublished: true,
        price: 326.17,
        listPrice: 326.17,
        avgRating: 3.85,
        numReviews: 14,
        ratingDistribution: [
            { rating: 1, count: 0 },
            { rating: 2, count: 2 },
            { rating: 3, count: 3 },
            { rating: 4, count: 4 },
            { rating: 5, count: 5 },
        ],
        numSales: 54,
        countInStock: 14,
        description:
            'Cámara UniFi Protect G6 Bullet Color Blanco, PoE, 1.8 4K, AI Multi-TOPS, Visión Nocturna IR 30m, Protección IP66, Reconocimiento Facial y Placa, Montaje en Pared, Techo, Poste',
        sizes: ['1.8 4K'],
        colors: ['White'],

        reviews: [],
    },
]

const reviews = [
    {
        rating: 1,
        title: 'Mala calidad',
        comment:
            'Muy decepcionado. El producto se rompió después de solo unas cuantas veces. No vale la pena el dinero.',
    },
    {
        rating: 2,
        title: 'No funciona como se describe',
        comment:
            'El producto no funciona como se describe. No funciona como se esperaba.',
    },
    {
        rating: 3,
        title: 'Buen producto',
        comment: 'El producto es increible, me encantó.',
    },
    {
        rating: 4,
        title: 'Super producto',
        comment: 'Producto solido, para el precio es una super oferta.',
    },
    {
        rating: 5,
        title: 'Muy satisfecho',
        comment: 'Buen producto, lo recomiendo y lo usaré en mi negocio.',
    },
]

export const webPages = [
    {
        title: 'About Us',
        slug: 'about-us',
        content: `Welcome to [Your Store Name], your trusted destination for quality products and exceptional service. Our journey began with a mission to bring you the best shopping experience by offering a wide range of products at competitive prices, all in one convenient platform.
  
  At [Your Store Name], we prioritize customer satisfaction and innovation. Our team works tirelessly to curate a diverse selection of items, from everyday essentials to exclusive deals, ensuring there's something for everyone. We also strive to make your shopping experience seamless with fast shipping, secure payments, and excellent customer support.
  
  As we continue to grow, our commitment to quality and service remains unwavering. Thank you for choosing [Your Store Name]—we look forward to being a part of your journey and delivering value every step of the way.`,
        isPublished: true,
    },
    {
        title: 'Contact Us',
        slug: 'contact-us',
        content: `We're here to help! If you have any questions, concerns, or feedback, please don't hesitate to reach out to us. Our team is ready to assist you and ensure you have the best shopping experience.
  
  **Customer Support**
  For inquiries about orders, products, or account-related issues, contact our customer support team:
  - **Email:** support@example.com
  - **Phone:** +1 (123) 456-7890
  - **Live Chat:** Available on our website from 9 AM to 6 PM (Monday to Friday).
  
  **Head Office**
  For corporate or business-related inquiries, reach out to our headquarters:
  - **Address:** 1234 E-Commerce St, Suite 567, Business City, BC 12345
  - **Phone:** +1 (987) 654-3210
  
  We look forward to assisting you! Your satisfaction is our priority.
  `,
        isPublished: true,
    },
    {
        title: 'Help',
        slug: 'help',
        content: `Welcome to our Help Center! We're here to assist you with any questions or concerns you may have while shopping with us. Whether you need help with orders, account management, or product inquiries, this page provides all the information you need to navigate our platform with ease.
  
  **Placing and Managing Orders**
  Placing an order is simple and secure. Browse our product categories, add items to your cart, and proceed to checkout. Once your order is placed, you can track its status through your account under the "My Orders" section. If you need to modify or cancel your order, please contact us as soon as possible for assistance.
  
  **Shipping and Returns**
  We offer a variety of shipping options to suit your needs, including standard and express delivery. For detailed shipping costs and delivery timelines, visit our Shipping Policy page. If you're not satisfied with your purchase, our hassle-free return process allows you to initiate a return within the specified timeframe. Check our Returns Policy for more details.
  
  **Account and Support**
  Managing your account is easy. Log in to update your personal information, payment methods, and saved addresses. If you encounter any issues or need further assistance, our customer support team is available via email, live chat, or phone. Visit our Contact Us page for support hours and contact details.`,
        isPublished: true,
    },
    {
        title: 'Privacy Policy',
        slug: 'privacy-policy',
        content: `We value your privacy and are committed to protecting your personal information. This Privacy Notice explains how we collect, use, and share your data when you interact with our services. By using our platform, you consent to the practices described herein.
  
  We collect data such as your name, email address, and payment details to provide you with tailored services and improve your experience. This information may also be used for marketing purposes, but only with your consent. Additionally, we may share your data with trusted third-party providers to facilitate transactions or deliver products.
  
  Your data is safeguarded through robust security measures to prevent unauthorized access. However, you have the right to access, correct, or delete your personal information at any time. For inquiries or concerns regarding your privacy, please contact our support team.`,
        isPublished: true,
    },
    {
        title: 'Conditions of Use',
        slug: 'conditions-of-use',
        content: `Welcome to [Ecommerce Website Name]. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. These terms govern your use of our platform, including browsing, purchasing products, and interacting with any content or services provided. You must be at least 18 years old or have the consent of a parent or guardian to use this website. Any breach of these terms may result in the termination of your access to our platform.
  
  We strive to ensure all product descriptions, pricing, and availability information on our website are accurate. However, errors may occur, and we reserve the right to correct them without prior notice. All purchases are subject to our return and refund policy. By using our site, you acknowledge that your personal information will be processed according to our privacy policy, ensuring your data is handled securely and responsibly. Please review these terms carefully before proceeding with any transactions.
  `,
        isPublished: true,
    },
    {
        title: 'Customer Service',
        slug: 'customer-service',
        content: `At [Your Store Name], our customer service team is here to ensure you have the best shopping experience. Whether you need assistance with orders, product details, or returns, we are committed to providing prompt and helpful support.
  
  If you have questions or concerns, please reach out to us through our multiple contact options:
  - **Email:** support@example.com
  - **Phone:** +1 (123) 456-7890
  - **Live Chat:** Available on our website for instant assistance
  
  We also provide helpful resources such as order tracking, product guides, and FAQs to assist you with common inquiries. Your satisfaction is our priority, and we're here to resolve any issues quickly and efficiently. Thank you for choosing us!`,
        isPublished: true,
    },
    {
        title: 'Returns Policy',
        slug: 'returns-policy',
        content: 'Returns Policy Content',
        isPublished: true,
    },
    {
        title: 'Careers',
        slug: 'careers',
        content: 'careers Content',
        isPublished: true,
    },
    {
        title: 'Blog',
        slug: 'blog',
        content: 'Blog Content',
        isPublished: true,
    },
    {
        title: 'Sell Products',
        slug: 'sell',
        content: `Sell Products Content`,
        isPublished: true,
    },
    {
        title: 'Become Affiliate',
        slug: 'become-affiliate',
        content: 'Become Affiliate Content',
        isPublished: true,
    },
    {
        title: 'Advertise Your Products',
        slug: 'advertise',
        content: 'Advertise Your Products',
        isPublished: true,
    },
    {
        title: 'Shipping Rates & Policies',
        slug: 'shipping',
        content: 'Shipping Rates & Policies',
        isPublished: true,
    },
];

const settings = [
    {
        common: {
            freeShippingMinPrice: 35,
            isMaintenanceMode: false,
            defaultTheme: 'light',
            defaultColor: 'blue',
            pageSize: 9,
        },
        site: {
            name: 'RGR-Ecommerce',
            description:
                'RGR-Ecommerce is a sample Ecommerce website built with Next.js, Tailwind CSS, and MongoDB.',
            keywords: 'RGR-Ecommerce, Next.js, Tailwind CSS, MongoDB',
            url: 'https://rgr-ecommerce.vercel.app',
            logo: '/icons/rgr_logo.svg',
            slogan: 'Spend less, enjoy more.',
            author: 'RGR-Ecommerce',
            copyright: '2000-2024, RGR-Ecommerce.com, Inc. or its affiliates',
            email: 'admin@rgr-ecommerce.com',
            address: '123, Main Street, Anytown, CA, Zip 12345',
            phone: '+1 (123) 456-7890',
        },
        carousels: [
            {
                title: 'Most Popular Exterior Cameras For Sale',
                buttonCaption: 'Shop Now',
                image: '/images/camaras-para-exterior-sitio-web.jpg',
                url: '/search?category=Exterior Cameras',
                isPublished: true,
            },
            {
                title: 'Most Popular Screes For Sale',
                buttonCaption: 'Shop Now',
                image: '/images/pantala105-3000x540px.jpg',
                url: '/search?category=Screens',
                isPublished: true,
            },
            {
                title: 'Security Sensors',
                buttonCaption: 'See More',
                image: '/images/sitio-web-min-moe.jpg',
                url: '/search?category=Security Sensors',
                isPublished: true,
            },
            {
                title: 'Best Deals on Unifi 7',
                buttonCaption: 'See More',
                image: '/images/unifi7.jpg',
                url: '/search?category=Unifi 7',
                isPublished: true,
            },
        ],
        availableLanguages: i18n.locales.map((locale) => ({
            code: locale.code,
            name: locale.name,
        })),
        defaultLanguage: 'en-US',
        availableCurrencies: [
            {
                name: 'United States Dollar',
                code: 'USD',
                symbol: '$',
                convertRate: 1,
            },
            { name: 'Mexican Peso', code: 'MXN', symbol: '$', convertRate: 17.25 },
        ],
        defaultCurrency: 'USD',
        availablePaymentMethods: [
            { name: 'PayPal', commission: 0 },
            { name: 'Stripe', commission: 0 },
            { name: 'Cash On Delivery', commission: 0 },
        ],
        defaultPaymentMethod: 'PayPal',
        availableDeliveryDates: [
            {
                name: 'Tomorrow',
                daysToDeliver: 1,
                shippingPrice: 12.9,
                freeShippingMinPrice: 0,
            },
            {
                name: 'Next 3 Days',
                daysToDeliver: 3,
                shippingPrice: 6.9,
                freeShippingMinPrice: 0,
            },
            {
                name: 'Next 5 Days',
                daysToDeliver: 5,
                shippingPrice: 4.9,
                freeShippingMinPrice: 35,
            },
        ],
        defaultDeliveryDate: 'Next 5 Days',
    },
]

const data: Data = {
    users,
    products,
    reviews,
    headerMenus: [
        {
            name: "Today's Deal",
            href: '/search?tag=todays-deal',
        },
        {
            name: 'New Arrivals',
            href: '/search?tag=new-arrival',
        },
        {
            name: 'Featured Products',
            href: '/search?tag=featured',
        },
        {
            name: 'Best Sellers',
            href: '/search?tag=best-seller',
        },
        {
            name: 'Browsing History',
            href: '/#browsing-history',
        },
        {
            name: 'Customer Service',
            href: '/page/customer-service',
        },
        {
            name: 'About Us',
            href: '/page/about-us',
        },
        {
            name: 'Help',
            href: '/page/help',
        },
    ],
    carousels: [
        {
            title: 'Most Popular Exterior Cameras For Sale',
            buttonCaption: 'Shop Now',
            image: '/images/camaras-para-exterior-sitio-web.jpg',
            url: '/search?category=Exterior Cameras',
            isPublished: true,
        },
        {
            title: 'Most Popular Screes For Sale',
            buttonCaption: 'Shop Now',
            image: '/images/pantala105-3000x540px.jpg',
            url: '/search?category=Screens',
            isPublished: true,
        },
        {
            title: 'Security Sensors',
            buttonCaption: 'See More',
            image: '/images/sitio-web-min-moe.jpg',
            url: '/search?category=Security Sensors',
            isPublished: true,
        },
        {
            title: 'Best Deals on Unifi 7',
            buttonCaption: 'See More',
            image: '/images/unifi7.jpg',
            url: '/search?category=Unifi 7',
            isPublished: true,
        },
    ],
    webPages,
    settings
}

export default data
import { Data, IProductInput, IUserInput } from '@/types'
import { toSlug } from './utils'
import bycrypt from 'bcryptjs'

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
}

export default data
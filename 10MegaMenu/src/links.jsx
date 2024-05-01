// import { Icon } from "@iconify/react";

export const links = [
  {
    id: 1,
    title: "Home",
    path: "/",
    // icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    id: 2,
    title: "Shop",
    path: "/shop",
    // icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { id: 201, title: "Mobile Phones", path: "/electronics/mobile-phones" },
      { id: 202, title: "Laptops", path: "/electronics/laptops" },
      { id: 203, title: "Cameras", path: "/electronics/cameras" },
    ],
  },
  {
    id: 3,
    title: "Men",
    path: "/men",
    // icon: <Icon icon="lucide:mail" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      {
        id: 301,
        title: "Footwear",
        path: "/men/footwear",
        submenu: true,
        subMenuItems: [
          {
            id: 3101,
            title: "Sports Shoes",
            path: "/men/footwear/sports-shoes",
          },
          {
            id: 3102,
            title: "Casual Shoes",
            path: "/men/footwear/casual-shoes",
          },
          {
            id: 3103,
            title: "Formal Shoes",
            path: "/men/footwear/formal-shoes",
          },
          {
            id: 3104,
            title: "Flip-Flops",
            path: "/men/footwear/flip-flops",
          },
          {
            id: 3105,
            title: "Running Shoes",
            path: "/men/footwear/running-shoes",
          },
        ],
      },
      {
        id: 302,
        title: "Beauty and Grooming",
        path: "/men/beauty-and-grooming",
        submenu: true,
        subMenuItems: [
          {
            id: 3201,
            title: "Deodorants",
            path: "/men/beauty-and-grooming/deodorants",
          },
          {
            id: 3202,
            title: "Perfumes",
            path: "/men/beauty-and-grooming/perfumes",
          },
          {
            id: 3203,
            title: "Shaving & Aftershave",
            path: "/men/beauty-and-grooming/shaving-and-aftershave",
          },
        ],
      },
      {
        id: 303,
        title: "Men's Clothing",
        path: "/men/clothing",
        submenu: true,
        subMenuItems: [
          { id: 3301, title: "T-Shirts", path: "/men/clothing/t-shirts" },
          { id: 3302, title: "Shirts", path: "/men/clothing/t-shirts" },
          { id: 3303, title: "Jeans", path: "/men/clothing/jeans" },
          { id: 3304, title: "Trousers", path: "/men/clothing/trousers" },
          { id: 3305, title: "Shorts", path: "/men/clothing/shorts" },
        ],
      },
      {
        id: 304,
        title: "Men's Watches",
        path: "/men/watches",
        submenu: true,
        subMenuItems: [
          { id: 3401, title: "Fastrack", path: "/men/watches/fastrack" },
          { id: 3402, title: "Casio", path: "/men/watches/casio" },
          { id: 3403, title: "Titan", path: "/men/watches/titan" },
          { id: 3404, title: "Sonata", path: "/men/watches/sonata" },
        ],
      },
      {
        id: 305,
        title: "Men's Sports",
        path: "/men/sports",
        submenu: true,
        subMenuItems: [
          { id: 3501, title: "Backpacks", path: "/men/sports/backpacks" },
          { id: 3501, title: "sunglasses", path: "/men/sports/sunglasses" },
          { id: 3501, title: "Wallets", path: "/men/sports/wallets" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Women",
    path: "/women",
    // icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      {
        id: 401,
        title: "Women's Clothing",
        path: "/women/clothing",
        submenu: true,
        subMenuItems: [
          { id: 4101, title: "Topwear", path: "/women/clothing/topwear" },
          { id: 4101, title: "Jeans", path: "/women/clothing/jeans" },
          { id: 4101, title: "Shorts", path: "/women/clothing/shorts" },
          { id: 4101, title: "skirts", path: "/women/clothing/skirts" },
          { id: 4101, title: "Trousers", path: "/women/clothing/trousers" },
        ],
      },
      {
        id: 402,
        title: "Ethnic Wear",
        path: "/women/ethnic-wear",
        submenu: true,
        subMenuItems: [
          { id: 4201, title: "Sarees", path: "/women/clothing/sarees" },
          { id: 4202, title: "Kurtis", path: "/women/clothing/kurtis" },
          {
            id: 4203,
            title: "Lehenga Choli",
            path: "/women/clothing/lehenga-choli",
          },
          { id: 4204, title: "Gowns", path: "/women/clothing/gowns" },
          { id: 4205, title: "Palazzos", path: "/women/clothing/palazzos" },
        ],
      },
      {
        id: 403,
        title: "Jewellery",
        path: "/women/jewellery",
        submenu: true,
        subMenuItems: [
          {
            id: 4301,
            title: "Artificial Jewellery",
            path: "/women/Jewellery/artificial-jewellery",
          },
          {
            id: 4302,
            title: "Silver-Jewellery",
            path: "/women/Jewellery/silver-jewellery",
          },
          {
            id: 4303,
            title: "Precious Jewellery",
            path: "/women/Jewellery/precious-jewellery",
          },
        ],
      },
      {
        id: 404,
        title: "Beauty and Grooming",
        path: "/women/beauty-and-grooming",
        submenu: true,
        subMenuItems: [
          {
            id: 4401,
            title: "Make Up",
            path: "/women/beauty-and-grooming/makeup",
          },
          {
            id: 4402,
            title: "Skin Care",
            path: "/women/beauty-and-grooming/skin-care",
          },
          {
            id: 4403,
            title: "Hair Care",
            path: "/women/beauty-and-grooming/Hair Care",
          },
          {
            id: 4404,
            title: "Perfumes",
            path: "/women/beauty-and-grooming/perfumes",
          },
        ],
      },
      {
        id: 405,
        title: "Women's Sports",
        path: "/women/sports",
        submenu: true,
        subMenuItems: [
          {
            id: 4501,
            title: "Gym Wear",
            path: "/women/sports/gym-wear",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "About",
    path: "/about",
    // icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    // icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];

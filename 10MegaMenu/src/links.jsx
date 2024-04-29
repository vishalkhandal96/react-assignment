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
      { id: 301, title: "Footwear", path: "/men/footwear" },
      {
        id: 302,
        title: "Beauty and Grooming",
        path: "/men/beauty-and-grooming",
      },
      { id: 303, title: "Men's Clothing", path: "/men/clothing" },
      { id: 304, title: "Men's Watches", path: "/men/watches" },
      { id: 304, title: "Men's Sports", path: "/men/sports" },
    ],
  },
  {
    id: 4,
    title: "Women",
    path: "/women",
    // icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { id: 401, title: "Women's Clothing", path: "/women/clothing" },
      { id: 402, title: "Ethnic Wear", path: "/women/ethnic-wear" },
      { id: 403, title: "Jewellery", path: "/women/jewellery" },
      {
        id: 404,
        title: "Beauty and Grooming",
        path: "/women/beauty-and-grooming",
      },
      { id: 304, title: "Women's Sports", path: "/women/sports" },
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

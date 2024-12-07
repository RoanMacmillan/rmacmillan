interface Item {
  id: string;
  thumbnail: string;
  title: string;
  number: string;
  description: string;
  href: string;
  detail1: string;
  detail2: string;
  description2: string;
  description3: string;
  siteUrl: string;
  codeUrl: string;
  column: number;
  desktop1: string;
  desktop2: string;
}

export const items: Item[] = [
  {
    id: "1",
    thumbnail: "/images/2.webp",
    title: "Audio",
    number: "01",
    description:
      "This e-commerce site is a platform for selling audio equipment, complete with a functional cart and checkout system.",
    href: "project1",
    detail1: "/images/detail1.webp",
    detail2: "/images/detail2.webp",
    desktop1: '/images/audio-detail1.webp',
    desktop2: '/images/audio-detail2.webp',
    description2: "A clean user-friendly e-commerce site",
    description3:
      "This project is an e-commerce platform for purchasing audio equipment, which I built with React. It includes detailed pages of each item, a functional cart, and checkout system.",
    siteUrl: "https://www.google.com",
    codeUrl: "https://www.google.com",
    column: 1,
  },
  {
    id: "2",
    thumbnail: "/images/1.webp",
    title: "Arch",
    number: "02",
    description:
      "An Architecture portfolio showcasing different projects, with a slideshow feature and various detailed pages.",

    href: "/",
    detail1: "/images/detail1.webp",
    detail2: "/images/detail2.webp",
    desktop1: '/images/audio-detail1.webp',
    desktop2: '/images/audio-detail2-webp',
    description2: "A visually captivating architecture portfolio",
    description3:
      "An Architecure portfolio that displays multiple projects, built with react. It includes a detailed about and contact page, with leafletjs for the map feature.",

    siteUrl: "https://www.google.com",
    codeUrl: "https://www.google.com",
    column: 2,
  },
  {
    id: "3",
    thumbnail: "/images/3.webp",
    title: "Galleria",
    number: "03",
    description:
      "A gallery site showcasing a images in a masonry-style layout, complete with a slideshow feature.",
    href: "/",
    detail1: "/images/detail1.webp",
    detail2: "/images/detail2.webp",
    desktop1: '/images/audio-detail1.webp',
    desktop2: '/images/audio-detail2-webp',
    description2: "An elegant gallery with masonry-style layout",
    description3:
      "A masonry style layout made with CSS grid and React. It features a slideshow and lightbox feature to view the images.",

    siteUrl: "https://www.google.com",
    codeUrl: "https://www.google.com",
    column: 1,
  },
  {
    id: "4",
    thumbnail: "/images/4.webp",
    title: "Photop",
    number: "04",
    description:
      "An image showcasing and sharing app built with Next.js and the Unsplash API.",
    href: "/",
    detail1: "/images/detail1.webp",
    detail2: "/images/detail2.webp",
    desktop1: '/images/audio-detail1.webp',
    desktop2: '/images/audio-detail2-webp',
    description2:
      "An image showcasing and sharing app built with Next.js and the Unsplash API.",
    description3:
      "This app, built with Next.js and powered by the Unsplash API, allows users to explore, showcase, and share high-quality images. It features search functionality, user profiles, image filtering, and responsive design, providing a seamless experience for photo enthusiasts",
    siteUrl: "https://www.google.com",
    codeUrl: "https://www.google.com",
    column: 2,
  },
];

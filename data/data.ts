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
 }



export const items: Item[] = [
    {
        id: "1",
        thumbnail: "/images/1.webp",
        title: "Audio",
        number: "01",
        description: "Description for item 1",
        href: "project1",
        detail1: "/images/detail1.webp",
        detail2: "/images/detail2.webp",
        description2: 'A clean user-friendly e-commerce site',
        description3: "This project is an e-commerce platform for purchasing audio equipment, which I built with React. It includes detailed pages of each item, a functional cart, and checkout system.",
        siteUrl: 'https://www.google.com',
        codeUrl: 'https://www.google.com',
    },
    {
        id: "2",
        thumbnail: "/images/2.webp",
        title: "Title 2",
        number: "02",
        description: "Description for item 2",
        href: "/",
        detail1: "/images/detail1.webp",
        detail2: "/images/detail2.webp",
        description2: 'A clean user-friendly e-commerce site',
        description3: 'A clean user-friendly e-commerce site',
        siteUrl: 'https://www.google.com',
        codeUrl: 'https://www.google.com',
    },
    {
        id: "3",
        thumbnail: "/images/3.webp",
        title: "Title 3",
        number: "03",
        description: "Description for item 3",
        href: "/",
        detail1: "/images/detail1.webp",
        detail2: "/images/detail2.webp",
        description2: 'A clean user-friendly e-commerce site',
        description3: 'A clean user-friendly e-commerce site',
        siteUrl: 'https://www.google.com',
        codeUrl: 'https://www.google.com',
    },
    {
        id: "4",
        thumbnail: "/images/4.webp",
        title: "Title 4",
        number: "04",
        description: "Description for item 4",
        href: "/",
        detail1: "/images/detail1.webp",
        detail2: "/images/detail2.webp",
        description2: 'A clean user-friendly e-commerce site',
        description3: 'A clean user-friendly e-commerce site',
        siteUrl: 'https://www.google.com',
        codeUrl: 'https://www.google.com',
    },
];
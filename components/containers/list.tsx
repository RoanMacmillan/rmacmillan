import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";

const List: React.FC = () => {
  return (
    <div>
      <h1 className="mt-8">Check<br></br>My<br></br>Portfolio</h1>
      <div className="h-1 bg-black w-10"></div>


      <ul className="mt-10">
        {items.map((item, index) => (
          <li className="mb-16" key={index}>
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={600}
              height={600}
            />
            <p className="mt-10">{item.number}</p>
            <h2 className="mt-4">{item.title}</h2>
            <p className="mt-4">{item.description}</p>
            <Separator className="mt-[30px]" />

          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

const items = [
  {
    thumbnail: "/images/1.webp",
    title: "Title 1",
    number: '01',
    description: "Description for item 1",
  },
  {
    // thumbnail: 'thumbnail2.png',
    thumbnail: "/images/2.webp",

    title: "Title 2",
    number: '02',
    description: "Description for item 2",
  },
  {
    // thumbnail: 'thumbnail3.png',
    thumbnail: "/images/3.webp",

    title: "Title 3",
    number: '03',
    description: "Description for item 3",
  },
  {
    // thumbnail: 'thumbnail4.png',
    thumbnail: "/images/4.webp",

    title: "Title 4",
    number: '04',
    description: "Description for item 4",
  },
];

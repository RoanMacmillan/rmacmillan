import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import {items} from "@/data/data";
const List: React.FC = () => {
  return (
    <div>
      <h1 className="mt-8">
        Check<br></br>My<br></br>Portfolio
      </h1>
      <div className="h-1 bg-black w-10"></div>

      <ul className="mt-10">
        {items.map((item, index) => (
          <li className="mb-16" key={index}>
            <Link href={`/project/${item.id}`}>
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={600}
                height={600}
              />
            </Link>
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



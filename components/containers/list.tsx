import Image from "next/image";
import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import {items} from "@/data/data";
const List: React.FC = () => {
  return (
    <div className="relative">
      <Separator orientation="vertical" className="hidden xl:block absolute top-0 left-0 h-[102%] inset-0 mx-auto"></Separator>
      <h1 className="mt-8 customXL:mt-[184px] customMd:mt-[133px] lg:text-[80px] text-[60px] leading-[1] tracking-[-2px]">
        <span className="font-light">Check<br></br>My</span><br className="lg:hidden"></br><span className="font-bold lg:ml-[10px]">Portfolio</span>
      </h1>
      <div className="h-1 mt-6 bg-black w-10 lg:w-14 lg:h-[5px] "></div>

      <ul className="mt-10 sm:mt-[50px] lg:mt-[150px] sm:gap-14 lg:gap-24 xl:gap-36 sm:grid grid-cols-2">
        {items.map((item, index) => (
          <li className={`mb-16 lg:mb-0 sm:max-w-[500px] ${item.column === 2 ? '-mt-[100px] ml-auto' : ''}`} key={index}>
            <Link href={`/project/${item.id}`}>
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={600}
                height={600}
                className=""
              />
            </Link>
            <p className="mt-10 text-customGray">{item.number}-04</p>
            <h2 className="mt-4 font-bold text-lg lg:text-3xl">{item.title}</h2>
            <p className="mt-4 text-customGray">{item.description}</p>
            <Separator className="mt-[30px] sm:hidden" />
          </li>
        ))}
      </ul>




    </div>
  );
};

export default List;



import { notFound } from "next/navigation";
import * as React from "react";
import { items } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
    // asynchronous access of `params.id`.
    const { id } = await params;

    const item = items.find((item) => item.id === id);

    if (!item) {
        return notFound();
    }

    return (

        <div className="mt-[50px]">
            <p>{item.number}-04</p>
        <h1 className="mt-4 text-[60px] leading-[1] tracking-[-2px] font-bold">{item.title}</h1>
      <div className="h-[5px] bg-black w-12 mt-6 "></div>


        <div className="mt-[40px]">

        <Image src={item.detail1} alt={item.title} width={600} height={600} />

        <h2 className="mt-[60px] text-gray-500">About</h2>

        <h3 className="mt-[20px] text-xl font-bold">{item.description2}</h3>

        <p className="mt-8 leading-7 text-gray-500">{item.description3}</p>

        <div className="mt-8 flex gap-10">
        <Link className="font-semibold text-base" href={item.siteUrl}>View Preview</Link>
        <Link className="font-semibold text-base" href={item.codeUrl}>View Code</Link>
        </div>


        <Image className="mt-[60px]" src={item.detail2} alt={item.title} width={600} height={600} />

        <Separator className="mt-[60px]" />

        </div>

        </div>
    )
}

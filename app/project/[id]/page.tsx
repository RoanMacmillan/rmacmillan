import { notFound } from "next/navigation";
import * as React from "react";
import { items } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface PageProps {
  params: { id: string };
}

// Generate dynamic metadata
export async function generateMetadata({ params }: PageProps) {
  const item = items.find((item) => item.id === params.id);

  if (!item) {
    return {
      title: "Item Not Found",
      description: "The requested item could not be found.",
    };
  }

  return {
    title: `${item.title}`, // Dynamic title
    description: item.description2, // Use item details for metadata
  };
}

export default async function Page({ params }: PageProps) {
  // asynchronous access of `params.id`.
  const { id } = await params;

  const item = items.find((item) => item.id === id);

  if (!item) {
    return notFound();
  }

  return (
    <div className="mt-[50px] customMd:mt-[184px] max-w-[1280px] mx-auto">
      <p>{item.number}-04</p>
      <h1 className="mt-4 text-[60px] customMd:text-[80px] leading-[1] tracking-[-2px] font-bold">
        {item.title}
      </h1>
      <div className="h-[5px] bg-black w-12 mt-6 "></div>

      <div className="mt-[40px] customMd:mt-[80px]">
        <Image
          className="sm:hidden"
          src={item.detail1}
          alt={item.title}
          width={800}
          height={800}
        />
        <Image
          className="hidden sm:block"
          src={item.desktop1}
          alt={item.title}
          width={2000}
          height={2000}
        ></Image>

        <h2 className="mt-[60px] lg:mt-[80px] text-gray-500">About</h2>

        <div className="lg:flex lg:mt-[50px] justify-between">
          <div className="mt-[20px] lg:mt-0 lg:w-[400px]">
            <h3 className=" text-xl lg:text-3xl font-bold">
              {item.description2}
            </h3>
          </div>

          <div className="lg:w-1/2">
            <p className="mt-8 leading-7 lg:mt-0 text-gray-500">
              {item.description3}
            </p>

            <div className="mt-8 flex gap-10">
              <Link href={item.siteUrl} className="group text-left">
                <p className="font-semibold">View Preview</p>
                <div className="relative mt-[5px] h-[2px] w-28 bg-gray-200">
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full"></div>
                </div>
              </Link>

              <Link href={item.codeUrl} className="group text-left">
                <p className="font-semibold">View Code</p>
                <div className="relative mt-[5px] h-[2px] w-[92px] bg-gray-200">
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <Image
          className="mt-[60px] sm:hidden"
          src={item.detail2}
          alt={item.title}
          width={800}
          height={800}
        />
        <Image
          className="hidden mt-[60px] lg:mt-[120px] sm:block"
          src={item.desktop2}
          alt={item.title}
          width={2000}
          height={2000}
        ></Image>

        <Separator className="mt-[60px] lg:hidden" />
      </div>
    </div>
  );
}

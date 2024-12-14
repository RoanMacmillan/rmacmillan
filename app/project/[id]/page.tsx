
import { notFound } from "next/navigation";
import { use } from "react";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import ProjectDetail from "@/components/containers/project/detail";

import data from "@/data/data.json";

const items = data.items;

interface PageProps {
  // params: { id: string };
  id: string;
}



// Generate dynamic metadata
// export async function generateMetadata({ params }: {params: Promise<{ id: string }> }) {
  
//   const { id } = await params;

//   const item = items.find((item) => item.id === params.id);

//   if (!item) {
//     return {
//       title: "Item Not Found",
//       description: "The requested item could not be found.",
//     };
//   }

//   return {
//     title: `${item.title}`, // Dynamic title
//     description: item.description2, // Use item details for metadata
//   };
// }

export default async function Page(props: { params: Promise<PageProps> }) {
  // asynchronous access of `params.id`.
  // const { id } = await params;
  // const { id } = use(params);

  const { id } = await props.params;
  // const productID = slug[1];


  const item = items.find((item) => item.id === id);

  if (!item) {
    return notFound();
  }

  return (

    <ProjectDetail item={item} />
    
  );
}

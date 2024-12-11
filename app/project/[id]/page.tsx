
import { notFound } from "next/navigation";
import * as React from "react";
import { items } from "@/data/data.json";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import ProjectDetail from "@/components/containers/project/detail";

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

    <ProjectDetail item={item} />
    
  );
}

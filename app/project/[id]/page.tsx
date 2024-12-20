import { notFound } from "next/navigation";
import * as React from "react";
import ProjectDetail from "@/components/containers/project/detail";

import data from "@/data/data.json";

const items = data.items;

interface PageProps {
  id: string;
}

export async function generateMetadata(props: { params: Promise<PageProps> }) {
  const { id } = await props.params;

  const item = items.find((item) => item.id === id);

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

export default async function Page(props: { params: Promise<PageProps> }) {
  const { id } = await props.params;

  const item = items.find((item) => item.id === id);

  if (!item) {
    return notFound();
  }

  return <ProjectDetail item={item} />;
}

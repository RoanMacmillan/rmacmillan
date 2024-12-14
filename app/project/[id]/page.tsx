import { notFound } from "next/navigation";
import data from "@/data/data.json";
import ProjectDetail from "@/components/containers/project/detail";

const items = data.items;

interface PageProps {
  params: { id: string };
}

// Generate dynamic metadata
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = params; // Await params here
  const item = items.find((item) => item.id === resolvedParams.id); // Access the resolved id

  if (!item) {
    return {
      title: "Item Not Found",
      // description: "The requested item could not be found.",
    };
  }

  return {
    title: `${item.title}`,
    // description: item.description2,
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = params; // Await params here
  console.log("Resolved Params:", resolvedParams); // Logs params after awaiting

  const item = items.find((item) => item.id === resolvedParams.id);

  if (!item) {
    return notFound();
  }

  return <ProjectDetail item={item} />;
}

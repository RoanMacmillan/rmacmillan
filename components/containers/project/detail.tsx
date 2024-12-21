"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoadingBar from "../../../animations/loading-bar";
import BlurFade from "@/components/ui/blur-fade";

interface ProjectDetailProps {
  item: ProjectDetailItem;
}

interface ProjectDetailItem {
  id: string;
  number: string;
  title: string;
  thumbnail: string;
  desktop1: string;
  desktop2: string;
  detail1: string;
  detail2: string;
  description: string;
  description2: string;
  description3: string;
  siteUrl: string;
  codeUrl: string;
  href: string;
  column: number;
  row: number;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ item }) => {
  return (
    <div className=" max-w-[1380px] mx-auto px-6 customMd:px-20">
      <LoadingBar backgroundColorClass="bg-customBlack" />
      <p>{item.number}-04</p>
      <h1 className="mt-4 text-[60px] customMd:text-[80px] leading-[1] tracking-[-2px] font-bold">
        {item.title}
      </h1>
      <div className="h-[5px] bg-black w-12 mt-6 "></div>

      <div className="mt-[40px] customMd:mt-[80px]">
        <BlurFade delay={0.25} inView>
          <Image
            className="rounded-sm"
            src={item.desktop1}
            alt={item.title}
            width={2000}
            height={2000}
            priority={true}
          ></Image>
        </BlurFade>

        <h2 className="mt-[60px] lg:mt-[80px] text-gray-500">About</h2>

        <div className="lg:flex lg:mt-[50px] justify-between">
          <div className="mt-[20px] lg:mt-0 lg:w-[400px]">
            <h3 className=" text-xl lg:text-3xl font-bold">
              {item.description2}
            </h3>
          </div>

          <div className="lg:w-1/2">
            <p className="mt-8 leading-7 text-sm lg:mt-0 text-gray-500">
              {item.description3}
            </p>

            <div className="mt-8 flex gap-10">
                <Link href={item.siteUrl} className="group text-left" target="_blank" rel="noopener noreferrer">
                <p className="font-semibold">View Preview</p>
                <div className="relative mt-[5px] h-[2px] w-28 bg-gray-200">
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full"></div>
                </div>
                </Link>

              <Link href={item.codeUrl} className="group text-left" target="_blank" rel="noopener noreferrer">
                <p className="font-semibold">View Code</p>
                <div className="relative mt-[5px] h-[2px] w-[92px] bg-gray-200">
                  <div className="absolute left-0 top-0 h-[2px] w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <BlurFade delay={0.25} inView>
          <Image
            className="mt-[60px] lg:mt-[120px] rounded-sm"
            src={item.desktop2}
            alt={item.title}
            width={2000}
            height={2000}
          ></Image>
        </BlurFade>

        <Separator className="mt-[60px] sm:hidden" />
      </div>
    </div>
  );
};

export default ProjectDetail;

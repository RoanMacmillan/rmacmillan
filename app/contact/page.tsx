'use client';
import ContactFlex from "@/components/containers/contact/contact-flex";
import ContactHero from "@/components/containers/contact/contact-hero";
import React from "react";
import LoadingBar from "@/components/containers/loading-bar";

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-[1380px] mx-auto px-6 customMd:px-20">
      <LoadingBar backgroundColorClass="bg-customBlack"></LoadingBar>
        <ContactHero></ContactHero>
      <ContactFlex></ContactFlex>
    </div>
  );
};

export default ContactPage;

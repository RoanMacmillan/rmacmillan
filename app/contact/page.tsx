import ContactFlex from "@/components/containers/contact/contact-flex";
import ContactHero from "@/components/containers/contact/contact-hero";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 customMd:px-8">
        <ContactHero></ContactHero>
      <ContactFlex></ContactFlex>
    </div>
  );
};

export default ContactPage;

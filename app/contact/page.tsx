import ContactFlex from "@/components/containers/contact/contact-flex";
import ContactHero from "@/components/containers/contact/contact-hero";
import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div>
        <ContactHero></ContactHero>
      <ContactFlex></ContactFlex>
    </div>
  );
};

export default ContactPage;

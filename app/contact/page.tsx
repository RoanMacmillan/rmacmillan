import ContactFlex from "@/components/containers/contact/contact-flex";
import ContactHero from "@/components/containers/contact/contact-hero";
import React from "react";
import ContactForm from "@/components/containers/contact/contact-container";

export const metadata = {

  title: 'Contact Me',
  description: 'Get in touch with me. I am always open to new opportunities.',
};

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-[1380px] mx-auto px-6 customMd:px-20">
        <ContactHero></ContactHero>
        <ContactForm></ContactForm>
      <ContactFlex></ContactFlex>
    </div>
  );
};

export default ContactPage;

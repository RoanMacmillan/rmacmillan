import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import Form from "./form";

const ContactForm: React.FC = () => {
  return (
    <div className="mt-12 customMd:mt-[100px]">
      <h1 className="text-6xl flex flex-col leading-[1] tracking-[-2px] lg:text-[80px] lg:flex-row gap-2">
        <span className="font-light">Let's</span>
        <span className="font-bold">Talk</span>
      </h1>
      <div className="h-1 mt-6 bg-black w-10 lg:w-14 lg:h-[5px] "></div>

      <div className="mt-16 customMd:flex justify-between">
        <div className="customMd:w-[40%]">
          <h2 className="text-2xl font-bold">Contact Form</h2>

          <p className="mt-4 text-customGray text-sm">
            Got a project in mind? Find my contact info below or feel free to
            fill out the form below with your questions.
          </p>
        </div>
 
        {/* <form></form> */}

        <Form></Form>

        
      </div>
    </div>
  );
};

export default ContactForm;

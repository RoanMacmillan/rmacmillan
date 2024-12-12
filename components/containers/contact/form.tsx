"use client";

import React, { useState } from "react";
import axios from "axios";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Form: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [termsError, setTermsError] = useState("");

  const { toast } = useToast();

  const [errors, setErrors] = useState({
    name: "", // Initialize with an empty string
    email: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateName = (name: string) => {
    if (name.trim() === "") {
      return "* Can't be blank";
    }
    return "";
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!email.match(emailRegex)) {
      return "* Invalid Email";
    }
    return "";
  };

  const validateMessage = (message: string) => {
    if (message.trim() === "" || message.trim().length < 10) {
      return "* Please enter at least 10 characters";
    }
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);
    const termsErrorMsg = isChecked
      ? ""
      : "* You must agree to the terms and conditions";

    if (nameError || emailError || messageError || termsErrorMsg) {
      setErrors({
        ...errors,
        name: nameError,
        email: emailError,
        message: messageError,
      });
      setTermsError(termsErrorMsg);
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "/.netlify/functions/sendEmail",
        formData
      );

      if (response.status === 200) {
        console.log("Email sent successfully");

        setFormData((prevFormData) => ({
          ...prevFormData,
          message: "",
        }));

        setErrors({
          name: "",
          email: "",
          message: "",
        });

        setTermsError("");
        toast({
          description:
            "Your message has been sent. I try to respond within 24 hours.",
        });
      } else {
        console.error("Failed to send email");

        setErrors({
          name: "",
          email: "",
          message: "",
        });

        setTermsError("");
      }
    } catch (error) {
      console.error("An error occurred:", error);

      setErrors({
        name: "",
        email: "",
        message: "",
      });

      setTermsError("");
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description:
          "Message could not be sent. Please contact me through social media.",
        // action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-16 customMd:ml-0 customMd:mt-0 customMd:w-1/2"
    >
      <div className="flex justify-between">
        <div className="relative flex w-[45%] flex-col">
          <label className="text-base font-bold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="mt-1 border-b-2 border-customBlack py-4 text-sm outline-none"
          />

          {errors.name && (
            <div className="absolute top-[-25px] text-xs text-red-500">
              {errors.name}
            </div>
          )}
        </div>

        <div className="relative flex w-[45%] flex-col">
          <label className="text-base font-bold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="mt-1 border-b-2 border-customBlack py-4 text-sm outline-none"
          />

          {errors.email && (
            <div className="absolute top-[-25px] text-xs text-red-500">
              {errors.email}
            </div>
          )}
        </div>
      </div>

      <div className="relative mt-12 flex flex-col customMd:mt-12">
        <label className="text-base font-bold" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How Can I help?"
          className="border-b-2  border-customBlack pb-12 pt-6 text-sm outline-none customMd:pb-24"
        />

        {errors.message && (
          <div className="absolute top-[-25px] text-xs text-red-500">
            {errors.message}
          </div>
        )}
      </div>

      <div className="relative mt-6 flex flex-col gap-4 customMd:mt-8">
        <div className="flex items-center space-x-2 mt-6">
          <Checkbox
            id="terms"
            checked={isChecked}
            onCheckedChange={() => setIsChecked(!isChecked)}
          />
          <label
            htmlFor="terms"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>

        {termsError && <div className="text-xs text-red-500">{termsError}</div>}
      </div>

      <Button
        type="submit"
        className={`mt-12 w-[169px] py-5 rounded-sm font-bold ${
          isLoading ? "opacity-75 pointer-events-none" : ""
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </Button>

      {isLoading && (
        <div className="fixed left-0 w-1/2 h-1 bg-customEmerald top-0 animate-moving-bar"></div>
      )}
    </form>
  );
};

export default Form;

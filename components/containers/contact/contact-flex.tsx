'use client'

import React from "react";
import Image from "next/image";
import mail from "../../../public/images/mail.svg";
import location from "../../../public/images/location.svg";
import phone from "../../../public/images/phone.svg";
import useIntersectionObserver from "@/hooks/fadeIn";

const ContactFlex = () => {
  const [cardRef, cardRefVisible] = useIntersectionObserver();
  const [cardRef2, cardRefVisible2] = useIntersectionObserver();
  const [cardRef3, cardRefVisible3] = useIntersectionObserver();


  return (
    <div className="customMd:mt-24 customMd:flex">
      <div className={`mt-20 p-8 customMd:mt-0 customMd:px-14 customMd:py-12 customMd:pl-0`}>
        <Image src={mail} alt={mail} width={28} height={28} />

        <h3 className="test123 mt-6 text-lg font-bold">
          roanmacmillan@hotmail.com
        </h3>
        <p className="mt-6 text-[15px] text-customGray">
          Send me a message and I will reach out as soon as possible.
        </p>
      </div>

      <div className={`mt-4 border p-8 customMd:mt-0 customMd:px-14 customMd:py-12`}>
        <Image src={location} alt={location} width={28} height={28} />

        <h3 className="mt-6 text-lg font-bold">Edinburgh, Scotland</h3>
        <p className="mt-6 text-[15px] text-customGray">
          Based in Edinburgh UK. Open to onsite or remote roles.
        </p>
      </div>

      <div className={`mt-4 p-8 customMd:mt-0 customMd:px-14 customMd:py-12 customMd:pr-0`}>
        <Image src={phone} alt={phone} width={28} height={28} />

        <h3 className="mt-6 text-lg font-bold">(44) 123-3210</h3>
        <p className="mt-6 text-[15px] text-customGray">
          Reach out to me via phone. I am available for calls.
        </p>
      </div>
    </div>
  );
};

export default ContactFlex;
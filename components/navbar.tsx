'use client'

import React, { useState } from "react";
import Link from "next/link";
import DropdownButton from "@/components/language";

export default function Navbar() {
  const [language, setLanguage] = useState("Français");

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center justify-between bg-white w-screen h-[90px] px-[12px] sticky top-0 z-10">
      <div className="flex w-32 pt-4 pb-2 gap-2 justify-center items-center flex-shrink-0 self-stretch">
        <Link href="http://900.care">
          <img alt="Logo 900.Care" src="/Logo.png" />
        </Link>
      </div>
      <div className="flex py-5 pl-2 pr-6 gap-4 justify-center items-start flex-1 self-stretch">
        <div className="flex-1 self-stretch">
          <p></p>
        </div>
        <DropdownButton language={language} onLanguageChange={handleLanguageChange} />
      </div>
    </div>
  );
}

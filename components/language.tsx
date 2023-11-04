"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';

import en from "@/locales/en";
import fr from "@/locales/fr";

interface DropdownButtonProps {
  language: string;
  onLanguageChange: (newLanguage: string) => void;
}

function DropdownButton(props: DropdownButtonProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleSelect = (selectedLanguage: string) => {
    props.onLanguageChange(selectedLanguage);
    setOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={handleClick}
        type="button"
        className="w-44 bg-white text-center font-poppins text-xl font-semibold leading-[1.5rem] text-almost-black rounded-md border border-gray-300 p-3 gap-1.5 flex justify-center items-center"
      >
        {props.language}{" "}
        {/* Google Chrome doesn't support flag emojis */}
        {props.language === "Français" ? (
          <Image src="/french.png" width={20} height={20} alt="French Flag" />
        ) : (
          <Image src="/english.png" width={20} height={20} alt="English Flag" />
        )}{" "}
        <Image
          src="/dropdownArrow.png"
          width={16}
          height={16}
          alt="Dropdown arrow"
          className={`transform transition-transform duration-300 ease-in-out ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div
          className="origin-top-right absolute right-0 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-max-h duration-300 ease-in-out max-h-48"
        >
          <div className="py-1">
            <button
              onClick={() => handleSelect("Français")}
              className="block px-4 py-2 text-sm text-almost-black hover-bg-gray-100 w-full text-left"
            >
              Français
            </button>
            <button
              onClick={() => handleSelect("English")}
              className="block px-4 py-2 text-sm text-almost-black hover-bg-gray-100 w-full text-left"
            >
              English
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownButton;

import React from "react";
import Link from "next/link"; // Assuming you're using Next.js
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className=" text-white pt-45 bg-cover bg-top bg-no-repeat "
      style={{ backgroundImage: "url('/Frame 1000003155.png')" }}
    >
      {/* Main footer content */}
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-7xl font-bold mb-4">
          <span className="text-white">TrySee Verifier</span>
        </h2>
        <h3 className="text-6xl text-gray-400 mb-12 font-medium">in action</h3>

        <Link href="/demo" className="inline-block">
          <button className="bg-gradient-to-r from-[#5027B1]  to-[#237FD7] hover:bg-none hover:bg-white hover:text-[#5029B1] text-white py-3 px-8 rounded-lg text-lg font-medium hover:opacity-90 transition-opacity">
            Dive in!
          </button>
        </Link>
      </div>

      {/* Bottom footer section */}
      <div
        className="container mx-auto px-4  bg-repeat-y bg-cover bg-top pt-8 pb-15 flex flex-col md:flex-row justify-between items-center"
        style={{ backgroundImage: "url('/footer (1).png')" }}
      >
        {/* Logo and copyright */}
        <div className="mb-6 md:mb-0 pl-12">
          <div className="flex items-center mb-2">
            {/* <svg
              className="w-6 h-6 text-blue-500 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg> */}
            <div className="h-8 w-8">
              <Image
                src="/Frame 1000003104.png"
                alt="Verifier logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="text-white text-xl font-bold pb-1 pl-2">
              verifier
            </span>
          </div>
          <div className="text-sm text-gray-400">
            <p className=" text-white">2024 Verifier. All rights reserved.</p>
            <p className="text-xs mt-1">
              All trademarks, logos, and brand names are the property of their
              respective owners.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-8 pt-6">
          <Link
            href="/terms"
            className="text-white text-sm hover:text-gray-500 transition-colors"
          >
            Terms and conditions
          </Link>
          <Link
            href="/privacy"
            className="text-white text-sm hover:text-gray-500 transition-colors"
          >
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

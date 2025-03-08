// components/HeroSection.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section
      className="w-full bg-cover bg-top bg-no-repeat text-white py-16 px-4 md:px-8"
      style={{ backgroundImage: "url('/features.png')" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12 mt-38">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 leading-tight tracking-tight">
            World's most accurate email
            <br />
            verifier and validator online
          </h1>
          <p className="text-lg text-gray-300 tracking-wide opacity-60">
            Clean and validate your email addresses in just one click
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pl-18">
          {/* Left Column - Features */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 mr-3 opacity-55"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h2 className="text-xl font-medium opacity-55">
                  Bulk email verifier
                </h2>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Verify your email lists effortlessly
              </h3>
              <p className="text-gray-300">
                Use the bulk email verifier to improve email deliverability and
                sender reputation.
              </p>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="bg-green-500 rounded-full p-1 mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Remove wrong emails</span>
              </li>
              <li className="flex items-center">
                <div className="bg-green-500 rounded-full p-1 mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Avoid spam traps</span>
              </li>
              <li className="flex items-center">
                <div className="bg-green-500 rounded-full p-1 mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Reduce bounces</span>
              </li>
            </ul>

            {/* CTA Button */}
            <div>
              <Link
                href="/start"
                className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors duration-300 shadow-lg"
              >
                Dive in!
              </Link>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full  max-w-md">
              <Image
                src="/image 1.png"
                alt="Email Validator Dashboard"
                width={350}
                height={350}
                className="rounded-lg  h-full w-full"
                priority
              />
              {/* Fallback for when the image is not available */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg z-[-1]">
                <div className="text-center p-6">
                  <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center  mt-25">
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full h-full max-w-md mr-10 ">
              <Image
                src="/image 3.png"
                alt="Email Validator Dashboard"
                width={350}
                height={550}
                className="rounded-lg  h-full w-full"
                priority
              />
              {/* Fallback for when the image is not available */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-lg z-[-1]">
                <div className="text-center p-6">
                  <div className="mb-4 mx-auto w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-400">Dashboard Preview</p>
                </div>
              </div>
            </div>
          </div>
          {/* Left Column - Features */}
          <div className="space-y-8 pl-10">
            <div>
              <div className="flex items-center mb-2">
                <svg
                  className="w-6 h-6 mr-3 opacity-55"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h2 className="text-xl font-medium opacity-55">
                  Bulk email verifier
                </h2>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Verify your email lists effortlessly
              </h3>
              <p className="text-gray-300">
                Use the bulk email verifier to improve email deliverability and
                sender reputation.
              </p>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="bg-green-500 rounded-full p-1 mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Remove wrong emails</span>
              </li>
              <li className="flex items-center">
                <div className="bg-green-500 rounded-full p-1 mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Avoid spam traps</span>
              </li>
              <li className="flex items-center">
                <div className="bg-green-500 rounded-full p-1 mr-3">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>Reduce bounces</span>
              </li>
            </ul>

            {/* CTA Button */}
            <div>
              <Link
                href="/start"
                className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors duration-300 shadow-lg"
              >
                Dive in!
              </Link>
            </div>
          </div>

          {/* Right Column - Dashboard Mockup */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

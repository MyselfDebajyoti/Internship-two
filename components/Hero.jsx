// // pages/index.js

// "use client";
// import { use, useState } from "react";
// import Head from "next/head";
// import Image from "next/image";

// export default function Hero() {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add email verification logic here
//     console.log("Verifying email:", email);
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gradient-to-b from-indigo-950 to-indigo-900 text-white">
//       <Head>
//         <title>Email Checker and Verifier</title>
//         <meta
//           name="description"
//           content="Verify and validate email addresses"
//         />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <header className="p-4 md:p-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex items-center space-x-2">
//             <div className="h-8 w-8 text-blue-400">
//               <Image
//                 src="/Frame 1000003104.png"
//                 alt="Verifier logo"
//                 width={32}
//                 height={32}
//                 className="object-contain"
//               />
//             </div>
//             <span className="font-light text-lg md:text-xl">verifier</span>
//           </div>
//         </div>
//       </header>

//       <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-6 text-center">
//         <div className="max-w-3xl mx-auto">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Email Checker
//             <span className="block text-gray-300">and Verifier</span>
//           </h1>

//           <p className="text-lg mb-12 text-gray-300">
//             Reduce bounce rate and improve your email marketing performance with
//             our verifier.
//           </p>

//           <form
//             onSubmit={handleSubmit}
//             className="w-full max-w-2xl mx-auto mb-12"
//           >
//             <div className="flex flex-col md:flex-row gap-2">
//               <input
//                 type="email"
//                 placeholder="Enter an email to verify"
//                 className="flex-grow px-4 py-3 rounded-lg bg-indigo-800 bg-opacity-50 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//               <button
//                 type="submit"
//                 className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 font-medium"
//               >
//                 Verify
//               </button>
//             </div>
//           </form>

//           <div className="mb-8 py-15">
//             <p className="text-xl mb-6">
//               Modern companies are using{" "}
//               <span className="font-medium">Verifier</span>
//             </p>

//             <div className="max-w-4xl mx-auto px-4">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 items-center">
//                 <div className="w-full h-16 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
//                   <Image
//                     src="/images/sentry-ecom.png"
//                     alt="Sentry ECOM"
//                     width={160}
//                     height={50}
//                     className="object-contain w-full h-full"
//                   />
//                 </div>
//                 <div className="w-full h-16 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
//                   <Image
//                     src="/images/xlr-media.png"
//                     alt="XLR Media"
//                     width={160}
//                     height={50}
//                     className="object-contain w-full h-full"
//                   />
//                 </div>
//                 <div className="w-full h-16 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
//                   <Image
//                     src="/outreach clerk.svg"
//                     alt="Outreach Clerk"
//                     width={160}
//                     height={50}
//                     className="object-contain w-full h-full"
//                   />
//                 </div>
//                 <div className="w-full h-16 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
//                   <Image
//                     src="/images/acemedia.png"
//                     alt="AceMedia"
//                     width={160}
//                     height={50}
//                     className="object-contain w-full h-full"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

"use client";
// pages/index.js
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Montserrat } from "next/font/google";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add email verification logic here
    console.log("Verifying email:", email);
  };

  return (
    <div
      className="flex flex-col min-h-screen text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Frame 1000003139.png')" }}
    >
      <Head>
        <title>Email Checker and Verifier</title>
        <meta
          name="description"
          content="Verify and validate email addresses"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8">
              <Image
                src="/Frame 1000003104.png"
                alt="Verifier logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-lg md:text-xl">verifier</span>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Email Checker
            <span className="block text-gray-300">and Verifier</span>
          </h1>

          <p className="text-lg mb-12 text-gray-300 font-montserrat">
            Reduce bounce rate and improve your email marketing performance with
            our verifier.
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl mx-auto mb-12"
          >
            <div className="flex flex-col md:flex-row gap-2 shadow-3xl shadow-[#1A2943]">
              <input
                type="email"
                placeholder="Enter an email to verify"
                className="flex-grow px-4 py-3 rounded-2xl bg-[#3A497A] bg-opacity-50 border border-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-4xl shadow-[#1A2943] text-white placeholder-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 font-medium"
              >
                Verify
              </button>
            </div>
          </form>
          {/* <div className="max-w-6xl  py-5 mx-auto">
            <p className="text-xl mb-8">
              Modern companies are using{" "}
              <span className="font-medium">Verifier</span>
            </p>
          </div> */}
        </div>
      </main>

      {/* Logo section moved outside of main */}
      <section className=" px-4 md:px-8 text-center mb-12">
        <div className="max-w-6xl mx-auto">
          <p className="text-xl mb-8 font-montse">
            Modern companies are using{" "}
            <span className="font-medium">Verifier</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-20 items-center">
            <div className="w-full h-20 flex items-center justify-center opacity-100 hover:opacity-100 transition-opacity">
              <Image
                src="/sentry ecom.svg"
                alt="Sentry ECOM"
                width={180}
                height={60}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full h-20 flex items-center justify-center opacity-100 hover:opacity-100 transition-opacity">
              <Image
                src="/XLR MEDIA.png"
                alt="XLR Media"
                width={150}
                height={60}
                className="object-contain h-full"
              />
            </div>
            <div className=" h-20 flex items-center justify-center opacity-100 hover:opacity-100 transition-opacity">
              <Image
                src="/outreach clerk.svg"
                alt="Outreach Clerk"
                width={120}
                height={60}
                className="object-contain h-full"
              />
            </div>
            <div className="w-full h-20 flex items-center justify-center opacity-100 hover:opacity-100 transition-opacity">
              <Image
                src="/Group 1000002807.png"
                alt="AceMedia"
                width={90}
                height={40}
                className="object-contain h-[50%]"
              />
            </div>

            <div className="w-full h-20 flex items-center justify-center opacity-100 hover:opacity-100 transition-opacity">
              <Image
                src="/acexmedia.png"
                alt="AceMedia"
                width={100}
                height={60}
                className="object-contain h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// pages/pricing.js
// "use client";
// import { useState, useEffect } from "react";
// import Head from "next/head";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export default function PricingPage() {
//   const [isMonthly, setIsMonthly] = useState(true);
//   const [emailCount, setEmailCount] = useState(2000);
//   const [price, setPrice] = useState(18);

//   const ratesList = [
//     { emails: 2000, rate: 0.009 },
//     { emails: 5000, rate: 0.008 },
//     { emails: 10000, rate: 0.0075 },
//     { emails: 25000, rate: 0.007 },
//     { emails: 50000, rate: 0.007 },
//     { emails: 100000, rate: 0.0039 },
//     { emails: 250000, rate: 0.0035 },
//     { emails: 500000, rate: 0.003 },
//     { emails: 1000000, rate: 0.00225 },
//   ];

//   useEffect(() => {
//     // Find the appropriate rate tier for the email count
//     const tier =
//       ratesList.find((tier) => tier.emails >= emailCount) ||
//       ratesList[ratesList.length - 1];
//     setPrice(Math.round(emailCount * tier.rate));
//   }, [emailCount]);

//   const handleSliderChange = (e) => {
//     setEmailCount(Number(e.target.value));
//   };

//   const handleInputChange = (e) => {
//     const value = Number(e.target.value.replace(/[^0-9]/g, ""));
//     setEmailCount(value > 0 ? value : 1);
//   };

//   return (
//     <>
//       <Head>
//         <title>Choose Your Plan</title>
//         <meta
//           name="description"
//           content="Select the right pricing plan for your needs"
//         />
//       </Head>
//       <main
//         className={`min-h-screen bg-indigo-950 flex items-center justify-center p-4 ${inter.className}`}
//       >
//         <div className="w-full max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
//               Choose the right plan for you
//             </h1>
//             <p className="text-gray-300">With great power comes great plans</p>
//           </div>

//           <div className="flex flex-col lg:flex-row ">
//             {/* Left Card - Plan Selector */}
//             <div className="bg-indigo-900/80 rounded-lg p-6 md:p-8 flex-1 h-[30]">
//               {/* Toggle Switch */}
//               <div className="flex gap-4 items-center mb-8">
//                 <span
//                   className={`text-sm font-medium ${
//                     isMonthly ? "text-blue-400" : "text-gray-400"
//                   }`}
//                 >
//                   Monthly
//                 </span>
//                 <button
//                   className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
//                   onClick={() => setIsMonthly(!isMonthly)}
//                   style={{ backgroundColor: isMonthly ? "#3B82F6" : "#1E293B" }}
//                 >
//                   <span
//                     className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                       isMonthly ? "translate-x-6" : "translate-x-1"
//                     }`}
//                   />
//                 </button>
//                 <span
//                   className={`text-sm font-medium ${
//                     !isMonthly ? "text-blue-400" : "text-gray-400"
//                   }`}
//                 >
//                   Pay-as-you-go
//                 </span>
//               </div>

//               {/* Email Count Input */}
//               <div className="mb-6">
//                 <label
//                   htmlFor="emailCount"
//                   className="block text-sm font-medium text-white mb-2"
//                 >
//                   How many emails do you have?
//                 </label>
//                 <input
//                   type="text"
//                   id="emailCount"
//                   value={emailCount.toLocaleString()}
//                   onChange={handleInputChange}
//                   className="bg-white rounded-md px-3 py-2 w-full text-center text-gray-900"
//                 />
//               </div>

//               {/* Slider */}
//               <div className="mb-12 px-1">
//                 <input
//                   type="range"
//                   min="1000"
//                   max="1000000"
//                   step="1000"
//                   value={emailCount}
//                   onChange={handleSliderChange}
//                   className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
//                 />
//               </div>

//               {/* Price Display */}
//               <div className="text-center mb-8">
//                 <div className="flex items-center justify-center">
//                   <span className="text-4xl md:text-5xl font-bold text-white">
//                     ${price}
//                   </span>
//                   <span className="text-xl md:text-2xl text-white ml-2">
//                     USD
//                   </span>
//                   <span className="text-sm text-gray-400 ml-1">/month</span>
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <div className="text-center">
//                 <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-8 rounded-md transition-colors">
//                   Buy this now
//                 </button>
//               </div>
//             </div>

//             {/* Right Card - Rates Table */}
//             <div className="bg-indigo-900/80 rounded-lg p-6 md:p-8 lg:w-2/5">
//               <h2 className="text-lg font-medium text-white mb-4">
//                 Monthly rates
//               </h2>
//               <div className="space-y-2">
//                 {ratesList.map((tier, index) => (
//                   <div
//                     key={index}
//                     className="flex justify-between items-center"
//                   >
//                     <span className="text-gray-300">
//                       from {tier.emails.toLocaleString()}/mo
//                     </span>
//                     <span className="text-white font-medium">
//                       {tier.rate.toFixed(tier.rate < 0.01 ? 5 : 3)} USD
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

// pages/pricing.js
// "use client";
// import { useState, useEffect } from "react";
// import Head from "next/head";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export default function PricingPage() {
//   const [isMonthly, setIsMonthly] = useState(true);
//   const [emailCount, setEmailCount] = useState(2000);
//   const [price, setPrice] = useState(18);

//   const ratesList = [
//     { emails: 2000, rate: 0.009 },
//     { emails: 5000, rate: 0.008 },
//     { emails: 10000, rate: 0.0075 },
//     { emails: 25000, rate: 0.007 },
//     { emails: 50000, rate: 0.007 },
//     { emails: 100000, rate: 0.0039 },
//     { emails: 250000, rate: 0.0035 },
//     { emails: 500000, rate: 0.003 },
//     { emails: 1000000, rate: 0.00225 },
//   ];

//   useEffect(() => {
//     // Find the appropriate rate tier for the email count
//     const tier =
//       ratesList.find((tier) => tier.emails >= emailCount) ||
//       ratesList[ratesList.length - 1];
//     setPrice(Math.round(emailCount * tier.rate));
//   }, [emailCount]);

//   const handleSliderChange = (e) => {
//     setEmailCount(Number(e.target.value));
//   };

//   const handleInputChange = (e) => {
//     const value = Number(e.target.value.replace(/[^0-9]/g, ""));
//     setEmailCount(value > 0 ? value : 1);
//   };

//   return (
//     <>
//       <Head>
//         <title>Choose Your Plan</title>
//         <meta
//           name="description"
//           content="Select the right pricing plan for your needs"
//         />
//       </Head>
//       <main
//         className={`min-h-screen bg-indigo-950 flex items-center justify-center p-4 py-16 ${inter.className}`}
//       >
//         <div className="w-full max-w-5xl mx-auto">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
//               Choose the right plan for you
//             </h1>
//             <p className="text-gray-300">With great power comes great plans</p>
//           </div>

//           <div className="relative flex flex-col lg:flex-row">
//             {/* Left Card - Plan Selector */}
//             <div className="bg-indigo-900/80 rounded-lg p-6 md:p-8 lg:w-3/5 z-10 lg:mr-[-1.5rem]">
//               {/* Toggle Switch */}
//               <div className="flex gap-4 items-center mb-8">
//                 <span
//                   className={`text-sm font-medium ${
//                     isMonthly ? "text-blue-400" : "text-gray-400"
//                   }`}
//                 >
//                   Monthly
//                 </span>
//                 <button
//                   className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
//                   onClick={() => setIsMonthly(!isMonthly)}
//                   style={{ backgroundColor: isMonthly ? "#3B82F6" : "#1E293B" }}
//                 >
//                   <span
//                     className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                       isMonthly ? "translate-x-6" : "translate-x-1"
//                     }`}
//                   />
//                 </button>
//                 <span
//                   className={`text-sm font-medium ${
//                     !isMonthly ? "text-blue-400" : "text-gray-400"
//                   }`}
//                 >
//                   Pay-as-you-go
//                 </span>
//               </div>

//               {/* Email Count Input */}
//               <div className="mb-6">
//                 <label
//                   htmlFor="emailCount"
//                   className="block text-sm font-medium text-white mb-2"
//                 >
//                   How many emails do you have?
//                 </label>
//                 <input
//                   type="text"
//                   id="emailCount"
//                   value={emailCount.toLocaleString()}
//                   onChange={handleInputChange}
//                   className="bg-white rounded-md px-3 py-2 w-full text-center text-gray-900"
//                 />
//               </div>

//               {/* Slider */}
//               <div className="mb-12 px-1">
//                 <div className="relative">
//                   <div className="absolute w-full h-2 bg-gray-700 rounded-lg"></div>
//                   <div
//                     className="absolute h-2 bg-blue-500 rounded-lg"
//                     style={{ width: `${(emailCount / 1000000) * 100}%` }}
//                   ></div>
//                   <input
//                     type="range"
//                     min="1000"
//                     max="1000000"
//                     step="1000"
//                     value={emailCount}
//                     onChange={handleSliderChange}
//                     className="relative w-full h-2 bg-transparent appearance-none cursor-pointer z-10"
//                   />
//                   <div
//                     className="absolute w-6 h-6 bg-blue-500 rounded-full border-2 border-white top-1/2 transform -translate-y-1/2"
//                     style={{
//                       left: `calc(${(emailCount / 1000000) * 100}% - 12px)`,
//                     }}
//                   ></div>
//                 </div>
//               </div>

//               {/* Price Display */}
//               <div className="text-center mb-8">
//                 <div className="flex items-center justify-center">
//                   <span className="text-4xl md:text-5xl font-bold text-white">
//                     ${price}
//                   </span>
//                   <span className="text-xl md:text-2xl text-white ml-2">
//                     USD
//                   </span>
//                   <span className="text-sm text-gray-400 ml-1">/month</span>
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <div className="text-center">
//                 <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-8 rounded-md transition-colors">
//                   Buy this now
//                 </button>
//               </div>
//             </div>

//             {/* Right Card - Rates Table */}
//             <div className="bg-indigo-900/80 rounded-lg p-6 md:p-8 lg:w-2/5 mt-6 lg:mt-0">
//               <h2 className="text-lg font-medium text-white mb-4">
//                 Monthly rates
//               </h2>
//               <div className="space-y-2">
//                 {ratesList.map((tier, index) => (
//                   <div
//                     key={index}
//                     className="flex justify-between items-center"
//                   >
//                     <span className="text-gray-300">
//                       from {tier.emails.toLocaleString()}/mo
//                     </span>
//                     <span className="text-white font-medium">
//                       {tier.rate.toFixed(tier.rate < 0.01 ? 5 : 3)} USD
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

// pages/pricing.js
// "use client";
// import { useState, useEffect } from "react";
// import Head from "next/head";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export default function PricingPage() {
//   const [isMonthly, setIsMonthly] = useState(true);
//   const [emailCount, setEmailCount] = useState(2000);
//   const [price, setPrice] = useState(18);

//   const ratesList = [
//     { emails: 2000, rate: 0.009 },
//     { emails: 5000, rate: 0.008 },
//     { emails: 10000, rate: 0.0075 },
//     { emails: 25000, rate: 0.007 },
//     { emails: 50000, rate: 0.007 },
//     { emails: 100000, rate: 0.0039 },
//     { emails: 250000, rate: 0.0035 },
//     { emails: 500000, rate: 0.003 },
//     { emails: 1000000, rate: 0.00225 },
//   ];

//   useEffect(() => {
//     // Find the appropriate rate tier for the email count
//     const tier =
//       ratesList.find((tier) => tier.emails >= emailCount) ||
//       ratesList[ratesList.length - 1];
//     setPrice(Math.round(emailCount * tier.rate));
//   }, [emailCount]);

//   const handleSliderChange = (e) => {
//     setEmailCount(Number(e.target.value));
//   };

//   const handleInputChange = (e) => {
//     const value = Number(e.target.value.replace(/[^0-9]/g, ""));
//     setEmailCount(value > 0 ? value : 1);
//   };

//   return (
//     <>
//       <Head>
//         <title>Choose Your Plan</title>
//         <meta
//           name="description"
//           content="Select the right pricing plan for your needs"
//         />
//       </Head>
//       <main
//         className={`min-h-screen bg-indigo-950 flex items-center justify-center p-4 py-16 ${inter.className}`}
//       >
//         <div className="w-full max-w-5xl mx-auto">
// <div className="text-center mb-12">
//   <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
//     Choose the right plan for you
//   </h1>
//   <p className="text-gray-300">With great power comes great plans</p>
// </div>

//           {/* Card Container */}
//           <div className="flex flex-col lg:flex-row lg:items-stretch">
//             {/* Left Card - Plan Selector */}
//             <div className="relative bg-indigo-900/80 rounded-lg p-6 md:p-8 lg:w-3/5 z-10 ">
//               {/* Create a pseudo-element for the right edge to hide the overlap */}
//               <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-8 bg-indigo-900/80 translate-x-1/2 z-20"></div>

//               {/* Toggle Switch */}
//               <div className="flex gap-4 items-center mb-8">
//                 <span
//                   className={`text-sm font-medium ${
//                     isMonthly ? "text-blue-400" : "text-gray-400"
//                   }`}
//                 >
//                   Monthly
//                 </span>
//                 <button
//                   className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
//                   onClick={() => setIsMonthly(!isMonthly)}
//                   style={{ backgroundColor: isMonthly ? "#3B82F6" : "#1E293B" }}
//                 >
//                   <span
//                     className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
//                       isMonthly ? "translate-x-6" : "translate-x-1"
//                     }`}
//                   />
//                 </button>
//                 <span
//                   className={`text-sm font-medium ${
//                     !isMonthly ? "text-blue-400" : "text-gray-400"
//                   }`}
//                 >
//                   Pay-as-you-go
//                 </span>
//               </div>

//               {/* Email Count Input */}
//               <div className="mb-6">
//                 <label
//                   htmlFor="emailCount"
//                   className="block text-sm font-medium text-white mb-2"
//                 >
//                   How many emails do you have?
//                 </label>
//                 <input
//                   type="text"
//                   id="emailCount"
//                   value={emailCount.toLocaleString()}
//                   onChange={handleInputChange}
//                   className="bg-white rounded-md px-3 py-2 w-full text-center text-gray-900"
//                 />
//               </div>

//               {/* Slider */}
//               <div className="mb-12 px-1">
//                 <div className="relative">
//                   <div className="absolute w-full h-2 bg-gray-700 rounded-lg"></div>
//                   <div
//                     className="absolute h-2 bg-blue-500 rounded-lg"
//                     style={{ width: `${(emailCount / 1000000) * 100}%` }}
//                   ></div>
//                   <input
//                     type="range"
//                     min="1000"
//                     max="1000000"
//                     step="1000"
//                     value={emailCount}
//                     onChange={handleSliderChange}
//                     className="relative w-full h-2 bg-transparent appearance-none cursor-pointer z-10"
//                   />
//                   <div
//                     className="absolute w-6 h-6 bg-blue-500 rounded-full border-2 border-white top-1/2 transform -translate-y-1/2"
//                     style={{
//                       left: `calc(${(emailCount / 1000000) * 100}% - 12px)`,
//                     }}
//                   ></div>
//                 </div>
//               </div>

//               {/* Price Display */}
//               <div className="text-center mb-8">
//                 <div className="flex items-center justify-center">
//                   <span className="text-4xl md:text-5xl font-bold text-white">
//                     ${price}
//                   </span>
//                   <span className="text-xl md:text-2xl text-white ml-2">
//                     USD
//                   </span>
//                   <span className="text-sm text-gray-400 ml-1">/month</span>
//                 </div>
//               </div>

//               {/* CTA Button */}
//               <div className="text-center">
//                 <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-8 rounded-md transition-colors">
//                   Buy this now
//                 </button>
//               </div>
//             </div>

//             {/* Right Card - Rates Table */}
//             <div className="bg-indigo-900/80 rounded-lg lg:rounded-l-none p-6 md:p-8 lg:w-2/5 mt-6 lg:mt-0 lg:-ml-6">
//               <div className="lg:pl-6">
//                 <h2 className="text-lg font-medium text-white mb-4">
//                   Monthly rates
//                 </h2>
//                 <div className="space-y-2">
//                   {ratesList.map((tier, index) => (
//                     <div
//                       key={index}
//                       className="flex justify-between items-center"
//                     >
//                       <span className="text-gray-300">
//                         from {tier.emails.toLocaleString()}/mo
//                       </span>
//                       <span className="text-white font-medium">
//                         {tier.rate.toFixed(tier.rate < 0.01 ? 5 : 3)} USD
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

"use client";
import { useState } from "react";

export default function PricingPage() {
  const [emails, setEmails] = useState(2000);
  const [monthly, setMonthly] = useState(true);

  const handleEmailChange = (e) => {
    setEmails(Number(e.target.value));
  };

  return (
    <div
      className="min-h-screen bg-cover bg-top bg-no-repeat pb-15"
      style={{ backgroundImage: "url('/features (3).png')" }}
    >
      <div className="text-center pt-10 mb-15">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Choose the right plan for you
        </h1>
        <p className="text-gray-300">With great power comes great plans</p>
      </div>

      <div
        className="flex justify-center items-center "
        // style={{ backgroundImage: "url('/Frame 1000003147.png')" }}
      >
        <div className="relative flex flex-col md:flex-row ">
          {/* Left Box */}
          <div
            className=" bg-center bg-no-repeat p-8 rounded-3xl shadow-lg w-[580px] h-[520px] z-10 border-[#5F69A1] border-2"
            style={{ backgroundImage: "url('/credit selector card (2).png')" }}
          >
            <div className="flex items-center space-x-3 mb-6 ml-32 mt-20">
              <span className={` ${monthly ? "text-[#5FAEF8] text-2xl" : ""}`}>
                Monthly
              </span>
              <div
                onClick={() => setMonthly(!monthly)}
                className="w-12 h-6 flex items-center bg-[#4A518C] rounded-full p-1 cursor-pointer"
              >
                <div
                  className={`w-5 h-5 bg-[#DAE9FF] rounded-full shadow-md transform duration-300 ${
                    monthly ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </div>
              <span className={` ${!monthly ? "text-[#5FAEF8] text-2xl" : ""}`}>
                Pay-as-you-go
              </span>
            </div>

            <p className="text-white  mb-2 text-center text-xl">
              How many emails do you have?
            </p>
            <input
              type="text"
              value={emails.toLocaleString()}
              readOnly
              className="w-[60%] text-center py-2 mt-5 rounded-lg ml-25 bg-white text-black
            "
            />

            <input
              type="range"
              min="2000"
              max="1000000"
              step="1000"
              value={emails}
              onChange={handleEmailChange}
              className="w-[80%] mt-10 ml-12  bg-gray-500 rounded-lg"
            />

            <p className="text-white text-3xl font-bold mt-6 text-center">
              ${(emails * 0.009).toFixed(2)} USD
              <span className="text-sm font-light">/month</span>
            </p>
            <button className="bg-gradient-to-r from-[#5027B1]  to-[#237FD7] hover:bg-none hover:bg-white hover:text-[#5029B1] text-white py-2 px-6 rounded-lg mt-4 text-center ml-45">
              Buy this now
            </button>
          </div>

          {/* Right Box */}
          <div
            className=" bg-center bg-repeat p-6 rounded-r-2xl w-[283px] h-[470px] relative top-6 border-2 border-[#2A2A43] shadow-[#10142A]/50 shadow-xl"
            style={{ backgroundImage: "url('/monthly rates card.png')" }}
          >
            <h3 className="text-white mb-7 text-xl pl-3">Monthly rates</h3>
            <div className="text-gray-400 text-sm flex flex-col gap-2">
              <p className="mb-1  hover:bg-[#596793] rounded-md pl-3 cursor-pointer py-1 ">
                from 2,000/mo <span className="text-white pl-7">0.009 USD</span>
              </p>
              <p className="mb-1 hover:bg-[#596793] rounded-md pl-3 cursor-pointer py-1">
                from 5,000/mo <span className="text-white pl-7">0.008 USD</span>
              </p>
              <p className="mb-1 hover:bg-[#596793] rounded-md pl-3 cursor-pointer py-1">
                from 10,000/mo{" "}
                <span className="text-white pl-4">0.0075 USD</span>
              </p>
              <p className="mb-1 hover:bg-[#596793] rounded-md pl-3 cursor-pointer py-1">
                from 25,000/mo{" "}
                <span className="text-white pl-7">0.007 USD</span>
              </p>
              <p className="mb-1 hover:bg-[#596793] rounded-md pl-3 cursor-pointer py-1">
                from 50,000/mo{" "}
                <span className="text-white pl-7">0.007 USD</span>
              </p>
              <p className="mb-1 hover:bg-[#596793] rounded-md pl-3 cursor-pointer py-1">
                from 100,000/mo{" "}
                <span className="text-white pl-3">0.0039 USD</span>
              </p>
              <p className="mb-1 hover:bg-[#596793] rounded-md pl-3 cursor-pointer py-1">
                from 250,000/mo{" "}
                <span className="text-white pl-3">0.0035 USD</span>
              </p>
              <p className="mb-1 hover:bg-[#596793] rounded-md pl-3 cursor-pointer">
                from 500,000/mo{" "}
                <span className="text-white pl-3">0.003 USD</span>
              </p>
              <p className="mb-1 hover:bg-[#596793] rounded-md pl-3 cursor-pointer py-1">
                from 1,000,000/mo{" "}
                <span className="text-white pl-2">0.002 USD</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";
// import { useState } from "react";

// export default function PricingPlan() {
//   const [emails, setEmails] = useState(2000);
//   const [monthly, setMonthly] = useState(true);

//   const handleEmailChange = (e) => {
//     setEmails(Number(e.target.value));
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#0B0C10]">
//       <div className="relative flex flex-col md:flex-row gap-6">
//         {/* Left Box */}
//         <div className="bg-[#1B1C20] p-8 rounded-xl shadow-lg w-[350px] h-[400px] relative z-10 translate-y-6">
//           <div className="flex items-center justify-between mb-6">
//             <span className={`text-white ${monthly ? "font-bold" : ""}`}>
//               Monthly
//             </span>
//             <div
//               onClick={() => setMonthly(!monthly)}
//               className="w-12 h-6 flex items-center bg-[#262730] rounded-full p-1 cursor-pointer"
//             >
//               <div
//                 className={`w-5 h-5 bg-white rounded-full shadow-md transform duration-300 ${
//                   monthly ? "translate-x-6" : "translate-x-0"
//                 }`}
//               />
//             </div>
//             <span className={`text-white ${!monthly ? "font-bold" : ""}`}>
//               Pay-as-you-go
//             </span>
//           </div>

//           <p className="text-white mb-2">How many emails do you have?</p>
//           <input
//             type="text"
//             value={emails.toLocaleString()}
//             readOnly
//             className="w-full text-center py-2 rounded-lg bg-[#262730] text-white"
//           />

//           <input
//             type="range"
//             min="2000"
//             max="1000000"
//             step="1000"
//             value={emails}
//             onChange={handleEmailChange}
//             className="w-full mt-4"
//           />

//           <p className="text-white text-2xl font-bold mt-6">
//             ${(emails * 0.009).toFixed(2)} USD
//             <span className="text-sm">/month</span>
//           </p>
//           <button className="bg-[#3F51B5] text-white py-2 px-6 rounded-lg mt-4">
//             Buy this now
//           </button>
//         </div>

//         {/* Right Box */}
//         <div className="bg-[#1B1C20] p-6 rounded-xl shadow-lg w-[300px] h-[350px] relative -top-4">
//           <h3 className="text-white mb-4">Monthly rates</h3>
//           <div className="text-gray-400 text-sm">
//             <p className="mb-1">
//               from 2,000/mo - <span className="text-white">0.009 USD</span>
//             </p>
//             <p className="mb-1">
//               from 5,000/mo - <span className="text-white">0.008 USD</span>
//             </p>
//             <p className="mb-1">
//               from 10,000/mo - <span className="text-white">0.0075 USD</span>
//             </p>
//             <p className="mb-1">
//               from 25,000/mo - <span className="text-white">0.007 USD</span>
//             </p>
//             <p className="mb-1">
//               from 50,000/mo - <span className="text-white">0.007 USD</span>
//             </p>
//             <p className="mb-1">
//               from 100,000/mo - <span className="text-white">0.0039 USD</span>
//             </p>
//             <p className="mb-1">
//               from 250,000/mo - <span className="text-white">0.0035 USD</span>
//             </p>
//             <p className="mb-1">
//               from 500,000/mo - <span className="text-white">0.003 USD</span>
//             </p>
//             <p className="mb-1">
//               from 1,000,000/mo -{" "}
//               <span className="text-white">0.00225 USD</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

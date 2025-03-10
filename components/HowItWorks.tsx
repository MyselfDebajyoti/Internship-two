// // components/HowItWorks.tsx
// import React from "react";
// import Image from "next/image";

// // Icons for steps
// const UploadIcon = () => (
//   <div className="bg-gray-800 p-4 rounded-lg">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="white"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//       <polyline points="17 8 12 3 7 8" />
//       <line x1="12" y1="3" x2="12" y2="15" />
//     </svg>
//   </div>
// );

// const VerifyIcon = () => (
//   <div className="bg-gray-800 p-4 rounded-lg">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="white"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//       <path d="M9 12l2 2 4-4" />
//     </svg>
//   </div>
// );

// const DownloadIcon = () => (
//   <div className="bg-gray-800 p-4 rounded-lg">
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="white"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
//       <polyline points="7 10 12 15 17 10" />
//       <line x1="12" y1="15" x2="12" y2="3" />
//     </svg>
//   </div>
// );

// // Step type definition
// type Step = {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// };

// // HowItWorks component
// const HowItWorks: React.FC = () => {
//   const steps: Step[] = [
//     {
//       icon: <UploadIcon />,
//       title: "Upload",
//       description: "Upload your email lists in .csv format",
//     },
//     {
//       icon: <VerifyIcon />,
//       title: "Verify",
//       description: "Let Verifier perform, ensuring email validity",
//     },
//     {
//       icon: <DownloadIcon />,
//       title: "Download",
//       description: "Download your clean and verified email list",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#09061A] text-white py-26">
//       <div className="max-w-4xl mx-auto px-4">
//         <h1 className="text-5xl font-medium text-center mb-2 tracking-wider">
//           How it works
//         </h1>
//         <p className="text-center mb-12 mt-4">
//           It's super easy to verify your email addresses with Verifier.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-18">
//           {steps.map((step, index) => (
//             <div key={index} className="flex flex-col items-center text-center">
//               <div className="mb-4 h-full w-full">{step.icon}</div>
//               <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
//               <p className="text-sm text-gray-300">{step.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;

import React from "react";
import Image from "next/image";

// Icons for steps with increased size
const UploadIcon = () => (
  <div className="bg-[#3B3C56] p-6 h-20 w-25  rounded-3xl inline-flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  </div>
);

const VerifyIcon = () => (
  <div className="bg-[#3B3C56] p-6 h-20 w-25 rounded-3xl inline-flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  </div>
);

const DownloadIcon = () => (
  <div className="bg-[#3B3C56] p-6 h-20 w-25 rounded-3xl inline-flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  </div>
);

// Step type definition
type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

// HowItWorks component
const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      icon: <UploadIcon />,
      title: "Upload",
      description: "Upload your email lists in .csv format",
    },
    {
      icon: <VerifyIcon />,
      title: "Verify",
      description: "Let Verifier perform, ensuring email validity",
    },
    {
      icon: <DownloadIcon />,
      title: "Download",
      description: "Download your clean and verified email list",
    },
  ];

  return (
    <section
      className="w-full bg-cover bg-bottom bg-no-repeat text-white pb-26 pt-20"
      style={{ backgroundImage: "url('/Frame 1000003145.png')" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-medium text-center mb-2 ">How it works</h1>
        <p className="text-center mb-20 mt-6">
          It's super easy to verify your email addresses with Verifier.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-8 h-15 w-15 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

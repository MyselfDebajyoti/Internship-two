// // components/FaqAccordion.jsx
// "use client";
// import React, { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";

// const FaqItem = ({ question, answer, isOpen, onClick }) => {
//   return (
//     <div
//       className="mb-4 rounded-xl overflow-hidden  bg-no-repeat"
//       style={{ backgroundImage: "url('/faq.png')" }}
//     >
//       <button
//         className="w-full py-6 px-8 flex justify-between items-center text-white text-left focus:outline-none"
//         onClick={onClick}
//       >
//         <span className="text-lg font-medium">{question}</span>
//         {isOpen ? (
//           <ChevronUp className="w-6 h-6 text-white" />
//         ) : (
//           <ChevronDown className="w-6 h-6 text-white" />
//         )}
//       </button>

//       {isOpen && (
//         <div className="py-6 px-8 text-white border-t border-[#2d2744]">
//           {typeof answer === "string" ? <p>{answer}</p> : answer}
//         </div>
//       )}
//     </div>
//   );
// };

// const FaqAccordion = () => {
//   const [openIndex, setOpenIndex] = useState(0);

//   const faqs = [
//     {
//       question:
//         "How is the Verifier different from other email verifier tools?",
//       answer: (
//         <div>
//           <p className="mb-3">
//             BrandNav Verifier stands out for several reasons:
//           </p>
//           <ul className="space-y-2">
//             <li>
//               <span className="font-medium">Accuracy:</span> Our advanced
//               algorithms ensure precise email verification.
//             </li>
//             <li>
//               <span className="font-medium">Efficiency:</span> Fast processing
//               for large email lists, saving you time.
//             </li>
//             <li>
//               <span className="font-medium">User-Friendly:</span> Easy-to-use
//               interface makes verification hassle-free.
//             </li>
//             <li>
//               <span className="font-medium">Data Security:</span> Your
//               information is handled with the utmost security.
//             </li>
//             <li>
//               <span className="font-medium">Support:</span> Responsive customer
//               support to assist you at any step.
//             </li>
//           </ul>
//           <p className="mt-4">
//             Don't just take our word for it, checkout our G2 reviews we're rated
//             4.8/5 by users.
//           </p>
//         </div>
//       ),
//     },
//     {
//       question: "What does it mean when an email address is valid?",
//       answer:
//         "A valid email address has been verified to exist on the email server, has correct syntax, and is capable of receiving messages. Our verification process checks the domain, confirms the mail server exists, and verifies the mailbox is active and accepting mail.",
//     },
//     {
//       question: "What does it mean when an email address is unknown?",
//       answer:
//         "An unknown result means our verification system couldn't definitively determine if the email exists or not. This could happen when email servers have strict security measures that block verification attempts or when the server is temporarily unavailable. We recommend treating these with caution.",
//     },
//     {
//       question: "What does it mean when an email address is invalid?",
//       answer:
//         "An invalid email address cannot receive messages for one or more reasons: it may have incorrect syntax, the domain may not exist, the mail server might be permanently unavailable, or the mailbox itself doesn't exist. We recommend removing these addresses from your mailing list to avoid bounces and improve delivery rates.",
//     },
//   ];

//   const toggleFaq = (index) => {
//     setOpenIndex(openIndex === index ? -1 : index);
//   };

//   return (
//     <div className="bg-[#0f0b22] min-h-screen py-16 px-4">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
//           Frequently asked questions
//         </h1>

//         <div>
//           {faqs.map((faq, index) => (
//             <FaqItem
//               key={index}
//               question={faq.question}
//               answer={faq.answer}
//               isOpen={openIndex === index}
//               onClick={() => toggleFaq(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FaqAccordion;

"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4 rounded-xl overflow-hidden border-[#33354B] border-2">
      <button
        className="w-full py-6 px-8 flex justify-between items-center text-white text-left focus:outline-none  bg-repeat bg-center"
        onClick={onClick}
        style={{ backgroundImage: "url('/faq.png')" }}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-white" />
        ) : (
          <ChevronDown className="w-6 h-6 text-white" />
        )}
      </button>

      {isOpen && (
        <div
          className="py-6 px-8 text-white border-t border-[#2d2744] bg-center bg-repeat w-full "
          style={{ backgroundImage: "url('/answer (3).png')" }}
        >
          {typeof answer === "string" ? <p>{answer}</p> : answer}
        </div>
      )}
    </div>
  );
};

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question:
        "How is the Verifier different from other email verifier tools?",
      answer: (
        <div>
          <p className="mb-3">
            BrandNav Verifier stands out for several reasons:
          </p>
          <ul className="space-y-2">
            <li>
              <span className="font-medium">Accuracy:</span> Our advanced
              algorithms ensure precise email verification.
            </li>
            <li>
              <span className="font-medium">Efficiency:</span> Fast processing
              for large email lists, saving you time.
            </li>
            <li>
              <span className="font-medium">User-Friendly:</span> Easy-to-use
              interface makes verification hassle-free.
            </li>
            <li>
              <span className="font-medium">Data Security:</span> Your
              information is handled with the utmost security.
            </li>
            {/* <li>
              <span className="font-medium">Support:</span> Responsive customer
              support to assist you at any step.
            </li> */}
          </ul>
          {/* <p className="mt-4">
            Don't just take our word for it, checkout our G2 reviews we're rated
            4.8/5 by users.
          </p> */}
        </div>
      ),
    },
    {
      question: "What does it mean when an email address is valid?",
      answer:
        "A valid email address has been verified to exist on the email server, has correct syntax, and is capable of receiving messages. Our verification process checks the domain, confirms the mail server exists, and verifies the mailbox is active and accepting mail.",
    },
    {
      question: "What does it mean when an email address is unknown?",
      answer:
        "An unknown result means our verification system couldn't definitively determine if the email exists or not. This could happen when email servers have strict security measures that block verification attempts or when the server is temporarily unavailable. We recommend treating these with caution.",
    },
    {
      question: "What does it mean when an email address is invalid?",
      answer:
        "An invalid email address cannot receive messages for one or more reasons: it may have incorrect syntax, the domain may not exist, the mail server might be permanently unavailable, or the mailbox itself doesn't exist. We recommend removing these addresses from your mailing list to avoid bounces and improve delivery rates.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div
      className="bg-cover bg-bottom bg-no-repeat min-h-screen py-16 px-4"
      style={{ backgroundImage: "url('/features (3).png')" }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Frequently asked questions
        </h1>

        <div>
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;

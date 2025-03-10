// pages/index.js
import { Inter } from "next/font/google";
import Head from "next/head";
import {
  Trash,
  Mail,
  CheckCircle,
  AlertTriangle,
  Cpu,
  Code,
  Globe,
  Server,
  Shield,
  Clock,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const features = [
    {
      title: "Disposable email detection",
      description:
        "Verifier detects & removes temp emails for a clean, reliable list.",
      icon: <Trash className="w-6 h-6 text-white" />,
    },
    {
      title: "Hard bounce prevention",
      description:
        "Efficiently eliminate undeliverable emails due to non-existent addresses.",
      icon: <Mail className="w-6 h-6 text-white" />,
    },
    {
      title: "Soft bounce prevention",
      description:
        "Verifier spots soft bounce issues for successful email delivery.",
      icon: <CheckCircle className="w-6 h-6 text-white" />,
    },
    {
      title: "Email verification API",
      description:
        "Integrate our email verification software to validate your data.",
      icon: <Cpu className="w-6 h-6 text-white" />,
    },
    {
      title: "Catch-All email detection",
      description:
        "Detect and remove catch-all domains to ensure your emails hit.",
      icon: <AlertTriangle className="w-6 h-6 text-white" />,
    },
    {
      title: "MX record validation",
      description:
        "Validate email authenticity with advanced MX record checks.",
      icon: <Code className="w-6 h-6 text-white" />,
    },
    {
      title: "SMTP provider identification",
      description:
        "Automatically identify email providers to enhance targeting.",
      icon: <Server className="w-6 h-6 text-white" />,
    },
    {
      title: "Email syntax validation",
      description: "Syntax check ensures only RFC-compliant emails remain.",
      icon: <Code className="w-6 h-6 text-white" />,
    },
    {
      title: "Email domain validation",
      description:
        "Confirm domain functionality with our verification process.",
      icon: <Globe className="w-6 h-6 text-white" />,
    },
    {
      title: "SMTP verification",
      description:
        "Evaluate and analyze email deliverability for valuable insights.",
      icon: <Server className="w-6 h-6 text-white" />,
    },
    {
      title: "Anti-greylisting technology",
      description:
        "Trust Verifier for accurate email verification with anti-greylisting tech.",
      icon: <Shield className="w-6 h-6 text-white" />,
    },
    {
      title: "Real-time results",
      description:
        "Track the real-time results of your email verification as we process the list.",
      icon: <Clock className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <>
      <Head>
        <title>Email Verification Service</title>
        <meta
          name="description"
          content="Rock solid email verification service"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`min-h-screen bg-cover bg-top bg-no-repeat text-white ${inter.className}`}
        style={{ backgroundImage: "url('/features (3).png')" }}
      >
        <div className="container mx-auto pl-4 pr-20 py-25">
          <div className="lg:flex gap-5">
            {/* Left side - Title and CTA */}
            <div className="lg:w-1/3 mb-12 lg:mb-0 lg:sticky lg:top-16 lg:self-start ml-35">
              <h1 className="text-md md:text-5xl font-bold mb-4">
                Rock solid <br></br> email verification
              </h1>
              <p className="text-lg mb-6">
                Clean, optimize, and <br></br> supercharge your email lists.
              </p>
              <button className="bg-gradient-to-r from-[#5027B1]  to-[#237FD7] hover:bg-none hover:bg-white hover:text-[#5029B1] text-white font-medium py-2 px-6 rounded-lg  ">
                Dive in!
              </button>
            </div>

            {/* Right side - Feature grid */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className=" bg-center  bg-no-repeat  backdrop-blur-xl rounded-2xl border-[#24223F] border-2 p-6 "
                    style={{ backgroundImage: "url('/card.png')" }}
                  >
                    <div className="bg-[#4A4766] rounded-lg w-10 h-10 flex items-center justify-center mb-8">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-indigo-200 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

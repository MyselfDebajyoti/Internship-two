// components/VerifierUsers.jsx
import React from "react";
import { Users, Briefcase, Laptop, Building, Monitor } from "lucide-react";

const VerifierUsers = () => {
  return (
    <div className="bg-[#0f0b22] text-white min-h-screen flex flex-col items-center justify-center py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Who is using Verifier?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-[#1a162f] rounded-lg p-8 flex flex-col items-center md:items-start">
          <Users className="w-10 h-10 mb-4" />
          <p className="text-xl font-medium">Sales and marketing teams</p>
        </div>

        {/* Middle Card - Slightly Different Text Layout */}
        <div className="bg-[#1a162f] rounded-lg p-8 flex flex-col items-center md:items-start">
          <Briefcase className="w-10 h-10 mb-4" />
          <div>
            <p className="text-xl font-medium">Irreplaceable tool for</p>
            <p className="text-xl font-medium">businesses</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#1a162f] rounded-lg p-8 flex flex-col items-center md:items-start">
          <Monitor className="w-10 h-10 mb-4" />
          <p className="text-xl font-medium">Recruiters</p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#1a162f] rounded-lg p-8 flex flex-col items-center md:items-start">
          <Laptop className="w-10 h-10 mb-4" />
          <p className="text-xl font-medium">Software & IT companies</p>
        </div>

        {/* Card 5 */}
        <div className="bg-[#1a162f] rounded-lg p-8 flex flex-col items-center md:items-start">
          <Building className="w-10 h-10 mb-4" />
          <p className="text-xl font-medium">Service providers</p>
        </div>

        {/* Card 6 */}
        <div className="bg-[#1a162f] rounded-lg p-8 flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-1 mb-4">
            <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center">
              <span className="text-xs">★</span>
            </div>
            <div className="w-8 h-5 border-2 border-white rounded-sm ml-1"></div>
          </div>
          <p className="text-xl font-medium">Backlinks outreach</p>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mt-16 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md text-white font-medium hover:opacity-90 transition-opacity">
        Dive in!
      </button>
    </div>
  );
};

export default VerifierUsers;

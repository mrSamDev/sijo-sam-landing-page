import React from "react";
import { Bug, Loader } from "lucide-react";
import DownloadButton from "../_components/DownloadButton";

const ComingSoonBanner = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#1a1333] to-[#0A041A] p-4">
      {/* Background Bugs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <Bug
            key={i}
            className="absolute text-white/5 w-16 h-16 transform rotate-12"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full max-w-3xl mx-auto flex flex-col items-center gap-8">
        {/* Banner Card */}
        <div className="w-full bg-gradient-to-r from-[#9333EA] to-[#2563EB] rounded-xl shadow-lg relative overflow-hidden">
          {/* Glass Effect Overlay */}
          <div className="absolute inset-0 bg-white/5"></div>

          {/* Content Container */}
          <div className="relative z-10 text-center p-8">
            {/* Enlarged Coming Soon with loading animation */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tight">Coming Soon</h2>
              <Loader className="w-8 h-8 text-white opacity-75 animate-spin" />
            </div>

            <p className="text-white/90 text-lg max-w-2xl mx-auto">Our blog is currently under development. Stay tuned for amazing content!</p>

            {/* Rewrite Counter */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sm text-white/80 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Rewrite #10 - Pure madness!
            </div>
          </div>

          {/* Corner Bugs */}
          <Bug className="absolute left-4 top-4 w-8 h-8 text-white/20 rotate-12" />
          <Bug className="absolute right-4 bottom-4 w-8 h-8 text-white/20 -rotate-12" />
        </div>

        {/* Download Button with Loading State */}
        <DownloadButton />
      </div>

      {/* Ambient Background Glow */}
      <div className="fixed top-0 left-1/4 w-1/2 h-1/2 bg-purple-600/5 rounded-full blur-[100px]"></div>
      <div className="fixed bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-600/5 rounded-full blur-[100px]"></div>

      {/* Additional subtle gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-[#1a1333]/50 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default ComingSoonBanner;

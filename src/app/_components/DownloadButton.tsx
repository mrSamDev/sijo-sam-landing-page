"use client";

import React from "react";
import { Download } from "lucide-react";

const AnimatedDownloadButton = () => {
  const handleDownload = () => {
    // Get the file URL from the public folder
    const fileUrl = "/resume.pdf"; // Assumes resume.pdf is in public folder

    // Create an anchor element
    const link = document.createElement("a");
    link.href = fileUrl;

    // Set the file name for download
    link.download = "SijoSam_Resume.pdf"; // Change this to your desired filename

    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="group relative inline-flex items-center justify-center">
      {/* Base button */}
      <div className="relative z-10 px-6 py-3 text-base font-medium text-white rounded-lg bg-[#4B5DED] flex items-center gap-2">
        <span>Download Resume</span>
        <Download className="w-5 h-5" />
      </div>

      {/* Halo effect */}
      <div
        className="absolute inset-0 transition-all duration-300 
                    before:absolute before:inset-[-2px] before:rounded-lg before:border-2 before:border-[#4B5DED]/0 before:transition-all
                    group-hover:before:scale-110 group-hover:before:border-[#4B5DED]/40 group-hover:before:blur-sm
                    after:absolute after:inset-[-4px] after:rounded-lg after:border-2 after:border-[#4B5DED]/0 after:transition-all
                    group-hover:after:scale-125 group-hover:after:border-[#4B5DED]/30 after:blur-md"
      />

      {/* Base glow */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 blur-xl bg-[#4B5DED] 
                    transition-opacity duration-300 group-hover:opacity-40"
      />
    </button>
  );
};

export default AnimatedDownloadButton;

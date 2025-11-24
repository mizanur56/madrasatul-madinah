import React from "react";

/**
 * Usage:
 * 1. Ensure Tailwind is set up in your project.
 * 2. Put the uploaded screenshot file at the path the dev told:
 *    /mnt/data/Screenshot 2025-11-24 21411.png
 *    (Your environment will convert that path to a URL.)
 * 3. Import and use <HeroBanner /> in a page.
 */

const ApplyBanner = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#F6F9FF] rounded-sm p-6 sm:p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          {/* LEFT: content */}
          <div className="flex-1 w-full">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-[#1f2937] mb-2">
              অনলাইনে দাখেলা
            </p>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#333] leading-tight mb-2">
              অনলাইন দাখেলার আবেদনপত্র
            </h1>

            <div className="text-sm sm:text-base md:text-lg text-[#0f172a] space-y-1 sm:space-y-2 mb-3 max-w-xl">
              <p>
                মাদরাসাতুল মাদীনাহ এ- সকল বিভাগের নতুন শিক্ষার্থীদের
              </p>
              <p>অনলাইন দাখেলার আবেদনপত্র</p>
            </div>

            <button
              type="button"
              className="inline-block bg-[#117a2a] hover:bg-[#0f6a24] text-white text-sm sm:text-base font-medium py-2.5 px-5 sm:py-3 sm:px-6 rounded-md shadow-md transition-colors w-full sm:w-auto"
            >
              আবেদন বন্ধ রয়েছে
            </button>
          </div>

          {/* RIGHT: illustrative image (keeps space like original) */}
          <div className="hidden md:block w-1/3"></div>
        </div>
      </div>
    </section>
  );
};

export default ApplyBanner;

import React from "react";

export default function Hero() {
  return (
    <div className="bg-[#2B464F] flex items-center justify-center px-5 md:px-20 py-10 md:py-0 md:h-[80vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-[1280px]">
        <div className="flex flex-col gap-10 items-center justify-center">
          <h1 className="text-8xl font-black">$UNO</h1>
          <p className="text-2xl text-center max-w-[500px]">
            $UNO REVERSE THE MARKET AND LET THE JEETS BE JEETS AND THE RICH GET
            RICHER.
          </p>
          <div className="flex gap-5 justify-center items-center">
            <div>
              <img src="/telegram.png" alt="image" className="w-10 md:w-auto" />
            </div>
            <div>
              <img src="/x.png" alt="image" className="w-10 md:w-auto" />
            </div>
            <div>
              <img src="/pill.png" alt="image" className="w-10 md:w-auto" />
            </div>
          </div>
        </div>
        <div>
          <img src="/image1.png" alt="image" />
        </div>
      </div>
    </div>
  );
}
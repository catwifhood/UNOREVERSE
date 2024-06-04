import React from "react";

export default function Slider() {
  return (
    <div className="overflow-hidden max-w-[100vw] bg-[#328A10]">
      <div className="py-2 md:py-5 flex gap-8 track-horizontal">
        {Array(50)
          .fill(null)
          .map((item, key) => (
            <h1 className="text-2xl md:text-4xl font-black">$UNO</h1>
          ))}
      </div>
    </div>
  );
}

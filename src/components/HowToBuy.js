import React from "react";

const StepCard = (props) => {
  const { step, content } = props;

  return (
    <div className="relative flex justify-center">
      <div className="bg-[#333] w-[80%] absolute -translate-y-1/2 py-3 rounded-xl text-center text-2xl">
        Step {step}
      </div>
      <div className="bg-white px-10 py-20 w-full rounded-xl text-black text-xl md:text-3xl">
        {content}
      </div>
    </div>
  );
};

export default function HowToBuy() {
  return (
    <div className="w-full mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-20 max-w-[1280px] py-20 mx-auto px-5 md:px-0">
        <div className="col-span-1 md:col-span-2 flex justify-center mb-10">
          <h1 className="text-4xl md:text-8xl font-black">HOW TO BUY</h1>
        </div>
        <div>
          <StepCard
            step={1}
            content={
              <ul className="space-y-2 list-disc px-10">
                <li>Download a wallet of your choice</li>
                <li>We recommend phantom wallet</li>
              </ul>
            }
          />
        </div>
        <div className="md:translate-y-[200px]">
          <StepCard
            step={2}
            content={
              <ul className="space-y-2 list-disc px-10">
                <li>Load up some SOL in your wallet</li>
                <li>You can buy some from any verified exchange</li>
              </ul>
            }
          />
        </div>
        <div className="md:translate-y-[100px]">
          <StepCard
            step={3}
            content={
              <ul className="space-y-2 list-disc px-10">
                <li>Go to Raydium</li>
                <li>Connect your wallet</li>
                <li>Paste the $UNO CA into Raydium</li>
              </ul>
            }
          />
        </div>
        <div className="md:translate-y-[300px]">
          <StepCard
            step={4}
            content={
              <ul className="space-y-2 list-disc px-10">
                <li>CONFIRM Swap OF SOL for $UNO</li>
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
}

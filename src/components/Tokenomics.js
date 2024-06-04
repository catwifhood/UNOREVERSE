import React from 'react'

export default function Tokenomics() {
  return (
    <div className='w-full mx-auto'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1280px] py-5 md:py-20 md:pt-52 mx-auto items-center px-5 md:px-0">
        <div className='col-span-1 md:col-span-2 flex justify-center mb-10'>
          <h1 className='text-4xl md:text-8xl font-black'>TOKENOMICS</h1>
        </div>
        <div>
          <img src='/gallery-3.png' alt='image' className='rounded-xl' />
        </div>
        <div className='bg-[#4C6B6E] p-10 flex flex-col gap-10 h-fit rounded-xl'>
          <div className='bg-[#333] w-full text-center text-2xl uppercase rounded-xl py-2'>LP BURNED</div>
          <div className='bg-[#333] w-full text-center text-2xl uppercase rounded-xl py-2'>0% TAX</div>
          <div className='bg-[#333] w-full text-center text-2xl uppercase rounded-xl py-2'>MINT REVOKED</div>
          <div className='bg-[#333] w-full text-center text-2xl uppercase rounded-xl py-2'>1BN Supply</div>
        </div>
      </div>
    </div>
  )
}

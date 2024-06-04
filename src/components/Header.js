import React from 'react'

export default function Header() {
  return (
    <div className='px-20 py-10 flex md:flex-row flex-col justify-between items-center bg-[#4C6B6E] gap-10 text-white'>
      <h1 className='text-2xl font-bold'>CA: 6tevznL4MszmRXZLFfTny8VSNUYWn6btQBpbhVd8pump</h1>
      <div className='flex-grow md:block hidden' />
      <a className='text-2xl font-bold underline cursor-pointer' href='https://pump.fun/6tevznL4MszmRXZLFfTny8VSNUYWn6btQBpbhVd8pump' target='_blank' rel="noreferrer">PUMP.FUN</a>
      <a className='text-2xl font-bold underline cursor-pointer' href='https://t.me/unoreversesolana' target='_blank' rel="noreferrer">TELEGRAM</a>
      <a className='text-2xl font-bold underline cursor-pointer' href='https://x.com/unoreverse_sol' target='_blank' rel="noreferrer">TWITTER</a>
    </div>
  )
}

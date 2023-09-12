import React from 'react'

function Navbar() {
  return (
    <div className='flex  justify-center burger'>
        
        <div className="nav w-[700px] border-black border bg-white text-black h-14 rounded-2xl flex items-center 
        align-middle p-4 mt-4
        ">
            <div className='flex w-full text-sm   justify-between   border-2'>
                <ul>ABOUT</ul>
                <ul>HOW TO BUY</ul>
                <ul>TOKENOMICS</ul>
                <ul>ROADMAP</ul>
                <ul>MEME GALLERY</ul>
            </div>
        </div>

    </div>
  )
}

export default Navbar
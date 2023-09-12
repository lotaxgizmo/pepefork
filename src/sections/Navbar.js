import React from 'react'
import Pepehead from '../images/Pepehead.png'
import Topbtn from '../images/topbtn.png'

function Navbar() {
  return (
    <div className='lg:flex mt-4 justify-between burger flex-row items-center align-middle px-20 hidden'>

      <img src={Pepehead} alt="" className='w-20' />

      <div className="nav w-[700px] border-black border bg-white text-black h-14 rounded-2xl flex items-center 
        align-middle p-4 
        ">
        <div className='flex w-full text-sm   justify-between    '>
          <ul>ABOUT</ul>
          <ul>HOW TO BUY</ul>
          <ul>TOKENOMICS</ul>
          <ul>ROADMAP</ul>
          <ul>MEME GALLERY</ul>
        </div>
      </div>

      <div>
        <img src={Topbtn} alt="" className='w-40' />

      </div>
    </div>
  )
}

export default Navbar
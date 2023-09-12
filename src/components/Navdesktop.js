import React from 'react'
import Pepehead from '../images/Pepehead.png'
import Topbtn from '../images/topbtn.png'
import Hamburger from '../images/Hamburger.svg'

function Navdesktop() {
    return (
        <>
            <div className='lg:flex mt-4 justify-between burger flex-row items-center align-middle px-20 hidden'>

                <a href="http://pepefork.com"  >
                    <img src={Pepehead} alt="" className='w-20' />
                </a>

                <div className="ml-10 nav w-[700px] border-black border bg-white text-black h-14 rounded-2xl flex items-center 
align-middle p-4 
">
                    <div className='flex w-full text-sm   justify-between    '>
                        <a href="#about"><ul>ABOUT</ul></a>
                        <a href="#howto"><ul>HOW TO BUY</ul></a>
                        <a href="#tokenomics"><ul>TOKENOMICS</ul></a>
                        <a href="#roadmap"><ul>ROADMAP</ul></a>
                        <a href="#"><ul>MEME GALLERY</ul></a>

                    </div>
                </div>

                <a href="#" >
                    <div>
                        <img src={Topbtn} alt="" className='w-40' />

                    </div>
                </a>
            </div>

        </>
    )
}

export default Navdesktop
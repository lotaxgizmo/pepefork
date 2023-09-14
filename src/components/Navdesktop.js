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
                        <a href="https://twitter.com/pepefork2"><ul>Twitter</ul></a>
                        <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x5e57adb59943e31e087d058b2e790219fdb634b9" target="_blank" rel="noopener noreferrer"><ul>Dextools</ul></a>

                    </div>
                </div>

                <a href="https://app.uniswap.org/#/swap?outputCurrency=0x49e5792e7af589eabe823e3fc5b3d6e0c039951a" >
                    <div>
                        <img src={Topbtn} alt="" className='w-40' />

                    </div>
                </a>
            </div>

        </>
    )
}

export default Navdesktop
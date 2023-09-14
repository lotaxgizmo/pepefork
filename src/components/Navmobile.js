import React from 'react'
import Pepehead from '../images/Pepehead.png'
import Hamburger from '../images/Hamburger.svg'
import { useState } from 'react'


function Navmobile() {


    const [isMax, setIsMax] = useState(false); // Initialize isMax state as false

    const toggleHeight = () => {
        setIsMax((prevIsMax) => !prevIsMax); // Toggle the state value between true and false
    };

    const minHeight = 'h-14 items-center justify-center ';
    const maxHeight = 'h-96 items-top justify-start bg-black';

    const showmenu = 'flex';
    const hidemenu = 'hidden';

    return (
        <>
            <div className='flex lg:hidden mt-4 justify-center burger flex-col items-center align-middle px-20   mb-10'>



                <div className={`fixed top-5 nav w-80 border-black border    bg-white  ${isMax ? maxHeight : minHeight} 
                rounded-2xl flex flex-col align-middle p-4  z-30`}>
                    
                    <div className='w-full h-14 justify-between flex align-middle items-center text-black'>
                       
                        <a href="http://pepefork.com" >
                            <img src={Pepehead} alt="" className='w-14' />
                        </a>
                        <div className='mr-5'>
                        <ul>MENU</ul>
                        </div>
                       <div onClick={toggleHeight} >
                        <img src={Hamburger} alt="" className='w-10 self-startd'/>
                       </div>
                   
                    </div>
                

                    <div className={`flex-col w-full text-4xl text-left text-black justify-between mt-5 ${isMax ? showmenu : hidemenu}`}>
                        <a className='border-b-[1px] pt-[5px] border-black' href="#about"><ul>ABOUT</ul></a>
                        <a className='border-b-[1px] pt-[5px] border-black' href="#howto"><ul>HOW TO BUY</ul></a>
                        <a className='border-b-[1px] pt-[5px] border-black' href="#tokenomics"><ul>TOKENOMICS</ul></a>
                        <a className='border-b-[1px] pt-[5px] border-black' href="#roadmap"><ul>ROADMAP</ul></a>
                        <a className='border-b-[1px] pt-[5px] border-black' href="https://twitter.com/pepefork2"><ul>Twitter</ul></a>
                        <a className='  pt-[5px] border-black' href="https://www.dextools.io/app/en/ether/pair-explorer/0x5e57adb59943e31e087d058b2e790219fdb634b9" target="_blank" rel="noopener noreferrer"><ul>Dextools</ul></a>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Navmobile
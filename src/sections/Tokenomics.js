import React from 'react'
import Tokenomicss from '../images/Tokenomics.png'
import Tokenomicsmob from '../images/Tokenomicsmob.png'
import Pepehead from '../images/Pepehead.png'
import Totalsupply from '../images/Totalsupply.png'
import Totalsupplymob from '../images/Totalsupplymob.png'
import Circulation from '../images/Circulation.png'
import Circulationmob from '../images/Circulationmob.png'
import Frogfork from '../images/Frogfork.png'
import Locked from '../images/Locked.png'
import Lockedmob from '../images/Lockedmob.png'
import Allocation from '../images/Allocation.png'
import Allocationmob from '../images/Allocationmob.png'
import Teamtok from '../images/Teamtok.png'
import Teamtokmob from '../images/Teamtokmob.png'


import Fade from 'react-reveal/Fade';

function Tokenomics() {
  return (
    <div id='tokenomics' className='p-4 flex flex-col justify-center items-center mt-20'>
      <Fade right >
        <div className="tokenomicstop">
          <img src={Tokenomicss} alt="" className='lg:flex hidden' />
          <img src={Tokenomicsmob} alt="" className='flex lg:hidden' />
        </div>
      </Fade>

      <div className="tok1 flex lg:flex-row flex-col justify-between lg:w-10/12 mt-10">
        <Fade left >
          <img src={Pepehead} alt="" className=' lg:w-96' />
        </Fade>
        <Fade right >
          <img src={Totalsupplymob} alt="" className='flex lg:hidden' />
          <img src={Totalsupply} alt="" className='lg:flex hidden lg:w-[500px] lg:h-auto object-fit-cover' />
        </Fade>
      </div>

      <Fade left >
        <img src={Circulationmob} alt="" className='flex lg:hidden mt-10' />
        <img src={Circulation} alt="" className='lg:flex hidden w-[700px] mt-10' />
      </Fade>


      <div className="tok1 flex lg:flex-row flex-col justify-between lg:w-10/12 mt-10">
        <Fade left >
          <img src={Lockedmob} alt="" className='flex lg:hidden' />
          <img src={Locked} alt="" className='lg:flex hidden lg:w-[500px] lg:h-auto object-fit-cover' />
        </Fade>
        <Fade right >
          <img src={Frogfork} alt="" className=' lg:w-96' />
        </Fade>
      </div>
      <Fade left >
        <img src={Allocationmob} alt="" className='flex lg:hidden mt-10' />
        <img src={Allocation} alt="" className='lg:flex hidden p-20' />
      </Fade>

      <Fade right >
        <img src={Teamtokmob} alt="" className='flex lg:hidden mt-10' />
        <img src={Teamtok} alt="" className='lg:flex hidden px-20' />
      </Fade>
    </div>
  )
}

export default Tokenomics
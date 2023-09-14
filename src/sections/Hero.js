import React from 'react' 
import Pepe from '../images/PEPE.svg'
import Pepemob from '../images/PEPEmob.svg'
import Forkmob from '../images/FORKmob.svg'
import Forksmob from '../images/Forksmob.svg' 
import Tgbtn from '../images/tgbtn.svg'
import Forkbtn from '../images/forkbtn.svg' 
import Leftpepe from '../images/Leftpepe.svg'
import Rightpepe from '../images/Rightpepe.svg'
import Backimg from '../images/backgroundimg.svg'

import CopyTextButton from '../components/Copy'

import Fade from 'react-reveal/Fade';

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center pt-10 relative'>
      
<img src={Backimg} alt="" className='absolute top-1 lg:w-[1000px] z-[1] blur-[2px]'/>
{/* <img src={Mobnav} alt="" className='w-80 mb-5 z-[2]'/> */}

  <Fade right >
<img src={Pepemob} alt="" className='w-80 mb-5 z-[2] lg:hidden ' />
<img src={Pepe} alt="" className='w-[1000px] mb-5 z-[2] hidden lg:flex' />
  </Fade>

  <Fade left delay={500}>
<img src={Forkmob} alt="" className='lg:w-96 w-72 z-[2]' />
  </Fade>


<div className="twopepe relative h- w-screen  z-[2]">
  <div className="pepes absolute lg:-top-60 px-3 flex justify-between w-screen">
<img src={Leftpepe} alt="" className='w-20 lg:w-96 animate-bounce' />
<img src={Rightpepe} alt="" className='w-20 lg:w-96 animate-bounce' />
  </div>
</div>


<div className="btn flex flex-col lg:flex-row items-center z-10 mt-10 justify-between lg:w-[500px]">
  
  <a href="http://t.me/pepefork2" target="_blank" rel="noopener noreferrer">
    <img src={Tgbtn} alt="" className='w-52 my-3 ' />
  </a>
  <a href="https://app.uniswap.org/#/swap?outputCurrency=0x49e5792e7af589eabe823e3fc5b3d6e0c039951a">
<img src={Forkbtn} alt="" className='w-52 my-3' />
  </a>

</div>

<CopyTextButton/>


  <div className="text px-8 text-center pt-20 z-[2] lg:w-[1000px] lg:text-3xl">
    <p className=''>
    More than just a token, PepeFork symbolizes rebirth, redemption, and community-driven strength that's simply unstoppable! <br/> <br/> 
  With the power of our team and our community, we will convert all memecoin followers to our fork army.
    </p>
  </div>
<img src={Forksmob} alt="" className=' relative my-10 w-[1000px] max-w-none z-[2]' />

    </div>
  )
}

export default Hero
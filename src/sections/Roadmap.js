import React from 'react'
import Roadmapp from '../images/Roadmap.png'
import Roadmapmob from '../images/Roadmapmob.png'
import Phase1 from '../images/Phase1.png'
import Phase2 from '../images/Phase2.png'
import Phase3 from '../images/Phase3.png'
import Phase1mob from '../images/Phase1mob.png'
import Phase2mob from '../images/Phase2mob.png'
import Phase3mob from '../images/Phase3mob.png'
import Teamtokensmob from '../images/Teamtokensmob.png'
import Teamtokens from '../images/Teamtokens.png'
import Fade from 'react-reveal/Fade';

function Roadmap() {
  return (
    <div className='p-4 flex flex-col justify-center items-center mt-20'>
      <img src={Roadmapmob} alt="" className='flex lg:hidden' />
      <img src={Roadmapp} alt="" className='lg:flex hidden' />

<div className="mob">
<Fade right >
      <img src={Phase1mob} alt="" className='flex lg:hidden py-10' />
</Fade>
<Fade left >
<img src={Phase2mob} alt="" className='flex lg:hidden py-10' />
</Fade>
<Fade right >
<img src={Phase3mob} alt="" className='flex lg:hidden py-10' />
</Fade>

</div>

<div className="desktop">
<Fade right >
      <img src={Phase1} alt="" className='lg:flex hidden w-[900px] mfy-[-80px]' />
</Fade>
<Fade left >
<img src={Phase2} alt="" className='lg:flex hidden w-[900px] mt-[-80px]' />
</Fade>
<Fade right >
<img src={Phase3} alt="" className='lg:flex hidden w-[900px] mt-[-80px]' />
</Fade>

</div>

<img src={Teamtokensmob} alt="" className='flex lg:hidden' />
<img src={Teamtokens} alt="" className='lg:flex hidden px-14' />

    </div>
  )
}

export default Roadmap
import React from 'react'
import Frogmob from '../images/frogmob.png'
import Leftfrog from '../images/leftfrog.png'
import Rightfrog from '../images/rightfrog.png'
import Buymob from '../images/buymob.png'
import Buybig from '../images/buybig.png'
import Create from '../images/create.png'
import Get from '../images/get.png'
import Goto from '../images/goto.png'
import Switch from '../images/switch.png'
import Createmob from '../images/createmob.png'
import Getmob from '../images/getmob.png'
import Gotomob from '../images/gotomob.png'
import Switchmob from '../images/switchmob.png'
import Normbtn from '../images/normbtn.svg'

import Fade from 'react-reveal/Fade';

function Howto() {
  return (
    <div id='howto' className='p-4 flex flex-col justify-center align-middle items-center'>
      <div className="topfrogs mt-5 mb-[-26px] flex justify-between w-10/12">
        <img src={Frogmob} alt="" className='flex lg:hidden'/>

        <Fade left >
        <img src={Leftfrog} alt="" className='lg:flex hidden'/>
        </Fade>
        <Fade right >
        <img src={Rightfrog} alt="" className='lg:flex hidden'/>
        </Fade> 
      </div>

      <div className="bg-white px-8 py-10 z-10 lg:w-10/12  border border-white  
      flex flex-col justify-center align-middle items-center rounded-[40px] overflow-hidden
      ">
      <img src={Buymob} alt="" className=' flex lg:hidden'/>
      <img src={Buybig} alt="" className='w-[700px] lg:flex hidden'/>
       
       
        <div className="itemmobile flex flex-col mt-10">
        <Fade left >
        <img src={Createmob} alt="" className='my-5 flex lg:hidden'/>
        </Fade>
        <Fade right >
        <img src={Getmob} alt="" className='my-5 flex lg:hidden'/>
        </Fade>
        <Fade left >
        <img src={Gotomob} alt="" className='my-5 flex lg:hidden'/>
        </Fade>
        <Fade right >
        <img src={Switchmob} alt="" className='my-5 flex lg:hidden'/>
        </Fade>

        </div>
        
       
        <div className="item flex flex-col mt-10">
        <Fade left >
        <img src={Create} alt="" className='my-5 lg:flex hidden'/>
        </Fade>
        <Fade right >
        <img src={Get} alt="" className='my-5 lg:flex hidden'/>
        </Fade>
        <Fade left >
        <img src={Goto} alt="" className='my-5 lg:flex hidden'/>
        </Fade>
        <Fade right >
        <img src={Switch} alt="" className='my-5 lg:flex hidden'/>
        </Fade>

        </div>
        <a href="https://app.uniswap.org/#/swap?outputCurrency=0x49e5792e7af589eabe823e3fc5b3d6e0c039951a">
        <img src={Normbtn} alt="" className='lg:mt-5 '/>
        </a>
        </div>



    </div>
  )
}

export default Howto
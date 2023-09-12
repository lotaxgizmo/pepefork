import React from 'react'
import Aboutimg from '../images/about.png'
import Aboutmob from '../images/aboutmob.png'
import Union from '../images/Union.svg'

function About() {
  return (
    <div className='flex flex-col items-center justify-center p-4 relative mt-10'>

      <img src={Aboutmob} alt="" className='flex lg:hidden mb-10' />

      <div className="text px-8 text-center py-10 z-[2] lg:w-[1000px] lg:text-xl border border-white 
      rounded-[40px] flex lg:hidden">
        <p className=''>



          $PEPEFORK started as a simple meme coin but has quickly turned into a potent cultural movement.
          <br />
          With future utility, such as an NFT trading card game, we aim to bring a fun and enticing environment for new holders to ride our chart to the moon.
          <br />
          $PEPEFORK started as a simple meme coin but has quickly turned into a potent cultural movement.
          <br />
          With future utility, such as an NFT trading card game, we aim to bring a fun and enticing environment for new holders to ride our chart to the moon.
        </p>
      </div>



      <div className="bigtext flex-col justify-start relative lg:text-2xl lg:flex hidden">
        <img src={Union} alt="" className='absolute'/>
        <div className="text px-8 text-left py-10 z-[2] lg:w-[500px]  bborder bborder-white rounded-2xl ">
          <p className=''>



            $PEPEFORK started as a simple meme coin but has quickly turned into a potent cultural movement.
            <br />
            <br />
            With future utility, such as an NFT trading card game, we aim to bring a fun and enticing environment for new holders to ride our chart to the moon.
          </p>
        </div>
        <div className="text px-8 text-left py-10 z-[2] lg:w-[1000px]  bborder bborder-white rounded-2xl ">
          <p className=''>



            $PEPEFORK started as a simple meme coin but has quickly turned into a potent cultural movement.
            <br />
            <br />
            With future utility, such as an NFT trading card game, we aim to bring a fun and enticing environment for new holders to ride our chart to the moon.
          </p>
        </div>

      </div>
      <img src={Aboutimg} alt="" className='lg:flex hidden mb-10 absolute w-[450px] left-[53%] top-[-43px]' />

    </div>
  )
}

export default About
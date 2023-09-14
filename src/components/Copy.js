import React, { useState } from 'react';
import copy from 'clipboard-copy';
import Camob from '../images/camob.svg'
import Ca from '../images/ca.svg'

function CopyTextButton() {
  const [textToCopy, setTextToCopy] = useState('0x49e5792E7AF589eaBE823E3fC5B3D6E0C039951a');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(textToCopy);
      setIsCopied(true);
    } catch (error) {
      console.error('Failed to copy: ', error);
    }
  };

  return (
    <div className='z-40 flex flex-col' onClick={handleCopyClick}>
        
<img src={Camob} alt="" className='w-80 mt-5 z-[2] lg:hidden transition-all  active:w-72' />
<img src={Ca} alt="" className='w-[700px] mt-5 z-[2] lg:flex hidden transition-all hover:w-[650px] active:w-[600px] ' />
{/* 
      <input
        type="text"
        value={textToCopy}
        onChange={(e) => setTextToCopy(e.target.value)}
      /> */}
      <button >
        {isCopied ? 'Copied!' : 'Click to Copy'}
      </button>
    </div>
  );
}

export default CopyTextButton;

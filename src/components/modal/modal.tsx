import React, { useEffect, useRef } from 'react';
import { Props } from './modal.types';
import './modal.scss';

const Icon: React.FC<Props> = ({ children }) => {

  const modalRef = useRef(null);
  useEffect(() => {
    setTimeout(()=>{
      modalRef.current.className = "modal visible";
    },0)
    document.body.classList.add("fixed");
    return ()=>document.body.classList.remove("fixed");
  },[]);

  return (
    <div ref={modalRef} className='modal'>
      {children}
    </div>
  );
};

export default Icon;

import React from 'react'
import './notfound.scss'
const InternalServerError: React.FC = () => {

  const reload=()=>{window.location.href= window.location.pathname};

  return (
    <>
      <div className='msg'>
        <div>Something went wrong. Please try again !</div>
        <div className='reload'>
          <button className='btn' onClick={reload}>Reload</button>
        </div>
      </div>
    </>
  )
}

export default InternalServerError;
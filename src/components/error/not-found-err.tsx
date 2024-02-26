import React from 'react'
import './notfound.scss'
const NotfoundError: React.FC = () => {

  const reload = () => {
    window.history.back();
  };
  
  return (
    <>
      <div className='msg'>
        <div>Something went wrong. <br/>Please try again !</div>
        <div className='reload'>
          <button className='btn' onClick={reload}>Back</button>
        </div>
      </div>
    </>
  )
}

export default NotfoundError;

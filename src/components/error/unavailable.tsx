import React from 'react'
import './notfound.scss'
import { ASSETS_URL } from '../../constants'

const Unavailable:React.FC = () => {
  return (
    <div className='NOTFOUND'>
        <div className='errImg'>
            <img src={`/${ASSETS_URL}/assets-test/404.png`} alt="404" />
        </div>
        <h3>Thanks you for checking, this page is currently unavailable.</h3>
    </div>
  )
}

export default Unavailable
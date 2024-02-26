import React from 'react'
import './profile.scss'
import userData  from '../../../public/static-data/profileInfo.json'


const Profile:React.FC = () => {
    
  return (
    <div>
        <section className='image-holder'>
            <div className='userInfo'>
                <div className="corner" id='corner-1'></div>
                <div className="corner" id='corner-2'></div>
                <div className="corner" id='corner-3'></div>
                <div className="corner" id='corner-4'></div>
                <div className="corner" id='corner-top-1'></div>
                <div className="corner" id='corner-top-2'></div>
                <div className="corner" id='corner-top-3'></div>
                <div className="corner" id='corner-top-4'></div>
                <div className="cover">
                    <h4>Hey there! My name is</h4>
                    <h2>{userData.userInfo.name}</h2>
                    <h4>or you can call me</h4>
                    <h2>{userData.userInfo.nickName}</h2>
                    <h5>{userData.userInfo.sortAbout}{userData.userInfo.workTitle}{userData.userInfo.company}</h5>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Profile
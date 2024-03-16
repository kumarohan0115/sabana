import { Profile, SideNav, Projects, ContactUs } from 'components'
import React from 'react'


const Portfolio:React.FC = () => {
  return (
    <div>
        <Profile/>
        <SideNav/>
        <Projects/>
        <ContactUs />
    </div>
  )
}

export default Portfolio
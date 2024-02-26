import { Profile, SideNav } from 'components'
import Content from 'components/home-content/content'
import React from 'react'
import content from '../components/home-content/content.json'

const Portfolio:React.FC = () => {
  return (
    <div>
        <Profile/>
        <SideNav/>
        {
          content.map((item, index) => {
            return <Content key={index} title={item.title} description={item.description} />
          })
        }
    </div>
  )
}

export default Portfolio
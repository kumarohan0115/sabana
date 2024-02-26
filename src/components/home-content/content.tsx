import React from 'react'
import './content.scss'
import Icon from 'components/icon/icon'

const Content = (ContentProps) => {
  return (
    <div className='content-wrapper'>
        <div className="title-holder">{ContentProps.title}<span className='websiteLink'><Icon name="link"/></span></div>
        <div className="about-holder">
            <img src={ContentProps.thumbnail} alt="" />
            {ContentProps.description}
        </div>
    </div>
  )
}

export default Content
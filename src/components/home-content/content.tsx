import React from 'react'
import './content.scss'
import Icon from 'components/icon/icon'

const Content = (ContentProps) => {
  return (
    <div className='content-wrapper'>
      <div className="thumbnail">
        <img src={ContentProps.thumbnail} alt="image" />
      </div>
      <div className="about-holder">
        <h3 className="title-holder">{ContentProps.title}<span className='websiteLink'>
          <a href="https://google.com"><Icon name="link" /></a>
        </span>
        </h3>
        {ContentProps.description}
      </div>

      {/* <div className="animation"></div> */}
    </div>
  )
}

export default Content
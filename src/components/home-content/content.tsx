import React from 'react'
import './content.scss'
import Icon from 'components/icon/icon'

const Content = (Content) => {
  return (
    <div className='content-wrapper'>
      <div className="thumbnail">
        <img src={Content.thumbnail} alt="image" />
      </div>
      <div className="about-holder">
        <h3 className="title-holder">{Content.title}<span className='websiteLink'>
          <a href="https://google.com"><Icon name="link" /></a>
        </span>
        </h3>
        {Content.description}
        <div className="techStack">
          <h4>Technology Used:</h4>
          <ul className="stackList">
            {Content.technology.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Content

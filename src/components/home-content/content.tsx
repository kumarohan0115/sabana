import React from 'react'
import './content.scss'
import Icon from 'components/icon/icon'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Content = (Content) => {
  return (
    <div className='content-wrapper'>
      <div className="thumbnail">
        <Carousel autoPlay infiniteLoop>
          {
            Content.thumbnail.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item} alt="image" />
                </div>
              )
            })
          }
        </Carousel>
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

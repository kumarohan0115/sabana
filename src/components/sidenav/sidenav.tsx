import React, { useState, useEffect } from 'react'
import './sideNav.scss'
import Icon from 'components/icon/icon'
import sidenavContent from './sidenav.json'
import { SideNavContent } from 'utils/types/sidenav.type'
sidenavContent as SideNavContent;


const SideNav = () => {
    const [itemVisible, setItemVisible] = useState(false)
    const [ctaHeight, SetCtaHeight] = useState(350)

    const handleScroll = () => {
        if (window.scrollY < 350) {
            SetCtaHeight(window.scrollY)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <div className="sideNav-Wrapper" style={{ width: `${250 - ctaHeight < 250 ? 250 - ctaHeight : 250}px` }}>
            <div className='logo'>
                <span>
                    <img src={sidenavContent.logo} alt="logo" />
                </span>
            </div>
            <div className='cta'>
                <span className='hamburger-container' 
                    style={{ height: `${350 - ctaHeight}px` }} 
                    onClick={() => { setItemVisible(!itemVisible);  }}
                >
                    <Icon name={sidenavContent.iconName} customClass='large white-icon-color' />
                </span>
                {
                    itemVisible &&
                    <ul className={itemVisible ? "ctaVisible" : null}>
                        {sidenavContent.content.map((item, index) => (
                            <li key={index}><a href={item}>{item}</a></li>
                        ))
                        }
                    </ul>
                }
            </div>
            <div className="socialMedia">
                <ul>
                    {
                        sidenavContent.socialMedia?.map((item, index) => (
                            <li key={index}><a href={item.url}><Icon name={item.iconName} customClass='white-icon' /></a></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default SideNav
import React from 'react'
import './sideNav.scss'
import Icon from 'components/icon/icon'
import sidenavContent from './sidenav.json'

const SideNav = () => {
    const [itemVisible, setItemVisible] = React.useState(false)

    return (
        <div className='sideNav-Wrapper'>
            <div className='logo'>
                <span>
                    <img src={sidenavContent.logo} alt="logo" />
                </span>
            </div>
            <div className='cta'>
                <span className='hamburger-container' onClick={()=>{setItemVisible(!itemVisible)}}>
                    <Icon name={sidenavContent.iconName} customClass='large white-icon-color' />
                </span>
                {
                    itemVisible &&
                    <ul className={itemVisible? "ctaVisible": null}>
                        {sidenavContent.content.map((item, index) => (
                            <li key={index}><a href={item}>{item}</a></li>
                        ))
                        }
                    </ul>
                }
            </div>
        </div>
    )
}

export default SideNav
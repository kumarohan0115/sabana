import React from 'react'
import './sideNav.scss'
import Icon from 'components/icon/icon'
import sidenavContent from './sidenav.json'

const SideNav = () => {
    const [itemVisible, setItemVisible] = React.useState(false)
    const [scroll, setScroll] = React.useState(false)
    const [ctaHeight, SetCtaHeight] = React.useState(350)

    const handleScroll=()=>{
        if(window.scrollY < 350 ){
            console.log(window.scrollY)
            setScroll(true)
            SetCtaHeight(window.scrollY)
        }
      }

    React.useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
        return ()=> window.removeEventListener('scroll', handleScroll)
    },[])
    
    return (
        <div className={`sideNav-Wrapper ${scroll? "widthOnScroll" :null}`}>
            <div className='logo'>
                <span>
                    <img src={sidenavContent.logo} alt="logo" />
                </span>
            </div>
            <div className='cta'>
                <span className='hamburger-container' style={{height : `${ctaHeight}px`}} onClick={()=>{setItemVisible(!itemVisible)}}>
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
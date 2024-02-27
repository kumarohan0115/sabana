import { Content } from 'components'
import React from 'react'
import content from '../home-content/content.json'

const Projects = () => {
    return (
        <div>
            {
                content.map((item, index) => {
                    return <Content key={index} title={item.title} thumbnail={item.thumbnail} description={item.description} />
                })
            }
        </div>
    )
}

export default Projects
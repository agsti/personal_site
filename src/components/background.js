import React from 'react';
import {TechIcons} from './svg';

import '../css/base.scss';


const getRandomValue = (max) => Math.floor(Math.random() * max)

const getRandomIcon = () => TechIcons[getRandomValue(TechIcons.length)];

export default ({color, n_elements, size, opacity}) =>{





    const svgs = [];
    for (let index = 0; index < n_elements; index++) {
        const y = getRandomValue(100);
        const x = getRandomValue(100);
        svgs.push(<div
            style={{
            position:"absolute",
            top: `calc(${y}% - ${size}px)`,
            left: `calc(${x}% - ${size}px)`,
            width: size,
            height:size,
            opacity: opacity,
            }}>
            {getRandomIcon()(color)}
        </div>)
    }

  

    return <div className="background">{svgs}</div>
}
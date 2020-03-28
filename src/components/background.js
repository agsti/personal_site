import React, {useState, useEffect} from 'react';
import { TechIcons } from './svg';
import posed, { PoseGroup } from 'react-pose';

import '../css/base.scss';


const getRandomValue = (max) => Math.floor(Math.random() * max)

const getRandomIcon = () => TechIcons[getRandomValue(TechIcons.length)];

export default ({ color, n_elements, size, opacity }) => {
    


    const svgs = [];
    for (let index = 0; index < n_elements; index++) {
        const y = getRandomValue(100);
        const x = getRandomValue(100);

        const PosedEl = posed.div({
            to: { 
                top: `calc(${y}% - ${size}px)`, 
                left: `calc(${x}% - ${size}px)`,
                transition: { duration: 20000 }
            },
            from: { top: `50%`, left: '50%', transition: { duration: 20000 } }
        });
        svgs.push(<PosedEl
            initialPose="from" pose="to"
            key={`svg-${index}`}
            style={{
                position: "absolute",
                width: size,
                height: size,
                opacity: opacity,
            }}>
            {getRandomIcon()(color)}
        </PosedEl>)
    }



    return <div className="background">{svgs}</div>
}
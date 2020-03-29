import React, {useState, useEffect} from 'react';
import { TechIcons } from './svg';
import posed from 'react-pose';

import '../css/base.scss';


const getRandomValue = (max) => Math.floor(Math.random() * max)

const getRandomIcon = () => TechIcons[getRandomValue(TechIcons.length)];

export default ({ color, n_elements, size, opacity, animationDuration=5000 }) => {
    


    const svgs = [];
    for (let index = 0; index < n_elements; index++) {
        const y = getRandomValue(100);
        const x = getRandomValue(100);


        svgs.push(<div
            initialPose="from" pose="to"
            key={`svg-${index}`}
            style={{
                position: "absolute",
                width: size,
                height: size,
                opacity: opacity,
                top: `calc(${y}% - ${size}px)`, 
                left: `calc(${x}% - ${size}px)`,
            }}>
            {getRandomIcon()(color)}
        </div>)
    }

    const PosedEl = posed.div({
        from: { 
            left:'50%', 
            top:'50%', 
            width: `0%`, 
            height: '0%', 
            transition: { duration: animationDuration } },
        to: { 
            left:'0', 
            top:'0', 
            width: `100%`, 
            height: `100%`,
            transition: { duration: animationDuration }
        },
    });

    return <PosedEl initialPose="from" pose="to" className="background">{svgs}</PosedEl>
}
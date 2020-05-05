import React from 'react';
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import '../css/layout.scss'
import '../css/header.scss'

export default ({ title, className, links_to }) => {
    return <header className="h-container">
        <div className="back">
        <Link to={links_to}>
            <FontAwesomeIcon className="arrow" icon={faArrowLeft} /> 
            <span>
                Back
            </span>
        </Link>
        </div>
        <h1 className="h-title">
            <Link to={"/"}>
            {title}
            </Link>
        </h1>
        <div className="filler"></div>
    </header>;
}

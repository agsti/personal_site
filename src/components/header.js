import React from 'react';
import { Link } from 'gatsby';

export default ({ title, links_to, className }) => {
    return <header className={className}>
        <h1>
            <Link to={links_to} >
                {title}
            </Link>
        </h1>
    </header>;
}
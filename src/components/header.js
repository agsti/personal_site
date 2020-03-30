import React from 'react';
import { Link } from 'gatsby';

export default ({ title, links_to }) => {
    return <header>
        <h1>
            <Link to={links_to} >
                {title}
            </Link>
        </h1>
    </header>;
}
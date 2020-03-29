import React from 'react';
import { Link } from 'gatsby';

export default ({ title }) => {
    return <header>
        <h1>
            <Link to={`blog`} >
                {title}
            </Link>
        </h1>
    </header>;
}
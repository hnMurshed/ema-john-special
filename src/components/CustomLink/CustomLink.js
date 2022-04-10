import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ to, children }) => {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                to={to}
                style={{color: match && '#FF9900'}}
            >{children}</Link>
        </div>
    );
};

export default CustomLink;
import React from 'react';
import {Link} from 'react-router-dom';

export default ({children, color='black', ...rest}) => {
    return (
        <Link style={{textDecoration: 'none', color}} {...rest} >
            {children}
        </Link>
    )
}
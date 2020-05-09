import React from 'react';
import NavBar from '../NavBar';
import Contact from '../Contact';

const styles = {
    navGap: {
        height: '80px'
    }
}

export default ({children}) => {
    return (
        <div>
            <NavBar />
            <div style={styles.navGap} />
            {children}
            <Contact />
        </div>
    )
}
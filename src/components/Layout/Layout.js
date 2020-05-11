import React from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';

const styles = {
    gap: {
        height: '80px',
    },
    content: {
        margin: '0 10px'
    }
}

export default ({children}) => {
    return (
        <div>
            <NavBar />
            <div style={styles.gap} />
            <div style={styles.content}>
                {children}
                <Footer />
            </div>

        </div>
    )
}
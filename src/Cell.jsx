import React from 'react';
import styles from './stylesheet.module.css'; 

function Cell({ val, handleMove }) {
    return (
        <button className={styles.cell} onClick={handleMove}>
            { val }
        </button>
    );
}

export default Cell;
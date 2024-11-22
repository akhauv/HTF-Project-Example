import React, { useEffect, useState } from 'react';
import styles from './stylesheet.module.css'; 

function Leaderboard({ oWin, xWin, winner }) {
    const [winText, setWinText] = useState(""); 

    useEffect(() => {
        if (winner == null) {
            setWinText("");
        }
        else if (winner === 'T') {
            setWinText("Tie");
        }
        else if (winner === 'X') {
            setWinText("X Won!");
        }
        else {
            setWinText("O Win!");
        }
    }, [winner]);

    // winner: null if no message, or T if tie
    return (
        <div>
            {/* Leaderboard */}
            <div className={styles.leaderboard}>
                <span className={styles.X}>Player X: </span>
                <span className={styles.X}>{ xWin }</span>

                <span className={styles.O}>Player O: </span>
                <span className={styles.O}>{ oWin }</span>
            </div>

            {/* Popup Modal */}
            { winner != null &&
                <h1 className={styles.message}>{ winText }</h1>
            }
        </div>
    );
}

export default Leaderboard;
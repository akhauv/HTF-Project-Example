import React, { useEffect, useState } from 'react';
import styles from './stylesheet.module.css'; 
import Leaderboard from './Leaderboard';
import Cell from './Cell';

function Board() {
    // custom hook
    const moveNumState = (initialValue) => {
        // Create a state variable and a function to update it
        const [moveNum, setMoveNum] = useState(initialValue);
        
        // Effect that logs the state value when it changes
        useEffect(() => {
            console.log("move number:", moveNum);
        }, [moveNum]); // Dependency array to trigger effect when 'state' changes
        
        // Return the state and the function to update it
        return [moveNum, setMoveNum];
    };      
    
    // // array of X's and O's
    const [gameState, setGameState] = useState(Array(9).fill(null));
    const [moveNum, setMoveNum] = moveNumState(0);
    const [playable, setPlayable] = useState(true);
    const [winner, setWinner] = useState(null); 
    const [oWin, setOWin] = useState(0);
    const [xWin, setXWin] = useState(0);

    // this runs on mount
    useEffect(() => {
        resetBoard();
    }, []);

    function resetBoard() {
        setWinner(null); 

        // board has alread ybeen reset, so reset leaderboard 
        if (moveNum === 0) {
            setXWin(0);
            setOWin(0);
        }

        // reset board 
        setGameState(Array(9).fill(null)); 
        setMoveNum(0);
        setPlayable(true);
    }

    function handleMove(ind) {
        if (!playable) return;
        if (gameState[ind] !== null) return;

        var stateCpy = gameState.slice();
        stateCpy[ind] = moveNum % 2 === 0 ? 'X' : 'O';
        setGameState(stateCpy);
        setMoveNum(moveNum + 1);
    }

    useEffect(() => {
        // check for actual win pattern
        const winPatterns = [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Top-left to bottom-right diagonal
            [2, 4, 6]  // Top-right to bottom-left diagonal
        ];

        for (const pattern of winPatterns) {
            // check for win
            if(gameState[pattern[0]] && gameState[pattern[0]] === gameState[pattern[1]] && gameState[pattern[0]] === gameState[pattern[2]]) {
                // disaple gameplay 
                setPlayable(false);

                const w = gameState[pattern[0]]
                setWinner(w); 
                // display winner message and update gameplay
                if (w == 'X') {
                    setXWin(xWin + 1); 
                }
                else setOWin(oWin + 1); 
                return;
            }
        }

        // check if game has ended 
        if (moveNum >= 9) {
            setWinner('T'); 
            setPlayable(false);
            return;
        }
    }, [gameState]);

    return (
        <div>
            <button className={styles.reset} onClick={() => resetBoard()}>Reset</button>

            <div className={styles.board}>
                <Cell val={gameState[0]} handleMove={() => handleMove(0)} />
                <Cell val={gameState[1]} handleMove={() => handleMove(1)} />
                <Cell val={gameState[2]} handleMove={() => handleMove(2)} />
                <Cell val={gameState[3]} handleMove={() => handleMove(3)} />
                <Cell val={gameState[4]} handleMove={() => handleMove(4)} />
                <Cell val={gameState[5]} handleMove={() => handleMove(5)} />
                <Cell val={gameState[6]} handleMove={() => handleMove(6)} />
                <Cell val={gameState[7]} handleMove={() => handleMove(7)} />
                <Cell val={gameState[8]} handleMove={() => handleMove(8)} />
            </div>
            
            <Leaderboard oWin={oWin} xWin={xWin} winner={winner}/>
        </div>
    );
}

export default Board;
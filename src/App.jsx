import { useState } from 'react';
import Board from './Board';
import styles from './stylesheet.module.css'; 

function App() {
  return (
    <div className={styles.body }>
      <Board />
    </div>
  );
}

export default App;
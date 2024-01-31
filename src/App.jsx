
import { useState } from 'react';
import styles from './App.module.css'
import ButttonsContainer from './Components/ButtonsContainer';
import Display from './Components/Display'

function App() {
  const [calVal, setCalVal] = useState([]);
  const onButtonClick = (buttontext) => {
    if (buttontext === 'C') {
      setCalVal("");
    }
    else if (buttontext === '=') {
      const result = eval(calVal);
      setCalVal(result)
    }
    else {
      const newDisplayValue = calVal + buttontext
      setCalVal(newDisplayValue)
    }
  }

  return (

    <div className={styles.calculator}>

      <Display displayValue={calVal} />
      <ButttonsContainer onButtonClick={onButtonClick} />
    </div>


  );
}

export default App

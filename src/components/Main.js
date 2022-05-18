import React from 'react';
import SelectInput from './SelectInput.js';
import PlayButton from './PlayButton.js';

function Main() {
    const operations = ['+', '-', 'x', '/'];
    const numbers = [];
    for (let number=2; number <= 100; number++) {
        numbers.push(number);
      }
    return(
        <>
            <h1>Mathificent!</h1>
            <SelectInput label="Operation" id="operation"
            values={operations}/>
            <SelectInput label="Maximum Number" id="max-number"
            values={numbers}/>
            <PlayButton/>
        </>
    )
}

export default Main;
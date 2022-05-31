import React from 'react';
import SelectInput from './SelectInput.js';
import PlayButton from './PlayButton.js';
import './Main.css';

function Main(props) {
    const operations = ['+', '-', 'x', '/'];
    const numbers = [];
    for (let number=2; number <= 100; number++) {
        numbers.push(number);
      }
    return(
        <>
            <h1>Mathificent!</h1>
            <div className="row mx-1 my-3">
                <SelectInput label="Operation" id="operation" currentValue={props.operation} setCurrentValue={props.setOperation} values={operations}/>
            </div>
            <div className="row mx-1 my-3">
                <SelectInput label="Maximum Number" id="max-number" currentValue={props.maxNumber} setCurrentValue={props.setMaxNumber} values={numbers}/>
            </div>
            <div>
                <PlayButton/>
            </div>
        </>
    )
}

export default Main;
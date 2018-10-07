import React, { Fragment } from 'react';
import CalculationContainer from './CalculationContainer';
import CalculationDisplay from './CalculationDisplay';
import ResultDisplay from './ResultDisplay';
import Button from './Button';

const ButtonArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '/', '*'];

const Calculator = ({result, calculation, append, clear}) => (
  <Fragment>
    <CalculationDisplay>{calculation}</CalculationDisplay>
    <ResultDisplay>{result}</ResultDisplay>
    {
      ButtonArray.map(value => (
        <Button key={`key-${value}`} onClick={() => append(String(value))}>{value}</Button>
      ))
    }
    <Button onClick={clear}>Clear</Button>
  </Fragment>
);

export default CalculationContainer(Calculator);
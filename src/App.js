import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 480px;
    width: 100%;
    height: 100%;
    background: #000000;
    color: #ffffff;

    @media(min-width: 480px) {
        max-width: 414px;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 8px;
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify || 'center'};
    width: ${props => props.large ? '168px' : '80px'};
    height: 80px;
    border-radius: ${props => props.large ? '40px' : '50%'};
    background: ${props => props.light ? '#666666' : '#333333'};
    padding-left: ${props => props.large ? '32px' : '0'};
    margin-left: 8px;
    cursor: pointer;
    font-size: 24px;

    &:hover {
        background: ${props => props.light ? '#777777' : '#444444'}
    }

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        color: ${props => props.active ? '#FF9800' : '#ffffff'};
        background: ${props => props.active ? '#ffffff' : '#FF9800'};

        &:hover {
            background: ${props => props.active ? '#ffffff' : '#FFA726'};
        }
    }
`;

const Board = styled.div`
    width: 344px;
    font-size: 64px;
    padding: 8px 0;
    text-align: right;
`;

const App = () => {
    const [displayNumber, setDisplayNumber] = useState(0);
    const [previousNumber, setPreviousNumber] = useState(0);
    const [currentNumber, setCurrentNumber] = useState(0);
    const [operator, setOperator] = useState('');
    const [operatorActive, setOperatorActive] = useState(false);

    const numberWithComma = number => {
        return number.toLocaleString();
    };

    const handleNumberInput = event => {
        const buttonValue = event.target.innerText;
        const numberInput = currentNumber + buttonValue || 0 + buttonValue;

        // Cancel operator highlight
        setOperatorActive(false);

        // Maximum digits is 8;
        if (numberInput.replace('.', '').length > 8) {
            return;
        }

        // If has decimal point
        if (currentNumber.toString().match(/\./)) {
            setDisplayNumber(parseFloat(numberInput));
            setCurrentNumber(parseFloat(numberInput));

            return;
        }

        // Display the enterd number
        setDisplayNumber(parseInt(numberInput));
        setCurrentNumber(parseInt(numberInput));
    };

    const handleOperatorInput = event => {
        const operatorInput = event.target.innerText;

        setCurrentNumber(0);
        setOperatorActive(true);

        if (displayNumber.toString().length > 8) {
            setDisplayNumber('Error');
            setCurrentNumber(0);
            setPreviousNumber(0);
            setOperator('');
            setOperatorActive(false);
            return;
        }

        // If is first operator
        if (!operator) {
            setPreviousNumber(currentNumber);
            setOperator(operatorInput);
            return;
        }

        // Not first operator, calculate the previousNumber and display it
        switch (operator) {
            case '+':
                setPreviousNumber(previousNumber + currentNumber);
                setDisplayNumber(previousNumber + currentNumber);
                break;
            case '-':
                setPreviousNumber(previousNumber - currentNumber);
                setDisplayNumber(previousNumber - currentNumber);
                break;
            case '×':
                setPreviousNumber(previousNumber * currentNumber);
                setDisplayNumber(previousNumber * currentNumber);
                break;
            case '÷':
                setPreviousNumber(previousNumber / currentNumber);
                setDisplayNumber(previousNumber / currentNumber);
                break;
            case '=':
                setPreviousNumber(currentNumber);
                setDisplayNumber(currentNumber);
                break;
            default:
                break;
        }

        setOperator(operatorInput);
    };

    const clearOrAllClear = () => {
        // If there has currentNumber or operator, clear it
        if (currentNumber || operator) {
            return 'C';
        }

        // If not, clear all numbers and operator
        return 'AC';
    };

    const handleClear = () => {
        // Clear currentNumber or operator
        if (clearOrAllClear() === 'C') {
            if (previousNumber && displayNumber) {
                setPreviousNumber(0);
                setDisplayNumber(0);
                setOperator('');
                return;
            }

            if (currentNumber) {
                setCurrentNumber(0);
                setDisplayNumber(0);
                return;
            }

            if (operator) {
                setOperator('');
                setDisplayNumber(previousNumber);
                return;
            }
        }

        // All Clear
        if (clearOrAllClear() === 'AC') {
            setDisplayNumber(0);
            setCurrentNumber(0);
            setPreviousNumber(0);
            setOperator('');
            setOperatorActive(false);
        }
    };

    const positiveOrNegative = () => {
        // If there is no currentNumber, display the previousNumber
        if (!currentNumber) {
            setPreviousNumber(previousNumber * -1);
            setDisplayNumber(previousNumber * -1);
            return;
        }

        setCurrentNumber(currentNumber * -1);
        setDisplayNumber(currentNumber * -1);
    };

    const calculatePercentage = () => {
        if (!currentNumber) {
            setPreviousNumber(previousNumber / 100);
            setDisplayNumber(previousNumber / 100);
            return;
        }

        setCurrentNumber(currentNumber / 100);
        setDisplayNumber(currentNumber / 100);
    };

    const addDecimalPoint = () => {
        if (currentNumber.toString().match(/\./)) {
            return;
        }

        setCurrentNumber(currentNumber + '.');
        setDisplayNumber(currentNumber + '.');
    };

    return (
        <Container>
            <Board>{numberWithComma(displayNumber)}</Board>
            <FlexContainer>
                <Button light onClick={handleClear}>{clearOrAllClear()}</Button>
                <Button light onClick={positiveOrNegative}>+/-</Button>
                <Button light onClick={calculatePercentage}>%</Button>
                <Button onClick={handleOperatorInput} active={operatorActive && operator === '÷'}>÷</Button>
            </FlexContainer>
            <FlexContainer>
                <Button onClick={handleNumberInput}>7</Button>
                <Button onClick={handleNumberInput}>8</Button>
                <Button onClick={handleNumberInput}>9</Button>
                <Button onClick={handleOperatorInput} active={operatorActive && operator === '×'}>×</Button>
            </FlexContainer>
            <FlexContainer>
                <Button onClick={handleNumberInput}>4</Button>
                <Button onClick={handleNumberInput}>5</Button>
                <Button onClick={handleNumberInput}>6</Button>
                <Button onClick={handleOperatorInput} active={operatorActive && operator === '-'}>-</Button>
            </FlexContainer>
            <FlexContainer>
                <Button onClick={handleNumberInput}>1</Button>
                <Button onClick={handleNumberInput}>2</Button>
                <Button onClick={handleNumberInput}>3</Button>
                <Button onClick={handleOperatorInput} active={operatorActive && operator === '+'}>+</Button>
            </FlexContainer>
            <FlexContainer>
                <Button large justify="flex-start" onClick={handleNumberInput}>0</Button>
                <Button onClick={addDecimalPoint}>.</Button>
                <Button onClick={handleOperatorInput}>=</Button>
            </FlexContainer>
        </Container>
    );
};

export default App;
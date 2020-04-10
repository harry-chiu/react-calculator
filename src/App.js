import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 768px;
    width: 100%;
    height: 100%;
    background: #000000;
    color: #ffffff;
`;

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
`;

const Button = styled.div`
    flex-grow: 1;
    height: 80px;
`;

const Board = styled.div`
    font-size: 56px;
    padding: 8px 0;
`;

const App = () => {
    return (
        <Container>
            <Board>0</Board>
            <FlexContainer>
                <Button>AC</Button>
                <Button>+/-</Button>
                <Button>%</Button>
                <Button>÷</Button>
            </FlexContainer>
            <FlexContainer>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button>×</Button>
            </FlexContainer>
            <FlexContainer>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button>-</Button>
            </FlexContainer>
            <FlexContainer>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>+</Button>
            </FlexContainer>
            <FlexContainer>
                <Button>0</Button>
                <Button>.</Button>
                <Button>=</Button>
            </FlexContainer>
        </Container>
    );
};

export default App;
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 20px;
   
    color: palevioletred;
`;
const Section = styled.section`
    padding: 40px;
    background: papayawhip;
   
    font-size: 20px;
`;

const Button = styled.button`
    padding: 8px 12px;
    height: 40px;
    color: ${props => props.primary ? 'white' : 'blue'};
    background: ${props => props.primary ? 'blue' : 'white'} ;
    border-radius: 4px;
    margin-right: 10px;
    
`;

const GreenButton = styled(Button)`
    background: green;
    border-color: green;
`;

function App() {
  return (
    <>
     { /*<h1 className="heading-red">This is My First React App</h1>
      <p >This is my app description</p>*/}
      <Title>This is title H1</Title>
      <Section><strong>This is section </strong></Section><br></br>
      <Button>Normal</Button>
      <Button primary>Primary Button</Button>
      <GreenButton primary>Green Button</GreenButton>
    </>

  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 60px;
    color: palevioletred;
    font-family: Courier;
`;

const TitleH2 = styled(Title)`
    font-size: 50px;
    color: blue;
    font-family: Sans serif;
`;

const TitleH3 = styled(Title)`
    font-size: 40px;
    color: green;
    font-family: Times New Roman;
`;

const TitleH4 = styled(Title)`
    font-size: 30px;
    color: orange;
    font-family: Garamont;
`;

const TitleH5 = styled(Title)`
    font-size: 20px;
    color: violetblue;
    font-family: Lucia;
`;

const TitleH6 = styled(Title)`
    font-size: 10px;
    color: red;
    font-family: Calibri;
`;

const Link =styled.a `
  a:link {
  color: #FF0000;
  a:visited {
  color: #00FF00;
  a:hover {
  color: #FF00FF;
  a:active {
  color: #0000FF;
  }
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
      <Title><Link href="#H1">This is title H1</Link></Title>
      <TitleH2><Link href="#H2">This is title H2</Link></TitleH2>
      <TitleH3><Link href="#H3">This is title H3</Link></TitleH3>
      <TitleH4><Link href="#H4">This is title H4</Link></TitleH4>
      <TitleH5><Link href="#H5">This is title H5</Link></TitleH5>
      <TitleH6><Link href="#H6">This is title H6</Link></TitleH6>

      <Section><strong>This is section </strong></Section><br></br>
      <Button>Normal</Button>
      <Button primary>Primary Button</Button>
      <GreenButton primary>Green Button</GreenButton>
    </>
    

  );
}

export default App;

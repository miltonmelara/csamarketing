import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Header from './Components/header/header';
import Button from './Components/Button/Button'
import Body from './Components/Body/Body';
import ApplicationForm from './Components/Form/Form';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header />
      <Button />
      <Body />
      <ApplicationForm />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/home'
import Nav from './Components/Nav/Nav'
import BlogsContainer from './Components/Blog/blogPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/blog' Component={BlogsContainer}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

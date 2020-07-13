import React from 'react';
import Projects from './containers/Projects.js'
import FractalDesign from './containers/FractalDesign.js';
import About from './containers/About.js'
import Home from './containers/Home.js'
import MenuBar from './components/MenuBar.js'
import './App.css';
import {
  Route,
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <MenuBar> </MenuBar>
      </header>
      <Route exact path="/" component={() => ( <About/> )} />
      <Route exact path="/projects" component={() => ( <Projects/> )} />
      {/* <Route exact path="/about" component={() => ( <About/> )} /> */}
      <Route exact path="/fractal-design" component={() => ( <FractalDesign/> )} />

    </div>
  );
}

export default App;

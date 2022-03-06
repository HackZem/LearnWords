
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import Words from './components/Words/Words';
import { Route, Routes } from 'react-router';
import {BrowserRouter} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">

        <Header />

        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            
            <Route path="/content" element={<Content />}/>
          
            
            <Route path="/words" element={<Words state={props.state} dispatch={props.dispatch}/>}/>
              
            
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;

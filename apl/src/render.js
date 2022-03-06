import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

const renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state}/>
        </React.StrictMode>,
        document.getElementById('root')
      )
}

export default renderEntireTree
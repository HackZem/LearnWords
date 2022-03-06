import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rstore from './redux/redux_store';
import store from './redux/store';


const RenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} dispatch={rstore.dispatch.bind(rstore)}/>
        </React.StrictMode>,
        document.getElementById('root')
      )
}

RenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  RenderEntireTree(state)
})

reportWebVitals();

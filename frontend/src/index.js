import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {Provider } from 'react-redux'

import {BrowserRouter} from 'react-router-dom';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <BrowserRouter> 
      <Provider store={store}> 
        <App /> 
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);



/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
); 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')

);

*/

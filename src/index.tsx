import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import App from './App';



createServer({
  routes() {
    this.namespace = 'api';

    this.get('/anotations', () => {
      return[
        {
          id: 1,
          covered: Boolean,
          title: 'Anotation 1',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



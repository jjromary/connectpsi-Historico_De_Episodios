import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import App from './App';



createServer({
  models: {
    anotation: Model,
  },


  routes() {
    this.namespace = 'api';

    this.get('/anotations', () => {
      return this.schema.all('anotation')
    })

    this.post('/anotations', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('anotation', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



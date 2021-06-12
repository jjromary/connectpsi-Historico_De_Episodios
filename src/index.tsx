import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import App from './App';

createServer({
  models: {
    anotation: Model,
  },

  seeds(server) {
    server.db.loadData({
      anotations: [
        {
          id: 1,
          title: 'Ansiedade',
          anotation: 'Excesso de pensamentos distocidos - Excesso de pensamentos distocidos - Excesso de pensamentos distocidos - Excesso de pensamentos distocidos - Excesso de pensamentos distocidos -',
          covered: 'sim',
          createdAt: new Date('2021-01-10 09:00:00'),
        },
        {
          id: 2,
          title: 'Depressão',
          anotation: 'Tristeza que não vai embora a dias - Tristeza que não vai embora a dias -Tristeza que não vai embora a dias -Tristeza que não vai embora a dias',
          covered: 'não',
          createdAt: new Date('2021-12-07 09:00:00'),
        },
      ],
    })
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



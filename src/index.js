import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
//импорт компонента Провайдер
import { Provider } from 'react-redux';
//импорт объекта глобального состояния
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

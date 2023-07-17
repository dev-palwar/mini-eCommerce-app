import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ColorModeScript } from '@chakra-ui/react';
import { Provider } from "react-redux";

import store from "../src/Redux/Store";
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

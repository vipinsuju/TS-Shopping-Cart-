import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { QueryClient , QueryClientProvider } from "react-query";

const client2 = new QueryClient();


ReactDOM.render(
  <QueryClientProvider client = {client2} >
      <App />
  </QueryClientProvider>,
    
  
  document.getElementById('root')
);



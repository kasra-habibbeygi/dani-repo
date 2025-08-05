import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import App from './App';

// Assets
import './assets/css/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

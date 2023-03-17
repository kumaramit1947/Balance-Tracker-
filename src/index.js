import React from 'react';
import ReactDOM from 'react-dom/client';

import {Provider} from './context/context';
import App from './App';

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <App />
    </Provider>
);
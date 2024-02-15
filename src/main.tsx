import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

const rootElement = document.getElementById('root');
if (rootElement !== null) {
    const root = createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <AuthContextProvider>
                    <App />
                </AuthContextProvider>
            </BrowserRouter>
        </React.StrictMode>,
    );
}

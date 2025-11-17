import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './App.css';

console.log('index.tsx loaded');  // sanity check
const container = document.getElementById('root');
if (!container) throw new Error('#root not found');
createRoot(container).render(<App />);
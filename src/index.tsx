import React from 'react';
import { createRoot } from 'react-dom/client';
import Anagram from './anagram';

console.log('index.tsx loaded');  // sanity check
const container = document.getElementById('root');
if (!container) throw new Error('#root not found');
createRoot(container).render(<Anagram />);
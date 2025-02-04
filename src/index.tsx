import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Trees from './pages/Trees';
import TreePage from './pages/Tree';
import NewTree from './pages/NewTree';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Trees />} />
                <Route path="/tree/:id" element={<TreePage />} />
                <Route path="/new-tree" element={<NewTree />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

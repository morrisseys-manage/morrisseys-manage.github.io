
import React, { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

const Events = lazy(() => import('./pages/Events.jsx'));
const Photos = lazy(() => import('./pages/Photos.jsx'));
const Registry = lazy(() => import('./pages/Registry.jsx'));
const Travel = lazy(() => import('./pages/Travel.jsx'));

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<div></div>} />
          <Route path="events" element={
            <Suspense fallback={<div>Loading…</div>}>
              <Events />
            </Suspense>
          } />
          <Route path="photos" element={
            <Suspense fallback={<div>Loading…</div>}>
              <Photos />
            </Suspense>
          } />
          <Route path="registry" element={
            <Suspense fallback={<div>Loading…</div>}>
              <Registry />
            </Suspense>
          } />
          <Route path="travel" element={
            <Suspense fallback={<div>Loading…</div>}>
              <Travel />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

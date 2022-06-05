import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { RoutesComponent } from './route/Routes';

function App() {
  document.title = "skeji"
    return (
      <>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
      </>
    );
}

export default App;

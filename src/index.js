import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login/>}/>
    </Routes>
    <PlayerContextProvider>
    <App />
    </PlayerContextProvider>
    
    </BrowserRouter>
  </React.StrictMode>
);


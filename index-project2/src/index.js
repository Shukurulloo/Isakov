import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SideBar from './components/pages/sidebar';
import { BrowserRouter } from 'react-router-dom';
import Bezier from './components/pages/home';
import Settings from './components/pages/Settings';
import Logout from './components/pages/Logout';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<BrowserRouter>
<SideBar/>
      <Routes>
        <Route path="/" element={<Bezier/>}/> 
        <Route path="/" element={<Dashboard/>}/> 
        <Route path="/" element={<Artists/>}/> 
        <Route path="/" element={<Projects/>}/> 
        <Route path="/" element={<Sales/>}/> 
        <Route path="/" element={<Settings/>}/> 
        <Route path="/" element={<Logout/>}/> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './Components';
import { Ecommerce, Calendar, Stacked, AboutPage,Employees,Pyramid, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, HomePage } from './Pages';
import './App.css';

import { useStateContext } from './Contexts/ContextProvider';
import Testimonial from './Pages/Testimonial';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import NineFieldForm from './Components/Form/Form';
import axios from 'axios';
import TestimonialPage from './Pages/Testimonials';
import BarPage from './Pages/BarData';
import Login from './Pages/Login';
import LoginForm from './Pages/LoginForm';
import Logout from './Pages/Logout';

const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

  const userData = (JSON.parse(localStorage.getItem("adminUser")));

  

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);
  
 

  

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
         { activeMenu  ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
           <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div>
              {themeSettings && (<ThemeSettings />)}
              <Routes>

                <Route path="/" element={(<HomePage />)} />

                

                <Route path="/homepage" element={<HomePage />} />
                <Route path="/aboutpage" element={<AboutPage />} />
                <Route path='/login' element={<Login/>}/>
                
                <Route path="/barpage" element={<BarPage />} />
                <Route path="/testimonials" element={<TestimonialPage/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/add" element={<NineFieldForm/>} />
                <Route path="/logout" element={<Logout/>} />
                
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Notification from './components/Notification';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import { UserProvider } from './context/UserContext';
import { Contact } from './pages/Contact';
import TheEnd from './pages/TheEnd';

const NavBarWrapper = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';
  return <NavBar isLoginPage={isLoginPage} />;
};

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <UserProvider>
          <Notification />
          <NavBarWrapper />
          <main className='flex-1'>
            <Routes>
              <Route path='/' element={<LoginPage />} />
              <Route path='/posts' element={<Home />} />
              <Route path='/post/:id' element={<Post />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/theend' element={<TheEnd />} />
            </Routes>
          </main>
          <Footer />
        </UserProvider>
      </div>
      </BrowserRouter>
  );
}

export default App;

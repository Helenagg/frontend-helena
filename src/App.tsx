import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import {} from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Notification from './components/Notification';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import { UserProvider } from '../context/UserContext';

const NavBarWrapper = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  return <NavBar isLoginPage={isLoginPage} />;
};

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <UserProvider>
    <BrowserRouter>
      <div className='flex flex-col min-h-screen'>
        <Notification />
        <NavBarWrapper />
        <main className='flex-1'>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/' element={<Home />} />
            <Route path='/post/:id' element={<Post />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;

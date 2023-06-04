import Home from './pages/home';
import About from './pages/about';
import Donate from './pages/donate';
import GetInvolved from './pages/getinvolved';
import Login from './pages/login';
import NewsPress from './pages/news';
import NotFoundPage from './pages/not_found';
import HomeMore from './pages/home_more';
import styleApp from './styles/styleApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <div style={styleApp.App}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/login' element={<Login />} />
          <Route path='/getinvolved' element={<GetInvolved />} />
          <Route path='/home/more' element={<HomeMore />} />
          <Route path='/articles' element={<NewsPress />} />
          <Route path='/articles/:articleId' element={<NewsPress />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

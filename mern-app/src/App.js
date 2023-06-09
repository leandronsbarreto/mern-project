import Home from './pages/home';
import AboutMission from './pages/aboutMission';
import Donate from './pages/donate';
import GetInvolved from './pages/getinvolved';
import Login from './pages/login';
import NewsPress from './pages/news';
import NotFoundPage from './pages/notFound';
import styleApp from './styles/styleApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <div style={styleApp.App}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutandmission' element={<AboutMission />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/login' element={<Login />} />
          <Route path='/getinvolved' element={<GetInvolved />} />
          <Route path='/articles' element={<NewsPress />} />
          <Route path='/articles/:articleId' element={<NewsPress />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

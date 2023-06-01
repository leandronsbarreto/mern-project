import Home from './pages/home';
import Donate from './pages/donate';
import GetInvolved from './pages/get_involved';
import Login from './pages/login';
import NewsPress from './pages/news_press';
import NotFoundPage from './pages/not_found';
import styleApp from './styles/styleApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <div style={styleApp.App}>
        <Routes>
          <Route path='/' element={<Home />} />
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

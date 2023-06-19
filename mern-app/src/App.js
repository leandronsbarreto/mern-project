import Home from './pages/home';
import About from './pages/about';
import AboutMission from './pages/aboutMission';
import Donate from './pages/donate';
import GetInvolved from './pages/getinvolved';
import Login from './pages/login';
import NewsPress from './pages/newsPress';
import News from './pages/news';
import NotFoundPage from './pages/notFound';
import styleApp from './styles/styleApp';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Mission from './pages/mission';
import Press from './pages/press';

const App = () => {
  return (
    <BrowserRouter>
      <div style={styleApp.App}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutandmission' element={<AboutMission />}>
            <Route path='/aboutandmission/about' element={<About />} />
            <Route path='/aboutandmission/mission' element={<Mission />} />
          </Route>
          <Route path='/donate' element={<Donate />} />
          <Route path='/login' element={<Login />} />
          <Route path='/getinvolved' element={<GetInvolved />} />
          <Route path='/newsandpress' element={<NewsPress />}>
            <Route path='/newsandpress/news' element={<News />} />
            <Route path='/newsandpress/news/:articleId' element={<News />} />
            <Route path='/newsandpress/press' element={<Press />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

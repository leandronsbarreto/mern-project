import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import allTabs from '../data/dataLayoutNewsPress';

const [news, press] = allTabs;
const initialTabs = [news, press];

const SharedLayoutNewsPress = () => {
  const [selectedTab, setSelectedTab] = useState(initialTabs[0]);

  /*   useEffect(() => {
    const path = window.location.pathname;
    path === '/aboutandmission/about' || path === '/aboutandmission/mission'
      ? (document.querySelector('.mainShared').style.display = 'none')
      : '';
  }, []);

  useEffect(() => {
    const linkNavAbout = document.querySelector(`.about`);
    linkNavAbout.addEventListener('click', () => {
      document.querySelector('.mainShared').style.display = 'none';
    });
    const linkNavMission = document.querySelector(`.mission`);
    linkNavMission.addEventListener('click', () => {
      document.querySelector('.mainShared').style.display = 'none';
    });
  }, []); */

  return (
    <>
      <nav className='navShared'>
        <ul className='ulShared'>
          {allTabs.map(item => (
            <li key={item.label} className='liShared'>
              <Link
                className={
                  item === selectedTab ? `selected ${item.id}` : `${item.id}`
                }
                onClick={() => setSelectedTab(item)}
                to={`/newsandpress/${item.id}`}
              >
                {`${item.icon} ${item.label}`}
              </Link>
              {item === selectedTab ? (
                <motion.div className='underline' layoutId='underline' />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default SharedLayoutNewsPress;

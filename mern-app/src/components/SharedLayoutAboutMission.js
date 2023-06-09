import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
// import Footer from './Footer';
import allTabs from '../data/dataLayoutAboutMission';

/* export const allTabs = [
  { icon: '📌', label: 'About us', point: <Footer /> },
  { icon: '🎯', label: 'Our mission', point: 'Caim' }
]; */

const [about, mission] = allTabs;
const initialTabs = [about, mission];

/* export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allTabs.find(ingredient => !existing.has(ingredient));
} */

const NavBarSharedLayout = () => {
  const [selectedTab, setSelectedTab] = useState(initialTabs[0]);

  return (
    <>
      <div className='goback'>Go Back</div> {/*This must be a component*/}
      <nav>
        <ul>
          {initialTabs.map(item => (
            <li
              key={item.label}
              className={item === selectedTab ? 'selected' : ''}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className='underline' layoutId='underline' />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <div className='main'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={selectedTab ? selectedTab.label : 'empty'}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='test'
          >
            {selectedTab ? selectedTab.content : '⚠'}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default NavBarSharedLayout;

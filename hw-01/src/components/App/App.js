import React from 'react';
import Profile from '../Profile/Profile';
import user from '../../data/user.json';
import statisticalData from '../../data/statistical-data.json';
import Statistics from '../Statistics/Statistics';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <div className={styles.wrapper1}>
        <Profile
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </div>
      <div className={styles.wrapper2}>
        <Statistics title="Upload stats" stats={statisticalData} />
      </div>
    </div>
  );
}

export default App;

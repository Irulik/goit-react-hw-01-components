import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './GlobalStyle.js';

import Profile from './components/profile/Profile';
import user from './components/profile/user.json';

import Statistics from './components/statictics/Statistics';
import data from './components/statictics/data.json';

import FriendList from './components/friendList/FriendList';
import friends from './components/friendList/friends.json';

import TransactionHistory from './components/transactions/TransactionHistory';
import transactions from './components/transactions/transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      
     <Statistics title="Upload stats" stats={data} />

    <FriendList friends={friends} />;

    <TransactionHistory items={transactions} />;
    
    
    <App />
  </React.StrictMode>
);


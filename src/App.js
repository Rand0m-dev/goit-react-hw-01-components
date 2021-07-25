import React from 'react';
import { Profile } from './Components/Profile/Profile';
import user from './json/user.json';
import { Statistics } from './Components/Statistics/Statistics';
import statisticalData from './json/statistical-data.json';
import { FriendList } from './Components/FriendList/FriendList';
import friends from './json/friends.json';
import { TransactionHistory } from './Components/TransactionHistory/TransactionHistory';
import transaction from './json/transactions.json';

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload Stats" stats={statisticalData} />
     <FriendList friends={friends} />
    <TransactionHistory items={transaction} /> 
  </div>
);

export default App;

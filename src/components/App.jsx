import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Profile } from './profile/Profile';
import { FriendList } from './friendList/FriendList';
import { Statistics } from './statictics/Statistics';
import TransactionsHistory from './transactions/TransactionHistory';

console.log(user);

export  const App = () => {
  return (
    <>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        likes={user.stats.likes}
        views={user.stats.views}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </>
  );
};
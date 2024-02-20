import { Profile } from './Profile/profile';
// import { Statistics } from './Statistics/statistics';
// import { FriendList } from './Friends/friends';
// import { TransactionHistory } from './Transactions/transactions';

import user from './Data/user.json';
// import data from './Data/data.json';
// import friends from './Data/friends.json';
// import transactions from './Data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* React homework template */}
    </div>
  );
};

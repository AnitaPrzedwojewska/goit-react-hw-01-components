import { Wrapper } from './app.styled';
import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FriendList } from './Friends/friends';
import { TransactionHistory } from './Transactions/transactions';

import user from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';

export const App = () => {
  return (
    <Wrapper
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '360px',
        margin: '0 auto',
        fontSize: '1em',
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
      <Statistics title="" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Wrapper>
  );
};

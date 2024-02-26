import { Friends, Friend, Status, Avatar, Name } from './friends.styled';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <Friend>
    <Status isOnline={isOnline}></Status>
    <Avatar class="avatar" src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Friend>
);

export const FriendList = ({ friends }) => (
  <Friends>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </Friends>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

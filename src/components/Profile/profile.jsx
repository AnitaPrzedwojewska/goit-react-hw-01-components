import {
  Card,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Stat,
  Label,
  Quantity,
} from './profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <Card>
    <Description>
      <Avatar
        src={avatar}
        // src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        alt="User avatar"
        class="avatar"
      />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <Stat>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </Stat>
      <Stat>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </Stat>
      <Stat>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </Stat>
    </Stats>
  </Card>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

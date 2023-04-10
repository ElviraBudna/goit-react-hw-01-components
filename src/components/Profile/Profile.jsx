import PropTypes from 'prop-types';
import {
  ProfileContainer,
  Description,
  Name,
  Info,
  Stats,
  StatsBox,
  Label,
  Quantity,
} from './Profile.styled';

export default function Profile({ avatar, username, tag, location, stats }) {
  return (
    <ProfileContainer>
      <Description>
        <img src={avatar} alt="User avatar" className="avatar" width={240} />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <Stats>
        <StatsBox>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsBox>
        <StatsBox>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsBox>
        <StatsBox>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsBox>
      </Stats>
    </ProfileContainer>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

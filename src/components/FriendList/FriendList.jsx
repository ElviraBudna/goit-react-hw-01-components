import PropTypes from 'prop-types';
import { FriendLists, Name, Item, Status } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <section>
      <FriendLists>
        {friends.map(friend => (
          <Item key={friend.id}>
            <Status isOnline={friend.isOnline}>{friend.isOnline}</Status>
            <img
              className="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <Name>{friend.name}</Name>
          </Item>
        ))}
      </FriendLists>
    </section>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

import FriendListItem from './FriendListItem';
import styled from 'styled-components';

export const FriendListWrapper = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
    width: 40%;
`;

const FriendList = ({ friends }) => (
  <FriendListWrapper>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        isOnline={friend.isOnline}
        name={friend.name}
      />
    ))}
  </FriendListWrapper>
);

export default FriendList;
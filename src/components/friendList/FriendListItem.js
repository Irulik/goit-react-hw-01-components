import styled from 'styled-components';

const Item = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  margin-top: 5vh;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;

const Status = styled.span`
  border-radius: 50%;
  margin: auto 1.7rem;
  height: 15px;
  width: 15px;
`;

const Online = styled(Status)`
  background-color: green;
`;

const Offline = styled(Status)`
  background-color: red;
`;

const Avatar = styled.img`
  margin: 0 auto;
`;

const Name = styled.p`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0;
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
`;

const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    {isOnline ? <Online /> : <Offline />}
    <Avatar src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Item>
);

export default FriendListItem;
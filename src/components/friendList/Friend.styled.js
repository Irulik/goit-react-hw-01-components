import styled from 'styled-components';

export const FriendList = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  margin-top: 5vh;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 0.5rem;
`;

export const Status = styled.span`
  border-radius: 50%;
  margin: auto 1.7rem;
  height: 15px;
  width: 15px;
`;

export const Online = styled`
    composes: status;
    background-color: green;
`;

export const Offline = styled`
    composes: status;
    background-color: red;
`;

export const Avatar = styled`
  margin: 0 auto;
`;

export const Name = styled`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 0;
  text-align: left;
  font-weight: bold;
  font-size: 2.5rem;
`;
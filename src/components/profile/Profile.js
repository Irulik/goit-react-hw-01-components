
import React from 'react';
import { ProfileContainer, Description, Avatar, ProfileName, ProfileTag, ProfileLocation, Stats, FollowersList, ViewsList, LikesList, Label, Quantity } from './Profile.styled';
import user from './user.json'; 

const Profile = () => {
  const { avatar, username, tag, location, stats } = user;

  return (
    <ProfileContainer>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </Description>

      <Stats>
        <FollowersList>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </FollowersList>
        <ViewsList>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </ViewsList>
        <LikesList>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </LikesList>
      </Stats>
    </ProfileContainer>
  );
};

export default Profile;


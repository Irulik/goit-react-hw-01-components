
import { ProfileContainer, Description, Avatar, ProfileName, ProfileTag, ProfileLocation, Stats, FollowersList, ViewsList, LikesList, Label, Quantity } from './Profile.styled';


export const Profile = ({ avatar, username, tag, location, followers, views, likes }) => {
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
          <Quantity>{followers}</Quantity>
        </FollowersList>
        <ViewsList>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </ViewsList>
        <LikesList>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </LikesList>
      </Stats>
    </ProfileContainer>
  );
};



import Stars from '../Stars/Stars';
import {
  AvatarName,
  AvatarPicture,
  Card,
  Name,
  CardInfo,
  CardText,
  Comment,
} from './ReviewCard.styled';

export default function ReviewCard({
  name = 'No name',
  rating = 5,
  comment = 'No comment',
  avatar,
}) {
  return (
    <Card>
      <CardInfo>
        {avatar ? (
          <AvatarPicture src={avatar} />
        ) : (
          <AvatarName>{name[0].toUpperCase()}</AvatarName>
        )}
        <CardText>
          <Name>{name}</Name>
          <Stars rating={rating} />
        </CardText>
      </CardInfo>
      <Comment>{comment}</Comment>
    </Card>
  );
}

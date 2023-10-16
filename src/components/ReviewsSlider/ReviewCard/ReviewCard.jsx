import {
  Avatar,
  Card,
  Name,
  CardInfo,
  CardText,
  Comment,
} from './ReviewCard.styled';

export default function ReviewCard({ name, rating, comment }) {
  return (
    <Card>
      <CardInfo>
        <Avatar>{name[0]}</Avatar>
        <CardText>
          <Name>{name}</Name>
          <p style={{ marginBottom: 24 }}>{rating}</p>
        </CardText>
      </CardInfo>
      <Comment>{comment}</Comment>
    </Card>
  );
}

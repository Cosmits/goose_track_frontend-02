import {
  Avatar,
  Card,
  Name,
  CardInfo,
  CardText,
  Comment,
  Star,
  StarWrapper,
} from './ReviewCard.styled';

function star(rating) {
  const ratingArr = [1, 2, 3, 4, 5];
  return (
    <StarWrapper>
      {ratingArr.map((rate) =>
        rate <= rating ? (
          <Star key={rate} color="#ffac33" />
        ) : (
          <Star key={rate} color="#cec9c1" />
        ),
      )}
    </StarWrapper>
  );
}

export default function ReviewCard({ name, rating, comment }) {
  return (
    <Card>
      <CardInfo>
        <Avatar>{name[0]}</Avatar>
        <CardText>
          <Name>{name}</Name>
          {star(rating)}
        </CardText>
      </CardInfo>
      <Comment>{comment}</Comment>
    </Card>
  );
}

import PropTypes from 'prop-types';

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
import { useEffect, useState } from 'react';
import { imageExists } from 'hooks/useImageExists';

export default function ReviewCard({
  name = 'No name',
  rating = 5,
  comment = 'No comment',
  avatar = null,
}) {
  
  const [newAvatar, setNewAvatar] = useState(avatar ?? '');

  useEffect(() => {
    function checkImg() {
      imageExists(avatar).then(function (exists) {
        if (!exists) setNewAvatar('')
        else setNewAvatar(avatar)
      });
    }
    checkImg()
  }, [avatar, newAvatar])

  return (
    <Card>
      <CardInfo>
        {newAvatar ? (
          <AvatarPicture src={newAvatar} />
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

ReviewCard.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  comment: PropTypes.string,
  avatar: PropTypes.string,
};

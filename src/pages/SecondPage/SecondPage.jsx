import React, { useState, useEffect } from 'react';

import { Container, Block, Title, StyledLink } from './SecondPage.styled';
import AddFeedbackModal from '../../components/AddFeedbackModal/AddFeedbackModal';
// import Modal from '../.././components/Modal/Modal';

const SecondPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <Container>
      <button type="button" onClick={handleOpenModal}>
        Feedback
      </button>

      {isModalOpen && <AddFeedbackModal onClose={handleCloseModal} />}

      <Block>
        <Title>Second Page</Title>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
};

export default SecondPage;

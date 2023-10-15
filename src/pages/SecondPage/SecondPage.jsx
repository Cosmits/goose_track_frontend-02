import { Container, Block, Title, StyledLink } from './SecondPage.styled';
import Modal from '../.././components/Modal/Modal';
import React, { useState, useEffect } from 'react';

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

      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h2>It's modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tincidunt sapien quis dolor accumsan, in dignissim metus fringilla.
            Proin volutpat libero in ligula bibendum, nec condimentum justo
            tincidunt. Sed viverra enim at massa feugiat, a tincidunt urna
            eleifend.
          </p>
          <button type="button" onClick={handleCloseModal}>
            X
          </button>
        </Modal>
      )}
      <Block>
        <Title>Second Page</Title>
        <StyledLink to="/second/5">Half</StyledLink>
      </Block>
    </Container>
  );
};

export default SecondPage;

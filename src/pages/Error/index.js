import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  text-align: center;
  margin: 0 2rem;
  color: #efefef;

  img {
    width: 100%;
    max-width: 350px;
  }
`;

export default function Error() {
  return (
    <PageWrapper>
      <img src="https://media.giphy.com/media/9J7tdYltWyXIY/source.gif" alt="Error 404" />
      <h1>Página não encontrada! <span role="img" aria-label="emoji">🙁</span></h1>
      <Link to="/">Voltar para a Home</Link>
    </PageWrapper>
  );
}

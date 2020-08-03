import styled from 'styled-components';

const FormButton = styled.button`
  padding: .6rem 1.2rem;
  border-radius: 5px;
  background: ${props => `var(--${props.theme})` || 'var(--primary)'};
  max-width: 100%;
  border: transparent;
  cursor: pointer;

  :hover {
    filter: brightness(.8);
  }
`;

export default FormButton;

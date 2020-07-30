import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border-bottom: 2px solid;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: .3s;
  &:hover,
  &:focus {
    filter: brightness(.6);
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 0px #333;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

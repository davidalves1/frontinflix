import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.ul`
  color: var(--white);
`;

export default function CategoryList({ categories = [] }) {
  return (
    <ListWrapper>
      {categories.map((category, index) => {
        return (
          <li key={`${category}-${index}`}>
            {category.name}
          </li>
        );
      })}
    </ListWrapper>
  );
}

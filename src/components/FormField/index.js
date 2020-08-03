import React from 'react';
import styled from 'styled-components';

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  input, textarea, label {
    display: block;
  }

  input, textarea {
    background: var(--blackLighter);
    border: transparent;
    color: var(--white);
    border-bottom: 2px solid ${props => props.color || 'var(--white)'};
    padding: .4rem .8rem;
    font-size: 1rem;
    margin-top: .5rem;
    border-radius: 5px;
    transition: .3s;

    :focus {
      filter: brightness(.8);
    }
  }
`;

export default function FormField({ label, type, name, value, onChange }) {
  return (
    <FieldWrapper>
      <label>
        {label}
      </label>
      {
        type === 'textarea' &&
        <textarea
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      }
      {
        type !== 'textarea' &&
          <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      }
    </FieldWrapper>
  )
}

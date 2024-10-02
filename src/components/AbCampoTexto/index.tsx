import React, { useState } from 'react';
import styled from 'styled-components';

const AbLabel = styled.label`
  color: #002f52;
  display: block;
  font-weight: 700;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 16px;
  margin-bottom: 8px;
`;

const AbInput = styled.input`
  font-size: 16px;
  line-height: 24px;
  color: #002f52;
  padding: 8px 24px;
  border: 1px solid #002f52;
  border-radius: 45px;
  &:focus {
    outline: none;
  }
  width: 100%;
  box-sizing: border-box;
`;

export interface CampoTextoProps {
  id: string;
  placeholder?: string;
  label: string;
  value: string;
  type?: 'text' | 'password' | 'email' | 'date';
}

export function AbCampoTexto({
  id,
  placeholder,
  label,
  value,
  type = 'text',
}: CampoTextoProps) {
  const [valueInput, setValueInput] = useState(value);

  return (
    <div>
      <AbLabel htmlFor={id}>{label}</AbLabel>
      <AbInput
        type={type}
        value={valueInput}
        placeholder={placeholder}
        id={id}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValueInput(event.target.value);
        }}
      />
    </div>
  );
}

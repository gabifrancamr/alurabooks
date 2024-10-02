import React from 'react';
import styled, { css } from 'styled-components';

export interface AbBotaoProps {
  texto?: string;
  tipo?: 'primário' | 'secundário';
  onClick?: () => void;
}

const BotaoEstilizado = styled.button<AbBotaoProps>`
  background: ${(props: AbBotaoProps) =>
    props.tipo === 'primário' ? '#eb9b00' : '#FFF'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ${(props: AbBotaoProps) =>
    props.tipo === 'primário' ? '#fff' : '#eb9b00'};
  font-size: 20px;
  cursor: pointer;

  ${(props: AbBotaoProps) =>
    props.tipo === 'primário'
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `};
`;

export const AbBotao = ({ texto, tipo = 'primário', onClick }: AbBotaoProps) => {
  return (
    <BotaoEstilizado tipo={tipo} onClick={onClick}>
      {texto}
    </BotaoEstilizado>
  );
};

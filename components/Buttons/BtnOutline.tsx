import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { black } from '../../utils/colors';

export interface BtnProps {
  title: string;
  icon?: string;
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
  onClick?: () => void;
}

export const BtnOutline = ({
  title,
  icon,
  borderColor,
  backgroundColor,
  color,
  onClick,
}: BtnProps) => {
  return (
    <Wrapper
      className='btn-animation-left btn '
      style={{
        border: `1px solid ${borderColor && borderColor}`,
        backgroundColor: `${backgroundColor ? backgroundColor : 'transparent'}`,
        color: `${color ? color : ''}`,
      }}
      onClick={onClick ? () => onClick : () => {}}
    >
      <span>{title}</span>
      {icon && (
        <div className='icon blinkUp'>
          <Image
            className='img'
            src={icon}
            height={10}
            width={10}
            alt='arrow'
          />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${black};
  cursor: pointer;
  .icon {
    display: inline-block;
    margin-left: 1rem;
  }
`;

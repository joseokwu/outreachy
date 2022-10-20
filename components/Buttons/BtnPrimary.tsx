import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { orange } from '../../utils/colors';
import { BtnProps } from './BtnOutline';

export const BtnPrimary = ({ title, icon, onClick }: BtnProps) => {
  const handleClick = () => {};
  return (
    <Wrapper
      className='btn btn-animation-bottom'
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
  background-color: ${orange};
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  .icon {
    display: inline-block;
    margin-left: 1rem;
  }
`;

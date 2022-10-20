import React from 'react';
import styled from 'styled-components';
import { green } from '../../utils/colors';

interface WrapperProps {
  title: string;
  subtitle?: string;
  pList: JSX.Element[];
}

const LineWithText = ({ title, subtitle, pList }: WrapperProps) => {
  return (
    <Wrapper>
      <span className='line'></span>
      <div className='text'>
        <h3>{title}</h3>
        {subtitle && <h4>{subtitle}</h4>}
        {pList.map((item, index) => {
          return item;
        })}
      </div>
    </Wrapper>
  );
};

export default LineWithText;

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  gap: 2rem;
  font-weight: 500;
  .line {
    width: 1rem;
    background-color: ${green};
  }
  .text {
    span {
      color: ${green};
    }
    h3 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    h4 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
    }
    p {
      :not(:last-child) {
        margin-bottom: 0.75rem;
      }
    }
  }
`;

import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <Wrapper>
      <div className='loading'></div>
    </Wrapper>
  );
};

export default Loader;

const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 247, 243, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`;

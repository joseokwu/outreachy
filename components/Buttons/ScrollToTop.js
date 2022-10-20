import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { orange } from '../../utils/colors';

const ScrollToTop = () => {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  React.useEffect(() => {
    window.scroll({
      top: position.top,
      left: position.left,
      behavior: 'smooth',
    });
  }, [position]);

  const [visibility, setVisibility] = React.useState(false);
  const [show, setShow] = React.useState('none');

  const scrollTop = React.useRef();
  React.useEffect(() => {
    window.addEventListener('scroll', (e) => {
      window.scrollY > 200 ? setShow('inline-block') : setShow('none');
    });
  });

  return (
    <>
      <Wrapper
        onClick={() =>
          setPosition({ ...position, position: { top: 0, left: 0 } })
        }
        className='clickDown'
        style={{ display: show }}
      >
        <span className='message-circle blinkUp'>
          <Image src='/pngs/arrow3d.png' height={40} width={40} alt='icon' />
        </span>
      </Wrapper>
    </>
  );
};

//   return <Wrapper id='button'></Wrapper>;
// };

export default ScrollToTop;

const Wrapper = styled.span`
  position: fixed;

  bottom: 10px;
  right: 5%;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  color: #fff;
  background: rgba(242, 101, 34, 0);
  border: 2px solid ${orange};

  box-shadow: 0px 4px 3px ${orange};
  transition: all 0.5s;

  :hover {
    background: rgba(242, 101, 34, 0.3);
  }
  :active {
    transform: translateY(1rem) scale(0.5);
  }
  cursor: pointer;
  .message-circle {
    position: absolute;
    top: 20%;
    left: 15%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 440px) {
    .message-circle {
      position: absolute;
      top: 10%;
      left: 5%;
      transform: translate(-50%, -50%);
    }
  }
`;

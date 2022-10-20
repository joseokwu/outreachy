import React from 'react';
import styled from 'styled-components';
import { greenDark, greenLight } from '../../utils/colors';

interface TitleProp {
  title: string;
  fontSize: string;
  width?: string;
  text: string;
}

export const Title = ({ title, fontSize, width, text }: TitleProp) => {
  return (
    <Wrapper
      className='svg-text'
      data-text={text}
      style={{ fontSize: fontSize, width: width }}
    >
      {title}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  background-image: linear-gradient(to right, ${greenDark}, ${greenLight});
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  line-height: 1.4;
  position: relative;
  transition: all 0.2s;
  /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */

  stroke: #ffa5d8;

  stroke-width: 3;

  animation: textAnimate 5s ease-in;

  @keyframes textAnimate {
    0% {
      opacity: 0;
      /* stroke-dasharray: 0 50%;
      stroke-dashoffset: 20%;
      fill: hsl(189, 68%, 75%); */
    }

    100% {
      opacity: 1;
      /* stroke-dasharray: 50% 0;
      stroke-dashoffset: -20%;
      fill: hsla(189, 68%, 75%, 0%); */
    }
  }

  ::before {
    content: attr(data-text);
    position: absolute;
    background: linear-gradient(
      #f70000,
      #f89200,
      #f8f501,
      #038f00,
      #0168f8,
      #a200f7
    );
    -webkit-background-clip: text;
    color: transparent;
    background-size: 100% 90%;
    line-height: 1.4;
    letter-spacing: 0.2rem;
    clip-path: ellipse(120px 120px at -2.54% -9.25%);
    animation: swing 5s infinite;
    animation-direction: alternate;
  }

  @keyframes swing {
    0% {
      -webkit-clip-path: ellipse(120px 120px at -2.54% -9.25%);
      clip-path: ellipse(120px 120px at -2.54% -9.25%);
    }
    50% {
      -webkit-clip-path: ellipse(120px 120px at 49.66% 64.36%);
      clip-path: ellipse(120px 120px at 49.66% 64.36%);
    }
    100% {
      -webkit-clip-path: ellipse(120px 120px at 102.62% -1.61%);
      clip-path: ellipse(120px 120px at 102.62% -1.61%);
    }
  }
`;

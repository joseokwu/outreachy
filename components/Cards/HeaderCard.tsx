import React from 'react';
import styled from 'styled-components';
import { GiTakeMyMoney } from 'react-icons/gi';
import {
  black,
  greenDark,
  greenLight,
  grey_light_2,
  secondary_dark,
  secondary_dark_2,
  secondary_light,
  secondary_light_2,
  white,
} from '../../utils/colors';
import { IconType } from 'react-icons';

interface CardProp {
  title: string;
  backgroundColor1: string;
  backgroundColor2: string;
  titleColor1: string;
  titleColor2: string;
  boxShadow: string;
  picture: string;
  animation?: string;
  icon: JSX.Element;
  text: string;
}

export const HeaderCard = ({
  title,
  backgroundColor1,
  backgroundColor2,
  titleColor1,
  titleColor2,
  boxShadow,
  picture,
  animation,
  icon,
  text,
}: CardProp) => {
  return (
    <Wrapper className={animation}>
      <div
        className='card__side card__side--front card__side--front-1'
        style={{ boxShadow: `0 0.5rem 1rem ${boxShadow}` }}
      >
        <div
          className='card__picture card__picture--1'
          style={{
            backgroundImage: `linear-gradient(
            to right bottom,
            ${backgroundColor1},
            ${backgroundColor2}
          ),
          url(${picture})`,
            backgroundSize: 'cover',
          }}
        ></div>
        <h4 className='card__heading'>
          <span
            className='card__heading-span card__heading-span--1'
            style={{
              backgroundImage: `linear-gradient(
          to right bottom,
          ${titleColor1},
          ${titleColor2}
        )`,
            }}
          >
            {title}
          </span>
        </h4>
        <div className='card__details'>
          <ul>
            {icon}
            <li>{text}</li>
            <span className='line'></span>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: -20rem;
  width: 22%;
  position: relative;
  .card {
    // for functionality

    position: relative;
    height: 52rem;

    &__side {
      font-size: 2rem;
      height: 48rem;

      width: 100%;
      border-radius: 3px;
      overflow: hidden;
      /* transition: all 0.8s ease; */
      &--front {
        background-color: ${white};
      }
    }
    /* &:hover &__side--front {
      transform: rotateY(-180deg);
    }
    &:hover &__side--back {
      transform: rotateY(0deg);
    } */

    // front side styling
    &__picture {
      background-size: cover;
      height: 23rem;
      background-blend-mode: screen;
      -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
      clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    }

    &__heading {
      font-size: 2.8rem;
      font-weight: 300;
      color: ${white};
      text-transform: uppercase;
      text-align: right;
      position: absolute;
      top: 25%;
      right: 0rem;
      width: 50%;
      overflow: hidden;
    }

    &__heading-span {
      padding: 1rem 1.5rem;
      -webkit-box-decoration-break: clone;
      box-decoration-break: clone;
    }

    &__details {
      padding: 3rem;
      ul {
        list-style: none;
        width: 80%;
        margin: 0 auto;
        text-align: center;

        .icon {
          font-size: 6rem;
          /* background-image: linear-gradient(
            to right,
            ${greenDark},
            ${greenLight}
          );
          -webkit-background-clip: text; */
          /* color: transparent; */
        }

        li {
          text-align: center;
          font-size: 1.8rem;
          /* padding: 1rem; */
          margin-bottom: 2rem;
          /* &:not(:last-child) {
            border-bottom: 1px solid ${grey_light_2};
          } */
        }
        .line {
          display: block;
          background-color: ${grey_light_2};
          height: 1rem;
          width: 100%;
        }
      }
    }
  }
`;

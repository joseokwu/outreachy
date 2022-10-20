import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import {
  background_black_light,
  green,
  greenLight,
  greenLight_2,
  grey_light_1,
  grey_light_2,
} from '../../../utils/colors';
import { SiDiscogs } from 'react-icons/si';

const UnauthenticatedFooter = () => {
  return (
    <Wrapper>
      <span className='grass'>
        <Image
          src={'/source/balloons.png'}
          width={1400}
          height={300}
          alt='grass'
        />
      </span>
      <span>
        <Image
          src='/source/logo-nobg.svg'
          height={100}
          width={300}
          alt='logo'
        />
      </span>
      <div className='footer-text'>
        <span>
          <SiDiscogs className='icon' />
          <p>
            Free to share and remix: Creative Commons CC-BY, except for the
            individual organization logos, which are property of their
            respective owners, and any pictures with additional creative commons
            attributions.
          </p>
        </span>

        <span>
          <SiDiscogs className='icon' />
          <p>
            The Outreachy website is built with Django, Wagtail, bootstrap and
            deployed with Dokku. The code is licensed GPL v3 and can be found in
            the Outreachy website GitHub repo. There is a separate GitHub repo
            for creative works
          </p>
        </span>
        <span>
          <SiDiscogs className='icon' />
          <p>
            This program and all offers related to it are void where prohibited
            or restricted by law or where operation of the program would violate
            any law or right. All participants in the program must agree to the
            terms and conditions of the program which will be provided to the
            selected applicants.
          </p>
        </span>
      </div>
      <span className='line'></span>
      <div className='footer-bottom'>
        <div>Copyright © 2022 Outreachy</div>
        <div className='terms'>
          <span>Term of service</span>
          <span>.</span>
          <span>Privacy policy</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default UnauthenticatedFooter;

const Wrapper = styled.footer`
  padding: 5rem 15rem;
  /* height: 50rem; */
  background-color: ${background_black_light};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .grass {
    position: absolute;
    top: -5%;
    right: -5%;
    opacity: 0.2;
  }
  .footer-text {
    display: flex;
    flex-direction: column;

    gap: 2rem;
    span {
      display: flex;
      align-items: center;
      gap: 1rem;
      .icon {
        font-size: 8rem;
      }
      p {
        color: ${grey_light_1};
      }
    }
  }
  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 1.8rem;
    color: ${grey_light_1};
    .terms {
      display: flex;
      gap: 2rem;
      span {
        cursor: pointer;
        :hover {
          color: ${greenLight};
        }
      }
    }
  }
  .line {
    height: 1px;
    width: 100%;
    background-color: rgba(120, 120, 120, 1);
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

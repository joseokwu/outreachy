import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {
  background_pink,
  black,
  greenDark,
  greenLight,
  orange,
  white,
  yellowDark,
} from '../../../utils/colors';
import { BtnOutline } from '../../../components';
import { useRouter } from 'next/router';
import { BiMenuAltLeft, BiHome } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { BsBoxArrowInRight } from 'react-icons/bs';
import { BiDownArrow } from 'react-icons/bi';
import Loader from '../../Random/Loader';

const UnauthenticatedHeader = () => {
  const [open, setOpen] = useState(false);
  // const { isLoading } = useAppContext();
  const router = useRouter();
  const path = router.pathname;

  return (
    <Wrapper>
      <div className='logo'>
        <Image src='/source/logo-nobg.svg' height={70} width={250} alt='logo' />
      </div>
      <div className='nav'>
        <ul className='ul-main'>
          <li className='li-main'>
            <a href='#click' className='menu'>
              <h2 className='menu-title'>
                {' '}
                Applicants
                <BiDownArrow className='blink' />
              </h2>
              <ul className='menu-dropdown'>
                <li>Applicant Guide</li>
                <li>Internship Guide</li>
                <li>Apply to Outreachy</li>
                <li>My Application</li>
                <li>Current Projects</li>
                <li>Past Projects</li>
                <li>Other Opportunities</li>
              </ul>
            </a>
          </li>
          <li className='li-main'>
            <a href='#click' className='menu'>
              <h2 className='menu-title '>
                {' '}
                Communities
                <BiDownArrow className='blink' />
              </h2>
              <ul className='menu-dropdown'>
                <li>Community Guide</li>
                <li>Volunteering FAQ</li>
                <li>Community Sign-up</li>
                <li>Mentor Sign-up</li>
                <li>My Mentored Projects</li>
                <li>All Projects</li>
              </ul>
            </a>
          </li>
          <li className='li-main'>
            <a href='#click' className='menu'>
              <h2 className='menu-title '>
                {' '}
                Interns
                <BiDownArrow className='blink' />
              </h2>
              <ul className='menu-dropdown'>
                <li>Internship Guide</li>
                <li>My Internship</li>
                <li>Past Interns</li>
                <li>Opportunities</li>
              </ul>
            </a>
          </li>
          <li className='li-main'>
            <a href='#click' className='menu'>
              <h2 className='menu-title '>
                {' '}
                Donors
                <BiDownArrow className='blink' />
              </h2>
              <ul className='menu-dropdown'>
                <li>Sponsor Outreachy</li>
                <li>Individual Donations</li>
              </ul>
            </a>
          </li>
          <li className='li-main'>
            <a href='#click' className='menu'>
              <h2 className='menu-title '>
                {' '}
                About Us
                <BiDownArrow className='blink' />
              </h2>
              <ul className='menu-dropdown'>
                <li>Contact Us</li>
                <li>Promote Outreachy</li>
              </ul>
            </a>
          </li>
        </ul>
        <span>
          <BtnOutline
            title='Login'
            icon='/svg/arrow_angle.svg'
            // onClick={() => router.push('/work-with-us')}
            borderColor={white}
            color={white}
          />
        </span>
      </div>
      {/* <div className='mobile-nav'>
        <BiMenuAltLeft
          className={`btn-open ${open ? 'hide-btn' : 'show-btn'}`}
          onClick={() => setOpen(!open)}
        />
      </div> */}
      {/* {open && (
        <div className='nav-cover blowUp'>
          <AiOutlineClose
            className={`btn-close ${open ? 'show-btn' : 'hide-btn'}`}
            onClick={() => setOpen(!open)}
          />
          <ul>
            <li
              onClick={() => {
                router.push('/about');
                setOpen(false);
              }}
            >
              {path === '/about' ? <BsBoxArrowInRight /> : ''}
              About
            </li>
            <li
              onClick={() => {
                router.push('/services');
                setOpen(false);
              }}
            >
              {path === '/services' ? <BsBoxArrowInRight /> : ''}
              Services
            </li>
            <li
              onClick={() => {
                router.push('/careers');
                setOpen(false);
              }}
            >
              {path === '/careers' ? <BsBoxArrowInRight /> : ''}
              Careers
            </li>
            <li
              onClick={() => {
                router.push('/work-with-us');
                setOpen(false);
              }}
            >
              {path === '/work-with-us' ? <BsBoxArrowInRight /> : ''}
              Work With Us
            </li>
          </ul> */}
      {/* <span className='main-btn'>
          <BtnOutline
            title='Work With Us'
            icon='/svgs/arrow_angle.svg'
            onClick={() => router.push('/work-with-us')}
            borderColor={black}
          />
        </span> */}
      {/* </div>
      )} */}
      {/* {isLoading && <Loader />} */}
    </Wrapper>
  );
};

export default UnauthenticatedHeader;

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  padding: 0rem 6rem;

  background-image: linear-gradient(to right bottom, #28b485, #7ed56f);

  z-index: 999;
  /* position: fixed;
  width: 100%;
  top: 0;
  left: 0; */
  /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */

  .logo {
    cursor: pointer;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 6rem;

    .ul-main {
      display: flex;
      gap: 2.5rem;
    }
    .active {
      border-bottom: 5px solid ${orange};
    }
  }

  .menu {
    position: relative;
    cursor: pointer;
  }

  .menu-title {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    font-size: 1.8rem;
    color: #ffffff;
    font-weight: bold;
    text-transform: uppercase;
  }

  .menu-dropdown {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    padding: 15px 10px;
    font-size: 1.4rem;
    position: absolute;
    background: #ebebeb;
    z-index: 100;
  }

  .menu:not(:hover) > .menu-dropdown {
    padding: 0px 0;
    background: #dddddd;
    z-index: 99;
  }

  .menu-dropdown > * {
    overflow: hidden;
    padding: 5px 10px;
    background: rgba(0, 0, 0, 0);
    white-space: nowrap;
    transition: 0.5s height cubic-bezier(0.73, 0.32, 0.34, 1.5),
      0.5s padding cubic-bezier(0.73, 0.32, 0.34, 1.5),
      0.5s margin cubic-bezier(0.73, 0.32, 0.34, 1.5), 0.5s 0s color,
      0.2s background-color;
  }

  .menu-dropdown > *:hover {
    background: ${greenLight};
    color: ${white};
  }

  .menu:not(:hover) > .menu-dropdown > * {
    visibility: hidden;
    height: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin: 0;
    color: rgba(25, 25, 25, 0);
    transition: 0.5s 0.1s height, 0.5s 0.1s padding, 0.5s 0.1s margin,
      0.3s color, 0.6s visibility;
    z-index: 99;
  }

  .hList {
    //overflow: hidden;
  }

  /* .mobile-nav {
    display: none;
  }
  .nav {
    display: flex;
    align-items: center;
    gap: 6rem;

    .active {
      border-bottom: 5px solid ${orange};
    }
    ul {
      display: flex;
      align-items: center;
      gap: 4rem;
      list-style-type: none;
      font-size: 2rem;
      font-weight: 600;
      color: ${white};
      li {
        display: flex;
        align-items: center;
        gap: 0.2rem;
        cursor: pointer;
      }
    }
  } */

  @media only screen and (max-width: 684px) {
    /* padding: 0rem 4rem;
    .nav {
      display: none;
      transition: all 2s;
    } */
    /* .nav-cover {
      position: fixed;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-color: rgba(255, 247, 243, 0.9);

      .active {
        border-bottom: 5px solid ${orange};
        transform: translateX(2rem);
      }

      ul {
        position: absolute;
        top: 50%;
        left: 75%;
        transform: translate(-50%, -50%);
        font-size: 4rem;
        font-weight: 600;
        list-style-type: none;
        width: 100%; */
    /* margin: 0 auto; */

    /* li {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        li:not(:last-child) {
          margin-bottom: 4rem;
        }
      } */
    /* .btn-close {
        position: absolute;
        top: 2%;
        right: 5%;
        font-size: 5rem;
      }
    }
    .mobile-nav {
      display: block;
      .btn-open,
      .btn-close {
        font-size: 5rem;
      }

      .show-btn {
        display: block;
      }
      .hide-btn {
        display: none;
      }
    } */
  }
`;

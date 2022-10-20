import type { NextPage } from 'next';
import styled from 'styled-components';
import { UnauthenticatedLayout, Title, HeaderCard } from '../components';
import { BsArrowRightSquare } from 'react-icons/bs';
import { GiTakeMyMoney, GiSandsOfTime } from 'react-icons/gi';
import { MdComputer } from 'react-icons/md';
import {
  black,
  green,
  greenDark,
  greenDark_2,
  greenLight,
  greenLight_2,
  secondary_dark,
  secondary_dark_2,
  secondary_light,
  secondary_light_2,
  tertiary_dark,
  tertiary_dark_2,
  tertiary_light,
  tertiary_light_2,
  white,
} from '../utils/colors';
import Image from 'next/image';
import LineWithText from '../components/Random/LineWithText';
import { useInView } from 'react-intersection-observer';
import { randomInt } from 'crypto';

const Home = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ref2, inView2] = useInView({
    /* Optional options */
    triggerOnce: true,
    threshold: 0.1,
  });

  const wrapper4Data = [
    {
      title: 'Apply to Outreachy',
      list: [
        <p key={1}>
          <span>Read more</span> about applying to Outreachy.
        </p>,
        <p key={2}>
          Read the <span>Outreachy Applicant Guide</span>.
        </p>,
      ],
    },
    {
      title: 'Mentor Outreachy Interns',
      subtitle:
        'We are seeking open source communities to be mentors! A call for mentors for the May 2023 internship cohort will open in January.',
      list: [
        <p key={1}>
          🙋🏽 <span>Sign up to mentor</span> or <span>contact us</span> to
          express interest in having your open source or open science project
          mentor Outreachy interns.
        </p>,
        <p key={2}>
          📚 Read the <span>community participation guide</span>.
        </p>,
        <p key={3}>
          📚 Read the <span>mentor duties</span> and <span>mentor FAQ</span>.
        </p>,
        <p key={4}>
          📬 <span>Sign up</span> for the Outreachy announcement mailing list
        </p>,
        <p key={5}>
          💬 <span>Contact Outreachy organizers</span> to express interest in
          mentoring future internship cohorts
        </p>,
      ],
    },
    {
      title: 'Support Outreachy',

      list: [
        <p key={1}>
          💪 <span>Sponsor</span> or <span>donate</span> to Outreachy
        </p>,
        <p key={2}>
          🗣️ <span>Promote Outreachy</span>
        </p>,
      ],
    },
    {
      title: 'Outreachy Sponsors',
      subtitle:
        'We are seeking open source communities to be mentors! A call for mentors for the May 2023 internship cohort will open in January.',
      list: [
        <p key={1}>
          We are currently seeking sponsorship for the December 2022 internship
          cohort. Please <span>contact us</span> if you are interested in
          becoming a sponsor.
        </p>,
        <p key={2}>
          For details on Outreachy sponsorship, please read our{' '}
          <span>sponsor guide</span>.
        </p>,
        <p key={3}>
          If you are interested in finding jobs with our sponsors, please follow
          the links from our <span>opportunities page</span>.
        </p>,
      ],
    },
  ];
  return (
    <Wrapper>
      <header className='header'>
        <Title title='Outreachy' fontSize='8rem' text='Outreachy' />
        <h4>
          Outreachy provides internships in open source and open science.
          Outreachy provides internships to people subject to systemic bias and
          impacted by underrepresentation in the technical industry where they
          are living.
        </h4>
      </header>
      <div className='cards-container'>
        <HeaderCard
          title='You get paid'
          backgroundColor1={secondary_light}
          backgroundColor2={secondary_dark}
          titleColor1={secondary_light_2}
          titleColor2={secondary_dark_2}
          boxShadow={secondary_light}
          picture='jpg/unity.jpg'
          animation='btn-animation-bottom'
          icon={<GiTakeMyMoney className='icon' />}
          text='$7,000 USD total internship stipend'
        />
        <HeaderCard
          title='Work remotely'
          backgroundColor1={greenLight}
          backgroundColor2={greenDark}
          titleColor1={greenLight_2}
          titleColor2={greenDark_2}
          boxShadow={greenLight}
          picture='jpg/christina2.jpg'
          animation='btn-animation-bottom2'
          icon={<MdComputer className='icon' />}
          text='both interns and mentors work remotely'
        />
        <HeaderCard
          title='Three months'
          backgroundColor1={tertiary_light}
          backgroundColor2={tertiary_dark}
          titleColor1={tertiary_light_2}
          titleColor2={tertiary_dark_2}
          boxShadow={tertiary_light}
          picture='jpg/girl_at_peace.jpg'
          animation='btn-animation-bottom3'
          icon={<GiSandsOfTime className='icon' />}
          text='internships run May to August, or December to March'
        />
      </div>
      <Wrapper1>
        <div className='text-area'>
          <Title
            title='Work on Open Source and Open Science'
            fontSize='4rem'
            text='Work on Open Source and Open Science'
          />
          <p>
            Outreachy has internship projects in both open source and open
            science. Outreachy internship projects may include programming,
            research, user experience, documentation, graphical design, data
            science, marketing, user advocacy, event planning, and more!
          </p>
          <div className='text-arrow'>
            <p>Read the Outreachy applicant guide for details.</p>
            <span className='blinkUp'>
              <Image
                src={'/svg/arrow_angle_green.svg'}
                height={25}
                width={30}
                alt='arrow'
              />
            </span>
          </div>
        </div>
        <div
          ref={ref}
          className={`image-area ${inView ? 'display blowUp' : 'display-none'}`}
        ></div>
      </Wrapper1>
      <Wrapper2>
        <div className='diversity-section'>
          <div
            ref={ref2}
            className={`pride ${inView2 ? 'display blowUp' : 'display-none'}`}
          >
            <div className='earth'></div>
          </div>
          <div className='text-area'>
            <Title
              title='Supporting Diversity in Open Source'
              fontSize='4rem'
              text='Supporting Diversity in Open Source'
            />
            {/* <p>
            Outreachy is a diversity initiative of Software Freedom Conservancy.
          </p> */}
            <p>
              Outreachy&apos;s goal is to increase diversity in open source.
              Past Outreachy interns are:
            </p>
            <ul>
              <li>♀️ 92% women</li>
              <li>🏳️‍🌈 4% transgender, genderqueer, or non-binary people</li>
              <li>🧕🏾 64% people of color</li>
              <li>
                🧑🏿 12% people from a historically disadvantaged caste or tribe
              </li>
            </ul>
            <i>
              Statistics are based on responses to the 2019 longitudinal study
              of Outreachy alums.
            </i>
            <p>
              Outreachy expressly invites women (both cis and trans), trans men,
              and genderqueer people to apply. We also expressly invite
              applications from residents and nationals of the United States of
              any gender who are Black/African American, Hispanic/Latinx, Native
              American/American Indian, Alaska Native, Native Hawaiian, or
              Pacific Islander.
            </p>
          </div>
        </div>
        <span>
          Anyone who faces under-representation, and systemic bias or
          discrimination in the technology industry of their country is invited
          to apply.
        </span>
      </Wrapper2>
      <Wrapper3>
        <Title title='Important dates' fontSize='3rem' text='Important dates' />
        <div className='title-card-container'>
          <h4>December 2022 internships:</h4>
          <div className='date-card-container'>
            <div className='date-card'>
              ✍🏿 Initial application results are available after 4pm UTC on
              October 8, 2022
            </div>
            <div className='date-card'>
              📑 Internship project list is finalized
            </div>
            <div className='date-card'>🙋🏽 Mentor sign up is closed</div>
            <div className='date-card'>
              🙌🏿 Internships run December 5, 2022 to March 3, 2023
            </div>
          </div>
        </div>
        <div className='title-card-container'>
          <h4>May 2023 internships:</h4>
          <div className='date-card-container'>
            <div className='date-card'>
              ✍🏿 Intern applications are accepted from early February to late
              February 2023
            </div>
            <div className='date-card'>
              📑 Internship project list will be finalized in late March 2023
            </div>
            <div className='date-card'>
              🙋🏽 Mentors can sign up starting in January 2023
            </div>
            <div className='date-card'>
              🙌🏿 Internships run late May 2023 to late August 2023
            </div>
            <div className='date-card'>
              📬 Sign up for our mailing list to be notified of future
              internships.
            </div>
          </div>
        </div>
        <span className='calender'>
          <Image
            src={'/svg/dayCalendar.svg'}
            height={200}
            width={200}
            alt='date'
          />
        </span>
      </Wrapper3>
      <Wrapper4>
        <div className='bg-video'>
          <video className='bg-video__content' autoPlay muted loop>
            <source src='/img/video.mp4' type='video/mp4' />
            <source src='/img/video.webm' type='video/webm' />
            Your browser is not supported
          </video>
        </div>
        {wrapper4Data.map((item, index) => {
          return (
            <LineWithText
              title={item.title}
              subtitle={item.subtitle}
              pList={item.list}
              key={index}
            />
          );
        })}
      </Wrapper4>
      <Wrapper5>
        <Title
          title='May 2022 internship sponsors'
          fontSize='4rem'
          text='May 2022 internship sponsors'
        />
        <div className='sponsors-container'>
          <h3>Ceiling Smasher</h3>
          <div className='sponsors'>
            <span className='sponsor'>
              <Image
                src={'/source/ardc.png'}
                height={150}
                width={200}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/czi.jpg'}
                height={100}
                width={150}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/ford.png'}
                height={70}
                width={150}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/indeed.jpg'}
                height={80}
                width={200}
                alt='sponsor'
              />
            </span>
          </div>
        </div>
        <div className='sponsors-container'>
          <h3>Equalizer</h3>
          <div className='sponsors'>
            <span className='sponsor'>
              <Image
                src={'/source/google.png'}
                height={80}
                width={200}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/microsoft.png'}
                height={80}
                width={150}
                alt='sponsor'
              />
            </span>

            <span className='sponsor'>
              <Image
                src={'/source/wellcome.png'}
                height={120}
                width={200}
                alt='sponsor'
              />
            </span>
          </div>
        </div>
        <div className='sponsors-container'>
          <h3>Promoters</h3>
          <div className='sponsors'>
            <span className='sponsor'>
              <Image
                src={'/source/bloomberg.png'}
                height={120}
                width={200}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/jmp.png'}
                height={130}
                width={150}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/redhat.png'}
                height={110}
                width={150}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/wiki.png'}
                height={130}
                width={200}
                alt='sponsor'
              />
            </span>
          </div>
        </div>
        <div className='sponsors-container'>
          <h3>Includers</h3>
          <div className='sponsors'>
            <span className='sponsor'>
              <Image
                src={'/source/anaconda.jpg'}
                height={150}
                width={200}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/css.png'}
                height={60}
                width={160}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/collab.png'}
                height={100}
                width={150}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/consort.jpg'}
                height={80}
                width={200}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/debian.png'}
                height={100}
                width={200}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/ebay.png'}
                height={100}
                width={200}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/fedora.png'}
                height={100}
                width={200}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/gnome.png'}
                height={100}
                width={200}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/igalia.png'}
                height={100}
                width={200}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/hopkins.png'}
                height={100}
                width={200}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/matrix.png'}
                height={100}
                width={200}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/num.png'}
                height={100}
                width={200}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/ocaml.png'}
                height={100}
                width={200}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/perl.png'}
                height={100}
                width={200}
                alt='sponsor'
              />
            </span>
            <span className='sponsor'>
              <Image
                src={'/source/open.png'}
                height={70}
                width={100}
                alt='sponsor'
              />
            </span>
          </div>
        </div>
      </Wrapper5>
    </Wrapper>
  );
};

Home.Layout = UnauthenticatedLayout;
export default Home;

const Wrapper = styled.main`
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    text-align: center;
    width: 100%;
    height: calc(100vh - 7rem);
    background-image: linear-gradient(
        to right bottom,
        rgba(0, 0, 0, 0.8),
        rgba(0, 0, 0, 0.8)
      ),
      url('jpg/clay.jpg');
    background-size: cover;
    background-position: center;

    h4 {
      font-size: 2.4rem;
      width: 70%;
      color: white;
    }
  }
  .cards-container {
    display: flex;
    justify-content: space-around;
  }
`;

const Wrapper1 = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 15rem;
  padding-bottom: 5rem;
  .display {
    opacity: 1;
  }
  .display-none {
    opacity: 0;
  }
  .text-area {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    width: 45%;
    .icon {
      display: flex;
      align-self: center;
    }

    .text-arrow {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
  }
  .image-area {
    box-shadow: 0 1.5rem 4rem ${black};
    // border-radius: 2px;
    outline-offset: 2rem;
    outline: 1.5rem solid ${green};

    width: 45%;
    height: 50rem;
    background-image: url('jpg/christina.jpg');
    background-size: cover;
    background-position: center;
  }
`;

const Wrapper2 = styled.section`
  .diversity-section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .display {
      opacity: 1;
    }
    .display-none {
      opacity: 0;
    }
    .pride {
      display: flex;
      align-items: center;
      justify-content: center;
      background-image: url('jpg/pride_flag.jpg');
      background-size: cover;
      background-position: center;
      box-shadow: 0 1.5rem 4rem ${black};
      height: 54rem;
      width: 45%;
      /* border-radius: 5px; */
      outline-offset: 2rem;
      outline: 1.5rem solid ${green};

      .earth {
        width: 30rem;
        height: 30rem;
        background: url('/jpg/earth.jpg');
        border-radius: 50%;
        background-size: 61rem;

        box-shadow: inset 8px 36px 80px 36px rgb(0, 0, 0),
          inset -6px 0 12px 4px rgba(255, 255, 255, 0.3);
        animation-name: rotate;
        animation-duration: 12s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        -webkit-animation-name: rotate;
        -webkit-animation-duration: 12s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
      }
    }

    .text-area {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
      width: 45%;
      ul {
        font-size: 1.8rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      i {
        font-size: 1.4rem;
      }
    }
  }

  span {
    display: block;
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;
    margin-top: 2rem;
  }
  @keyframes rotate {
    from {
      background-position: 0px 0px;
    }
    to {
      background-position: 500px 0px;
    }
  }
  @-webkit-keyframes rotate {
    from {
      background-position: 0px 0px;
    }
    to {
      background-position: 500px 0px;
    }
  }
`;

const Wrapper3 = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 80rem;
  width: 100%;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.5)
    ),
    url('jpg/board.jpg');
  /* background-image: url('jpg/board.jpg'); */
  background-size: cover;
  background-position: center;
  .calender {
    position: absolute;
    right: 5%;
    transform: rotateZ(-10deg);
  }
  .title-card-container {
    /* margin-bottom: 2rem; */
    h4 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: ${white};
    }
    .date-card-container {
      display: flex;
      gap: 2rem;
      /* flex-direction: column; */
      .date-card {
        display: flex;
        align-items: center;
        justify-content: center;
        /* height: 15rem; */
        padding: 2rem;
        font-size: 1.6rem;
        font-weight: 700;
        border-radius: 10px;
        color: white;
        background-color: whitesmoke;
        width: 20%;
        border: 2px solid ${green};
        background-image: linear-gradient(
            to right bottom,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          ),
          url('jpg/pride_love.jpg');
        background-position: bottom;
        background-size: cover;
      }
    }
  }
`;

const Wrapper4 = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  .bg-video {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
    opacity: 0.15;

    &__content {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

const Wrapper5 = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  .sponsors-container {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    h3 {
      font-size: 2.5rem;
    }
    .sponsors {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 4rem;
      flex-wrap: wrap;
      .sponsor {
        /* margin-bottom: 1rem; */
      }
    }
  }
`;

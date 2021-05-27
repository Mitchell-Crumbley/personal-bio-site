import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProjectView from './ProjectView';
import TechnologyView from './TechnologyView';
import AboutMe from '../components/AboutMe';
import wallpaper from '../assets/wallpaper.jpg';
import nameLogo2 from '../assets/nameLogo2.png';
import Contact from '../components/Contact.Js';

const BannerDiv = styled.div`
background: linear-gradient(to bottom,rgba(22,22,22,.1) 0,rgba(22,22,22,.5) 75%,#161616 100%), url(${wallpaper});
background-color: #00000080;
background-attachment: scroll;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
height: 1200px;
color: #fffbf0;
font-weight: 400;
font-family: 'Aquire';
font-style: normal;
font-size: 22px;
padding: 35px 15% 30%
`;

// const imgStyle = {
//   width: '40%',
//   height: '40%',
//   margin: '20px',
//   borderRadius: '25px'
// };

export default function Home() {
  return (
    <div>
      <BannerDiv>
      <img src={nameLogo2}></img>
      </BannerDiv>
      <AboutMe />
      <TechnologyView />
      <ProjectView />
      <Contact />
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};

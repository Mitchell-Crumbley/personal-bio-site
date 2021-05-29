import React from 'react';
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import SaltFlat from '../assets/SaltFlat.png';

const divTextStyle = {
  textAlign: 'start',
  float: 'right',
  right: '100px',
  top: '250px',
  width: '1350px',
  position: 'relative',
  textShadow: '2px 2px black'
};

const typeTextStyle = {
  width: '550px',
  height: '120px',
  textAlign: 'start',
  display: 'flex',
  position: 'absolute',
  left: '50px',
  textShadow: '2px 2px black',
  bottom: '-350px'
};

// const jokes = [
//   'If you can describe yourself in one word you should read more', 'This morning my shoes were tied, now the left one is winning',
//   'My favorite icebreaker to use is the chisel',
//   'Why do books have an appendix? It feels like we can take those out'
// ];

// const randomJokeGenerator = jokes[Math.floor(Math.random() * jokes.length)];

const AboutMeDiv = styled.div`
background: linear-gradient(to top,rgba(22,22,22,.1) 0,rgba(22,22,22,.15) 75%,#161616 100%), linear-gradient(to bottom,rgba(22,22,22,.05) 0,rgba(22,22,22,.05) 75%,#161616 100%), url(${SaltFlat});
background-color: #00000080;
background-repeat: no-repeat;
background-size: cover;
background-position: 50% 55%;
height: 1200px;
width: 100%;
color: #fffbf0;
font-weight: 400;
font-style: normal;
font-size: 28px;
`;

export default function AboutMe() {
  return (
    <AboutMeDiv>
      <div style={typeTextStyle}>
      <Typewriter
       options={{
         strings: ['"Why do books have an appendix? It feels like we can take those out."', '"I tried donating blood last week but they kept asking where I got it from."', '"If you can describe yourself in one word you should read more."', '"This morning my shoes were tied, now the left one is winning."', '"If a police office falls down and no one is around to see it, do they get backup?"'],
         autoStart: true,
         loop: true,
         delay: 40,
         pauseFor: 2500,
         deleteSpeed: 20
       }}
/>
</div>
    <div style={divTextStyle}>
      <h1>About Me</h1>
      <p>Hello! My name is Mitchell Crumbley. I am a software developer, designer, and ... living and thriving in Nashville, TN. </p>

        <p>I moved to Nashville from Birmingham, Alabama in 2014 to pursue a career in radio broadcasting and become the first in our family to live outside the state. I spent the next few years working as an information security risk auditor and moonlighting as a stand up comedian. After 5 years of critiquing finished products I decided that I wanted to try my hand at building them.</p>

        <p>It was then that I began my path through Nashville Software School. I started the Part-Time Web Development program in January 2021. I knew I was going to enjoy coding when I completed our first assignment, looked over at the clock, and it read 3:45 AM. It simultaneously forces the use of both the critical thinking and creative sides of the brain. Few things have captured my focus the way software development has and I cannot wait for more.</p>

        <p>As a developer, I put my emphasis on both form and function. As a comedian, I cannot help but add some levity to all I do. </p>
      </div>
    </AboutMeDiv>
  );
}

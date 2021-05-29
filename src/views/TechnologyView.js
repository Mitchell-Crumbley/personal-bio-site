import React from 'react';
import Marquee from 'react-fast-marquee';
import htlm5 from '../assets/html5.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import photoshop from '../assets/photoshop.png';
import css from '../assets/css.png';
import github from '../assets/github.png';
import postman from '../assets/postman.png';
import firebase from '../assets/firebase.png';
import figma from '../assets/figma.png';
import bootstrap from '../assets/bootstrap.png';
import sass from '../assets/sass.png';
import git from '../assets/git.png';

const techStyle = {
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'rgba(22,22,22, 1)',
  textShadow: '2px 2px black',
  background: 'linear-gradient(to top,rgba(80, 80, 80, 2) 0,rgba(25, 25, 25, 1) 75%,#161616 100%), linear-gradient(to bottom,rgba(5, 5, 5, 50) 0,rgba(75, 75, 75, 5) 75%,#161616 100%)',
};

const iconStyle = {
  margin: '30px',
  paddingLeft: '25px',
  paddingRight: '25px',
  height: '120px',
};

const TitleStyles = {
  fontSize: '50px',
  textShadow: '3px 3px black'
};

export default function Technologies() {
  return (
    <div id='technologies' style={techStyle}>
      <h1 style={TitleStyles}>Technologies </h1>
      <Marquee gradientColor={[120, 120, 120, 2]} speed={60}>
        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/HTML5"><img style={iconStyle} src={htlm5} alt='' /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/JavaScript"> <img style={iconStyle} src={javascript} alt=''/></a>
        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"> <img style={iconStyle} src={react} alt=''/> </a>
        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Node.js"> <img style={iconStyle} src={node} alt=''/> </a>
        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Adobe_Photoshop"> <img style={iconStyle} src={photoshop} alt=''/> </a>
        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/CSS"> <img style={iconStyle} src={css} alt=''/> </a>
        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/GitHub"> <img style={iconStyle} src={github} alt=''/> </a>
        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Firebase"> <img style={iconStyle} src={firebase} alt=''/> </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.postman.com/"> <img style={iconStyle} src={postman} alt=''/> </a>
        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Figma_(software)"> <img style={iconStyle} src={figma} alt=''/> </a>
        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)"> <img style={iconStyle} src={bootstrap} alt=''/> </a>
        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Git"> <img style={iconStyle} src={git} alt=''/> </a>
        <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"> <img style={iconStyle} src={sass} alt=''/> </a>
      </Marquee>
    </div>
  );
}

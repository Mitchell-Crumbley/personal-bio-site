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

export default function Technologies() {
  return (
    <div id='technologies' style={techStyle}>
      <h1>Technologies </h1>
      <Marquee gradientColor={[120, 120, 120, 2]} speed={60}>
        <img style={iconStyle} src={htlm5} alt=''/>
        <img style={iconStyle} src={javascript} alt=''/>
        <img style={iconStyle} src={react} alt=''/>
        <img style={iconStyle} src={node} alt=''/>
        <img style={iconStyle} src={photoshop} alt=''/>
        <img style={iconStyle} src={css} alt=''/>
        <img style={iconStyle} src={github} alt=''/>
        <img style={iconStyle} src={firebase} alt=''/>
        <img style={iconStyle} src={postman} alt=''/>
        <img style={iconStyle} src={figma} alt=''/>
        <img style={iconStyle} src={bootstrap} alt=''/>
        <img style={iconStyle} src={git} alt=''/>
        <img style={iconStyle} src={sass} alt=''/>
      </Marquee>
    </div>
  );
}

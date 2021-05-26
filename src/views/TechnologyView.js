import React from 'react';
import Marquee from 'react-fast-marquee';
import htlm5 from '../assets/html5.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';

const techStyle = {
  marginTop: '65px'
};

const iconStyle = {
  margin: '30px'
};

export default function Technologies() {
  return (
    <div id='technologies' style={techStyle}>
      <h1>Technologies</h1>
      <Marquee pauseOnHover='true' gradientColor={[255, 251, 240]} speed={20}>
        <img style={iconStyle} src={htlm5} alt=''/>
        <img style={iconStyle} src={javascript} alt=''/>
        <img style={iconStyle} src={react} alt=''/>
      </Marquee>
    </div>
  );
}

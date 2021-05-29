import React from 'react';
import styled from 'styled-components';
import Motherboard from '../assets/Motherboard.jpeg';

const ContactDiv = styled.div`
background-image: url(${Motherboard});
background-size: cover;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100%;
color: white;
font-weight: 400;
font-style: normal;
font-size: 38px;
text-shadow: 2px 2px black;
background: linear-gradient(to top,rgba(22,22,22,.1) 0,rgba(22,22,22,.15) 75%,#161616 100%), linear-gradient(to bottom,rgba(22,22,22,.05) 0,rgba(22,22,22,.05) 75%,#161616 100%),
background-color: black;
height: 400px;
`;

const LinkDiv = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
width: 100%;
font-size: 48px
margin: auto;
color: black;
background: linear-gradient(to top,rgba(22,22,22,.1) 0,rgba(22,22,22,.15) 75%,#161616 100%), linear-gradient(to bottom,rgba(22,22,22,.05) 0,rgba(22,22,22,.05) 75%,#161616 100%),
background-color: #00000080;
`;

const LinkStyle = {
  color: 'white',
  margin: '10px'
};

export default function Contact() {
  return (
    <div>
      <ContactDiv>
        <h1>Reach Me</h1>
        <LinkDiv>
          <ul id='contactList'>
           <li style={LinkStyle}><a className="btn m2 btn-outline-light btn-social text-center rounded-circle far fa-envelope" href='https://mail.google.com/mail/u/0/?fs=1&to=mitchellcrumbley@gmailcom&su=SUBJECT&body=BODY&&tf=cm' target="_blank" rel="noopener noreferrer" />
            <a style={LinkStyle} href='https://mail.google.com/mail/u/0/?fs=1&to=mitchellcrumbley@gmailcom&su=SUBJECT&body=BODY&&tf=cm' target="_blank" rel="noopener noreferrer"> mitchellcrumbley@gmail.com</a>  </li>
           <li style={LinkStyle}><a className="btn btn-outline-light btn-social text-center rounded-circle fab fa-github" href='https://github.com/Mitchell-Crumbley' target="_blank" rel="noopener noreferrer" />
            <a style={LinkStyle} href='https://github.com/Mitchell-Crumbley' target="_blank" rel="noopener noreferrer"> https://github.com/Mitchell-Crumbley </a> </li>
           <li style={LinkStyle}><a className="btn m2 btn-outline-light btn-social text-center rounded-circle fab fa-linkedin" href='https://www.linkedin.com/in/mitchell-crumbley/' target="_blank" rel="noopener noreferrer" />
            <a style={LinkStyle} href='https://www.linkedin.com/in/mitchell-crumbley' target="_blank" rel="noopener noreferrer"> https://www.linkedin.com/in/mitchell-crumbley/</a> </li>
          </ul>
        </LinkDiv>
        </ContactDiv>
    </div>
  );
}

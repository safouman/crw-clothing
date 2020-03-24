import React from 'react';
import { ContactContainer, ContactListItem } from './contact.styles';
import GithubLogo from '../../assets/github-logo.png';
import IgLogo from '../../assets/ig-logo.png';
import MediumLogo from '../../assets/medium-logo.png';
const ContactPage = () => (
  <ContactContainer>
    <ul>
      <ContactListItem>
        <h2>This Work Was Made By</h2>
      </ContactListItem>
      <ContactListItem target="_blank" href="https://github.com/safouman">
        <img
          src={GithubLogo}
          alt="github"
          className="Logo"
          style={{ width: '100px', padding: ' 15px' }}
        />
        <span> @safouman</span>
      </ContactListItem>
      <ContactListItem
        target="_blank"
        href="https://www.instagram.com/safouman/"
      >
        <img
          src={IgLogo}
          alt="github"
          className="Logo"
          style={{ width: '100px', padding: ' 20px' }}
        />
        <span> @safouman</span>
      </ContactListItem>
      <ContactListItem target="_blank" href="https://medium.com/@safouman">
        <img
          src={MediumLogo}
          alt="github"
          className="Logo"
          style={{ width: '100px', padding: ' 15px' }}
        />
        <span> @safouman</span>
      </ContactListItem>
    </ul>
  </ContactContainer>
);

export default ContactPage;

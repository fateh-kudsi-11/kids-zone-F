import React from 'react';
import styles from '../styles/socialLinks.module.scss';
const { socialLinksContainer } = styles;
const socialLinks = () => {
  return (
    <div className={socialLinksContainer}>
      <a href='http://facebook.com' target='_blank'>
        <img src='/icons/facebook.svg' alt='facebook-icons' />
      </a>
      <a href='http://instagram.com' target='_blank'>
        <img src='/icons/instagram.svg' alt='' />
      </a>
      <a href='http://snapchat.com' target='_blank'>
        <img src='/icons/snapchat.svg' alt='' />
      </a>
      <a href='http://twitter.com' target='_blank'>
        <img src='/icons/twitter.svg' alt='' />
      </a>
    </div>
  );
};

export default socialLinks;

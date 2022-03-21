import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';


const Footer = (props) => {

  return (
    <div className="footer">
      <div className="social-media">
        <InstagramIcon/>
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
        <p> &copy; 2022 getawaytrips.com</p>
    </div>
  )
}

export default Footer;
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import './Footer.css'
 
 function Footer() {

  return (
    <div className='footer'>
        <ul>
          
        <li>{<FacebookIcon />} </li>

        <li>{<TwitterIcon />} </li>
        
        <li>{<InstagramIcon />}</li>
        
        </ul>

    </div>
  );
 }
 export default Footer;
 
 

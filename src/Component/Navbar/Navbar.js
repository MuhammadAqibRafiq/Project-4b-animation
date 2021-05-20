import React from 'react';
import './Navbar.css';
import Logo from './logo2.png';
import useWebAnimations from "@wellyshen/use-web-animations";
import CallIcon from '@material-ui/icons/Call';

function Navbar(){

  const { ref } = useWebAnimations({
      keyframes: [{ transform: 'translate(0,0)' }, { transform: 'translate(1500px,0)' },{ transform: 'translate(0px,0)' }],
    timing: {
      duration: 3000,
      iterations: 1, 
      easing: "ease-in-out", 
    }
  });

return (
//  <div  className="Main" data-aos='fade-down'>
<div  className="Main-nav"  ref={ref}>

     <div className='logo'>
         <img src={Logo} alt=''></img>
     </div>

     <div className='call'>
     {<CallIcon />}
     </div>
     
    <div className="Navbar">
    <ul>
      <li >HOME</li>
      <li >PRODUCT</li>
      <li >SERVICES</li>
      <li >CONTACT</li>
    </ul>    
    </div >

    <div className="search">
    <input placeholder='Search...'/>
    </div>

    </div>
  );
}

export default Navbar;

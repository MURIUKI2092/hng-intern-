import React from 'react';
import {RiArrowRightCircleLine} from "react-icons/ri";


function Profile() {
  return (
   <>
        <div className='profile-container'>
            <div className='profile'> 
            <img id='profile_img' className='profile-pic' src='images/jackson.png' alt='Profile'/>
            <p id='twitter' className='twitter-name'>Jackson Otieno</p>
            <p id='slack' className='slack-name'>Jackson</p>
            </div>

            <div className='react-icon'>
              <RiArrowRightCircleLine/>
            </div>
        </div>
   </>
  )
}

export default Profile;

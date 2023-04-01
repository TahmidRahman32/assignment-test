import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Blogs.css';
import { addHenlar } from '../utilities/Utilities';

const Blogs = (props,add) => {
   const { name, picture, title, profile, registered, minread } = props?.container || {};
   const addIconHandler = props.addIconHandler;
   
   
   return (
      <nav className='blogs'>
         <div>
            <img src={picture} alt=""/>            
            <div className='profile-img'>
               <img src={profile} alt="" />
               <div className='min-read'>
                  <div>
                     <p> {name}</p>
                     <pre><small>{registered}</small></pre>
                  </div>
                  <div>
                     <p>{minread} min read<FontAwesomeIcon onClick={() => addIconHandler(props.container)}icon={faBookmark} /></p>
                  </div>
               </div>
            </div>
            <h2>{title}</h2>
         </div>
         <pre><small>#beginners #programming</small></pre>
         <a onClick={() => add(minread)} href="">Mark as read</a>
         <hr />
      </nav>
   );
};

export default Blogs;
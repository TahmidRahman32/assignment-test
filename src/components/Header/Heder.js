import React from 'react';
import './Header.css';

const Heder = () => {
   return (
      <header className='header-container'>
         <div>
         <h2>My Programming page</h2>
         </div>
         <div>
         <a href="/about">About</a>
         <a href="/blogs">Blogs</a>
         <a href="/login">Login</a>
         </div>
      </header>
   );
};

export default Heder;
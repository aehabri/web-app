import React from 'react';
import video from '../../video.mp4';
import './index.scss';

export default () => (
  <header className="header container">
    <div className="header__fullscreen-video-wrap">
      <video src={video} autoPlay loop muted>
      </video>
    </div>
    <div className="header__overlay" />
    <div className="header__content">
      <h1>Welcome To This Website</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id temporibus
        perferendis necessitatibus numquam amet impedit explicabo? Debitis quasi
        ullam aperiam!
      </p>
      <a href="#" className="btn header__btn">Login</a>
      <a href="#" className="btn header__btn">Sign Up</a>
    </div>
  </header>
);

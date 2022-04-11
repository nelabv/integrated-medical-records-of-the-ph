import React from 'react';
import homepageImg from "../styling/assets/vector-illustration_homepage.png";
import { Link } from 'react-router-dom';

export default function HomepageBanner() {
  return (
      <div className="max-width homepage" >
          <div className="homepage--text">
            <h1 className="homepage--h1">Your <span className="teal--highlight">medical records </span>in <span className='orange--highlight'>one tap.</span></h1>
            
            <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam.</p>

            <Link to="/login/as">
              <button className="btn--primary">Try A Tester Account</button>
            </Link>
          </div>

          <div className="homepage--img">
            <img src={homepageImg} alt="IMRP 2021" />
          </div>
      </div>
  );
}

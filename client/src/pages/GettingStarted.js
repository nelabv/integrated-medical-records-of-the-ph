import React from 'react';
import NavHandler from '../components/Nav/NavHandler';
import { FaMobileAlt } from 'react-icons/fa';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function GettingStarted() {
  return (
    <>
      <NavHandler />

      <div className='getting-started'>
            <div className='heading'>
                <FaMobileAlt size="2em" />
                <h2>How it works</h2>
            </div>

            <p className='block-text'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>

            <Link to='login/as' >
              <button className='primary-btn'>Try a Tester Account</button>
            </Link>
      </div>

      <Footer />
    </>
  );
}

export default GettingStarted;

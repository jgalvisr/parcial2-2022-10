import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import './NavBar.scss';

export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#main'>
          <FormattedMessage id='title' />
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                <FormattedMessage id='pokemons' />
              </Link>
            </li>
            <li className='nav-item active'>
              <Link className='nav-link' to='/report'>
                <FormattedMessage id='report' />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

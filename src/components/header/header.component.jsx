import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='options' to='/shop'>
        SHOP
      </Link>
      <Link className='options' to='/contact'>
        CONTACT
      </Link>
      { currentUser ? (
        <div className='options' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='options' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selcetors';

import MenuItem from '../menu-item/menu-item.component';

import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    { sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);   

const mapStateToProps = ({  })

export default Directory;
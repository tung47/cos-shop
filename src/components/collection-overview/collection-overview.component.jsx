import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionPreview } from '../collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

const CollectionPreview = ({ collections }) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherSectionProps }) => (
        <CollectionPreview key={id} {...otherSectionProps} />
    ))}
  </div>
);

export default 
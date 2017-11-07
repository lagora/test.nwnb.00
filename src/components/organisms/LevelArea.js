import React from 'react';
// import { PropTypes } from 'prop-types';
import { Building } from './Building';

export const LevelArea = (props) => (
  <a-entity>
    <Building {...props} />
  </a-entity>
);

LevelArea.propTypes = {

};

export default LevelArea;

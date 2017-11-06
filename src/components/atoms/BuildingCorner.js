import React from 'react';
import { PropTypes } from 'prop-types';

export const BuildingCorner = props => (
  <a-box
    {...props}
    material="color: pink;"
  />
);

BuildingCorner.propTypes = {
  position: PropTypes.string.isRequired,
};

export default BuildingCorner;

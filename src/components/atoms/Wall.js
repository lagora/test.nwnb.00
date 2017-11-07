import React from 'react';
import { PropTypes } from 'prop-types';

export const Wall = (props) =>
  <a-box
    { ...props }
    static-body
  />;

export default Wall;

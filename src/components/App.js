import React from 'react';
import { bindActionCreators as binder } from 'redux';
import { connect } from 'react-redux';
import { actions as unboundActions } from '../modules/actions';
import { actionMapper } from '../utils';
// import { PropTypes } from 'prop-types';
import { Level } from './organisms/Level';
import Axes from './services/Axes'; // eslint-disable-line
import { v4 } from 'uuid';
import { hash as h } from 'spark-md5';

export const App = (props) => {
  if (props.level.size < 0) {
    const uuid = v4();
    const hash = h(uuid);
    props.actions.level.resetLevel({ hash, size: 8 });
    return false;
  }
  return (
    <Axes>
      <Level {...props} />
    </Axes>
  );
};

export default connect(
  state => state,
  actionMapper(unboundActions)(binder),
)(App);

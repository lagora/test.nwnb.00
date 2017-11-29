import React from 'react';
// import { PropTypes } from 'prop-types';
import { bindActionCreators as binder } from 'redux';
import { connect } from 'react-redux';
import { actions as unboundActions } from '../../modules/actions';
import { actionMapper } from '../../utils';
import { Controls } from '../services//Controls';
import { Player } from './Player';
import { PlayerCamera } from '../atoms/PlayerCamera';
import { Level } from './Level';

export const Game = (props) => {
  const { actions, camera, debug, game, player, world } = props;
  if (game.seed === undefined) {
    actions.game.getSeed();
  }
  return (
    <a-scene
      shadow="type: basic"
      shadowBias="0.1"
      fog={`type: exponential; color: #${world.light.mode === 'night' ? '000' : 'ccccff'}; density: 0.0015`}
      physics="debug: true"
      effects="bloom"
      bloom="filter: bloom!, bloom.filter, #customFilter"
    >
      <Controls {...props} />
      <Level {...props} />
      <Player {...player} debug={debug} camera={camera} />
    </a-scene>
  );
};

export default connect(
  state => state,
  actionMapper(unboundActions)(binder),
)(Game);

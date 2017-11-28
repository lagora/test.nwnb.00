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
      shadow="type: pcfsoft"
      fog={`type: exponential; color: #${world.light.mode === 'night' ? '000' : 'ccccff'}; density: 0.0015`}
      physics="debug: true"
    >
      <Controls {...props} />
      <Level {...props} />
      <Player {...player} debug={debug} camera={camera} />
      <a-sky src="https://upload.wikimedia.org/wikipedia/commons/8/83/Equirectangular_projection_SW.jpg"></a-sky>
    </a-scene>
  );
};

export default connect(
  state => state,
  actionMapper(unboundActions)(binder),
)(Game);

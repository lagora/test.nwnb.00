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
      <PlayerCamera
        {...player.self}
        preset={camera.preset}
      />
    </a-scene>
  );
};

// Game.propTypes = {
//   actions: PropTypes.shape({
//     game: PropTypes.shape({
//       getSeed: PropTypes.func.isRequired,
//     }).isRequired,
//   }).isRequired,
//   camera: camera, // eslint-disable-line
//   game: PropTypes.shape({
//     hash: PropTypes.string.isRequired,
//     seed: PropTypes.string.isRequired,
//   }).isRequired,
//   level: PropTypes.shape({}).isRequired,
//   world: PropTypes.shape({
//     light: PropTypes.shape({
//       mode: PropTypes.oneOf(['day', 'night']).isRequired,
//     }).isRequired,
//   }).isRequired,
// };

export default connect(
  state => state,
  actionMapper(unboundActions)(binder),
)(Game);

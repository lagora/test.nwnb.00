import React from 'react';
import { PropTypes } from 'prop-types';
import { Ground } from '../atoms/Ground';
import { Light } from '../atoms/Light';
// import { LevelArea } from './LevelArea';
import { Player } from './Player';
import { camera, position, rotation } from '../proptypes';
// import { makeAreas } from '../../utils';

export const Level = props => (
  <a-entity>
    <Light mode={props.world.light.mode} />
    <Ground />
    <a-sky color={props.world.light.mode === 'night' ? '#000' : '#fff'} />
    <Player {...props.player} camera={{ ...props.camera }} />
    <a-box position="40 1.5 37.5" shadow="receive: true;" />
    {/* {makeAreas(LevelArea)(props.level.areas)} */}
  </a-entity>
);

Level.propTypes = {
  camera: camera.isRequired, // eslint-disable-line
  level: PropTypes.shape({
    size: PropTypes.number.isRequired,
  }).isRequired,
  player: PropTypes.shape({
    self: PropTypes.shape({
      position,
      rotation,
    }).isRequired,
  }).isRequired,
  world: PropTypes.shape({
    light: PropTypes.shape({
      mode: PropTypes.oneOf(['day', 'night']).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Level;

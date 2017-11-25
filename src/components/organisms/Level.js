import React from 'react';
import { PropTypes } from 'prop-types';
import { Ground } from '../atoms/Ground';
import { Light } from '../atoms/Light';
import { LevelArea } from './LevelArea';
import { Player } from './Player';
import { makeAreas } from '../../utils';

export const Level = ({
  camera, level, player, world,
}) => (
  <a-entity>
    <Light mode={world.light.mode} />
    <Ground />
    <a-sky color={world.light.mode === 'night' ? '#000' : '#fff'} />
    <Player {...player} camera={{ ...camera }} />
    <a-box position="40 1.5 37.5" shadow="receive: true;" />
    {makeAreas(LevelArea)(level.areas)}
  </a-entity>
);

Level.propTypes = {
  camera: PropTypes.shape({
    player: PropTypes.shape({
      thirdPerson: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  level: PropTypes.shape({
    size: PropTypes.number.isRequired,
  }).isRequired,
  player: PropTypes.shape({
    self: PropTypes.shape({
      position: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        z: PropTypes.number.isRequired,
      }).isRequired,
      rotation: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        z: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  world: PropTypes.shape({
    light: PropTypes.shape({
      mode: PropTypes.oneOf(['day', 'night']).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Level;

import React from 'react';
import { PropTypes } from 'prop-types';
import { Ground } from '../atoms/Ground';
import { Light } from '../atoms/Light';
import { LevelArea } from './LevelArea';
import { Player } from './Player';
import { makeAreas } from '../../utils';

export const Level = ({ level, player, world }) => (
  <a-entity>
    <Light mode={world.light.mode} />
    <Ground />
    <a-sky color={world.light.mode === 'night' ? '#000' : '#fff'} />
    <Player {...player} />
    {/* <a-entity
      id="camera"
      camera="fov: 80; zoom: 1;"
      position="0 2 5"
      orbit-controls={[
        ['autoRotate', false],
        ['target', '#player'],
        ['enableDamping', true],
        ['dampingFactor', 0.125],
        ['rotateSpeed', 0.25],
        ['minDistance', 3],
        ['maxDistance', 100],
      ].map(markup => markup.join(':')).join(';')}
      mouse-cursor=""
    /> */}
    <a-box position="40 1.5 37.5" shadow="receive: true;" />
    {makeAreas(LevelArea)(level.areas)}
  </a-entity>
);

Level.propTypes = {
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

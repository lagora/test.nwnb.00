import React from 'react';
import { PropTypes } from 'prop-types';
import { Ground } from '../atoms/Ground';
import { Light } from '../atoms/Light';
import { LevelArea } from './LevelArea';
import { Player } from './Player';
import { makeAreas } from '../../utils';

export const Level = ({ level, player, world }) => {
  return (
    <a-entity>
      <Light mode={world.light.mode} />
      <Ground />
      <a-sky color={world.light.mode === 'night' ? '#000' : '#fff'} />
      <Player {...player} />
      <a-box position="40 1.5 37.5" shadow="receive: true;" />
      {makeAreas(LevelArea)(level.areas)}
    </a-entity>
  );
};

Level.propTypes = {
  world: PropTypes.shape({
    light: PropTypes.shape({
      mode: PropTypes.oneOf(['day', 'night']).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Level;

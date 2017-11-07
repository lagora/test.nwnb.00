import React from 'react';
import { Ground } from '../atoms/Ground';
import { Light } from '../atoms/Light';
import { LevelArea } from './LevelArea';
import { Player } from './Player';
import { makeAreas } from '../../utils';

export const Level = ({ level }) => (
  <a-scene shadow="type: pcfsoft" physics="debug: true">
    <Light />
    <Ground />
    {makeAreas(level.areas)}
    <Player
      position={{ x: (level.size * 5), y: level.size * 0, z: (level.size * 5)}}
      rotation={{ x: 0, y: 45, z: 0 }}
    />
  </a-scene>
);

Level.propTypes = {};

export default Level;

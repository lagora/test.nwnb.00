import React from 'react';
import { Ground } from '../atoms/Ground';
import { Light } from '../atoms/Light';
import { LevelArea } from './LevelArea';
import { Player } from './Player';
import { makeAreas } from '../../utils';

export const Level = ({ level }) => (
  <a-scene
    shadow="type: pcfsoft"
    fog="type: exponential; color: #000; density: 0.0015"
    physics="debug: true"
  >
    <Light />
    <Ground />
    <a-sky color="#000" />
    <Player
      position={{ x: (level.size * 5), y: level.size * 0, z: (level.size * 5)}}
      rotation={{ x: 0, y: 0, z: 0 }}
    />
    <a-box position="40 1.5 37.5" shadow="receive: true;" />
    {makeAreas(LevelArea)(level.areas)}
  </a-scene>
);

Level.propTypes = {};

export default Level;

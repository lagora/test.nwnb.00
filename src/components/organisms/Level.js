import React from 'react';
import { Ground } from '../atoms/Ground';
import { Light } from '../atoms/Light';
import { LevelArea } from './LevelArea';
import { Player } from './Player';

export const Level = props => (
  <a-scene
    shadow="type: pcfsoft"
    physics="debug: true">
    <Light />
    <Ground />
    {props.level.areas.map(p =>
      <LevelArea key={`level-area-${JSON.stringify(p)}`} { ...p} />
    )}
    <Player
      position={{
        x: (props.level.size * 5),
        y: props.level.size * 0,
        z: (props.level.size * 5),
      }}
      rotation={{
        x: 0,
        y: 45,
        z: 0,
      }}
    />
  </a-scene>
);

Level.propTypes = {
};

export default Level;

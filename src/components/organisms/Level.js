import React from 'react';
import { PropTypes } from 'prop-types';
import { Ground } from '../atoms/Ground';
import { Light } from '../atoms/Light';
// import { LevelArea } from './LevelArea';
import { camera, level, player, world } from '../proptypes';
// import { makeAreas } from '../../utils';
import { TestLevel } from './TestLevel';

export const Level = (props) => {
  const levelSymbol = props.actions.game.getLevelSymbol();
  return (
    <a-entity>
      <Light mode={props.world.light.mode} />
      <Ground />
      <a-sky color={props.world.light.mode === 'night' ? '#000' : '#fff'} />
      {/* <a-box position="40 1.5 37.5" shadow="receive: true;" /> */}
      {/* {makeAreas(LevelArea)(props.level.areas)} */}
      {levelSymbol === '0' ? <TestLevel {...props } /> : false}
    </a-entity>
  );
};

Level.propTypes = {
  camera: camera.isRequired,
  level: level.isRequired,
  player: player.isRequired,
  world: world.isRequired,
};

export default Level;

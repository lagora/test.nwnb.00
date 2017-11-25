import React from 'react';
import { PropTypes } from 'prop-types';
import { Ground } from '../atoms/Ground';
import { Light } from '../atoms/Light';
import { LevelArea } from './LevelArea';
import { Player } from './Player';
import { makeAreas } from '../../utils';

export const Level = ({ level, player }) => (
  <a-scene
    shadow="type: pcfsoft"
    fog={`type: exponential; color: #${level.lightMode === 'night' ? '000' : 'ccccff'}; density: 0.0015`}
    physics="debug: true"
  >
    <Light mode={level.lightMode} />
    <Ground />
    <a-sky color={level.lightMode === 'night' ? '#000' : '#fff'} />
    <Player {...player} />
    <a-box position="40 1.5 37.5" shadow="receive: true;" />
    {makeAreas(LevelArea)(level.areas)}
  </a-scene>
);

Level.propTypes = {
  level: PropTypes.shape({}).isRequired,
};

export default Level;

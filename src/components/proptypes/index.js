import { bool, number, shape } from 'prop-types';

export const camera = shape({
  player: shape({
    thirdPerson: bool.isRequired,
  }).isRequired,
}).isRequired;

export const position = shape({
  x: number.isRequired,
  y: number.isRequired,
  z: number.isRequired,
}).isRequired;

export const rotation = shape({
  x: number.isRequired,
  y: number.isRequired,
  z: number.isRequired,
}).isRequired;

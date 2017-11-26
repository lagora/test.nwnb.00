import { number, oneOf, shape } from 'prop-types';
import { presets as cameraPresets } from '../../modules/camera';

export const position = {
  x: number.isRequired,
  y: number.isRequired,
  z: number.isRequired,
};

export const rotation = {
  x: number.isRequired,
  y: number.isRequired,
  z: number.isRequired,
};

export const playerSelf = shape({
  position: shape(position).isRequired,
  rotation: shape(rotation).isRequired,
});

export const camera = shape({
  preset: oneOf(cameraPresets).isRequired,
});

export const level = shape({
  size: number.isRequired,
});

export const player = shape({
  self: playerSelf.isRequired,
});

export const world = shape({
  light: shape({
    mode: oneOf(['day', 'night']).isRequired,
  }).isRequired,
});


import React from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators as binder } from 'redux';
import { connect } from 'react-redux';
import { actions as unboundActions } from '../../modules/actions';
import { actionMapper } from '../../utils';
import { camera } from '../proptypes';
import { Level } from './Level';

export class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seed: props.game.seed };
  }
  componentDidMount() {
    if (this.state.seed === undefined) {
      this.props.actions.game.getSeed();
    }
  }
  render() {
    return (
      <a-scene
        shadow="type: pcfsoft"
        fog={`type: exponential; color: #${this.props.world.light.mode === 'night' ? '000' : 'ccccff'}; density: 0.0015`}
        physics="debug: true"
      >
        <Level {...this.props} />
      </a-scene>
    );
  }
}

Game.propTypes = {
  actions: PropTypes.shape({
    game: PropTypes.shape({
      getSeed: PropTypes.func.isRequired,
    }).isRequired,
  }).isRequired,
  camera: camera, // eslint-disable-line
  game: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    seed: PropTypes.string.isRequired,
  }).isRequired,
  level: PropTypes.shape({}).isRequired,
  world: PropTypes.shape({
    light: PropTypes.shape({
      mode: PropTypes.oneOf(['day', 'night']).isRequired,
    }).isRequired,
  }).isRequired,
};

export default connect(
  state => state,
  actionMapper(unboundActions)(binder),
)(Game);

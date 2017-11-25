import React from 'react';
// import { bindActionCreators as binder } from 'redux';
// import { connect } from 'react-redux';
// import { actions as unboundActions } from '../modules/actions';
// import { actionMapper } from '../utils';
// import { Level } from './organisms/Level';
// import Axes from './services/Axes'; // eslint-disable-line
// import { v4 } from 'uuid';
// import { hash as h } from 'spark-md5';

import { Route, Switch } from 'react-router-dom';
import Game from './organisms/Game'; // eslint-disable-line

// export class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.toggleLightMode = this.toggleLightMode.bind(this);
//   }

//   componentWillMount() {
//     window.addEventListener('keyup', this.toggleLightMode);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keyup', this.toggleLightMode);
//   }

//   toggleLightMode({ key }) {
//       key === 'l' ?
//         this.props.actions.level.toggleLightMode() :
//         false
//   }

//   render () {
//     const { props } = this;
//     if (props.level.size < 0) {
//       const uuid = v4();
//       const hash = h(uuid);
//       props.actions.level.resetLevel({ hash, size: 8 });
//       return false;
//     }
//     return (
//       <Level {...props} />
//     );
//   }
// }

export const App = props => (
  <Switch>
    <Route path="/" component={Game} {...props} />
  </Switch>
);

// export default connect(
//   state => state,
//   actionMapper(unboundActions)(binder),
// )(App);

export default App;

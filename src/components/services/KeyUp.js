import React from 'react';

export const handleKeyUp = props => event => {
  if (event.code === props.code) {
    return props.action();
  }
  return false;
};

export class KeyUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
    window.test = props.action;
  }
  componentWillMount() {
    window.addEventListener('keyup', handleKeyUp(this.props));
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', handleKeyUp(this.props));
  }
  render() {
    return this.props.children ? this.props.children : false;
  }
}

export default KeyUp;

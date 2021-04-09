/**
 * title: 不可用
 * desc: Radio 不可用。
 */

import React from 'react';
import { FcRadio, FcButton } from '@ngfed/fc-components';

class App extends React.Component {
  state = {
    disabled: true,
  };

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <>
        <FcRadio defaultChecked={false} disabled={this.state.disabled}>
          Disabled
        </FcRadio>
        <FcRadio defaultChecked disabled={this.state.disabled}>
          Disabled
        </FcRadio>
        <br />
        <FcButton type="primary" onClick={this.toggleDisabled} style={{ marginTop: 16 }}>
          Toggle disabled
        </FcButton>
      </>
    );
  }
}

export default () => {
  return <App />;
};

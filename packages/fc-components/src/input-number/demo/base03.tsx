/**
 * title: 不可用
 * desc: 点击按钮切换可用状态。
 */

import React from 'react';
import { FcInputNumber, FcButton } from '@ngfed/fc-components';

class App extends React.Component {
  state = {
    disabled: true,
  };

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  };

  render() {
    return (
      <>
        <FcInputNumber min={1} max={10} disabled={this.state.disabled} defaultValue={3} />
        <div style={{ marginTop: 20 }}>
          <FcButton onClick={this.toggle} type="primary">
            Toggle disabled
          </FcButton>
        </div>
      </>
    );
  }
}

export default () => {
  return <App />;
};

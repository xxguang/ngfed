/**
 * title: 延迟
 * desc: 延迟显示 loading 效果。当 spinning 状态在 delay 时间内结束，则不显示 loading 状态。
 */

import React from 'react';
import { FcSpin, FcAlert, FcSwitch } from '@ngfed/fc-components';

class Card extends React.Component {
  state = { loading: false };

  toggle = (value) => {
    this.setState({ loading: value });
  };

  render() {
    const container = (
      <FcAlert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    );
    return (
      <div>
        <FcSpin spinning={this.state.loading} delay={500}>
          {container}
        </FcSpin>
        <div style={{ marginTop: 16 }}>
          Loading state：
          <FcSwitch checked={this.state.loading} onChange={this.toggle} />
        </div>
      </div>
    );
  }
}

export default Card;

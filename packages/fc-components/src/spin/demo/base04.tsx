/**
 * title: 卡片加载中
 * desc: 可以直接把内容内嵌到 FcSpin 中，将现有容器变为加载状态。
 */

import React from 'react';
import { FcSpin, FcSwitch, FcAlert } from '@ngfed/fc-components';

class Card extends React.Component {
  state = { loading: false };

  toggle = (value) => {
    this.setState({ loading: value });
  };

  render() {
    return (
      <div>
        <FcSpin spinning={this.state.loading}>
          <FcAlert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
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

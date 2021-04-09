/**
 * title: 基本
 * desc: 基本滑动条。当 range 为 true 时，渲染为双滑块。当 disabled 为 true 时，滑块处于不可用状态。
 */

import React from 'react';
import { FcSlider, FcSwitch } from '@ngfed/fc-components';

export default class Demo extends React.Component {
  state = {
    disabled: false,
  };

  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  };

  render() {
    const { disabled } = this.state;
    return (
      <>
        <FcSlider defaultValue={30} disabled={disabled} />
        <FcSlider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled: <FcSwitch size="small" checked={disabled} onChange={this.handleDisabledChange} />
      </>
    );
  }
}

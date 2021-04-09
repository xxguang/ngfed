/**
 * title: 带输入框的滑块
 * desc: 和 数字输入框 组件保持同步。
 */

import React from 'react';
import { FcSlider, FcInputNumber, FcRow, FcCol } from '@ngfed/fc-components';

export class IntegerStep extends React.Component {
  state = {
    inputValue: 1,
  };

  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <FcRow>
        <FcCol span={12}>
          <FcSlider
            min={1}
            max={20}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
          />
        </FcCol>
        <FcCol span={4}>
          <FcInputNumber
            min={1}
            max={20}
            style={{ margin: '0 16px' }}
            value={inputValue}
            onChange={this.onChange}
          />
        </FcCol>
      </FcRow>
    );
  }
}

class DecimalStep extends React.Component {
  state = {
    inputValue: 0,
  };

  onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <FcRow>
        <FcCol span={12}>
          <FcSlider
            min={0}
            max={1}
            onChange={this.onChange}
            value={typeof inputValue === 'number' ? inputValue : 0}
            step={0.01}
          />
        </FcCol>
        <FcCol span={4}>
          <FcInputNumber
            min={0}
            max={1}
            style={{ margin: '0 16px' }}
            step={0.01}
            value={inputValue}
            onChange={this.onChange}
          />
        </FcCol>
      </FcRow>
    );
  }
}

export default () => {
  return (
    <div>
      <IntegerStep />
      <DecimalStep />
    </div>
  );
};

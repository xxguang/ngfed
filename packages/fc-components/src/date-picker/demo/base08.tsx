/**
 * title: 三种大小
 * desc: 三种大小的输入框，若不设置，则为 `default`。
 */

import React from 'react';
import { FcDatePicker, FcSpace, FcRadio } from '@ngfed/fc-components';
const { RangePicker } = FcDatePicker;
class Demo extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <FcSpace direction="vertical" size={12}>
        <FcRadio.Group value={size} onChange={this.handleSizeChange}>
          <FcRadio.Button value="large">Large</FcRadio.Button>
          <FcRadio.Button value="default">Default</FcRadio.Button>
          <FcRadio.Button value="small">Small</FcRadio.Button>
        </FcRadio.Group>
        <FcDatePicker size={size} />
        <FcDatePicker size={size} picker="month" />
        <RangePicker size={size} />
        <FcDatePicker size={size} picker="week" />
      </FcSpace>
    );
  }
}

export default Demo;

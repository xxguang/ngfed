/**
 * title: Radio.Group 垂直
 * desc: 垂直的 Radio.Group，配合更多输入框选项。
 */

import React from 'react';
import { FcRadio, FcInput } from '@ngfed/fc-components';

class App extends React.Component {
  state = {
    value: 1,
  };

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    const { value } = this.state;
    return (
      <FcRadio.Group onChange={this.onChange} value={value}>
        <FcRadio style={radioStyle} value={1}>
          Option A
        </FcRadio>
        <FcRadio style={radioStyle} value={2}>
          Option B
        </FcRadio>
        <FcRadio style={radioStyle} value={3}>
          Option C
        </FcRadio>
        <FcRadio style={radioStyle} value={4}>
          More...
          {value === 4 ? <FcInput style={{ width: 100, marginLeft: 10 }} /> : null}
        </FcRadio>
      </FcRadio.Group>
    );
  }
}

export default () => {
  return (
    <>
      <App />
    </>
  );
};

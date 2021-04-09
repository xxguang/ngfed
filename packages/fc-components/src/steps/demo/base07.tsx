/**
 * title: 可点击
 * desc: 设置 `onChange` 后，Steps 变为可点击状态。
 */

import React from 'react';
import { FcSteps, FcDivider } from '@ngfed/fc-components';
const { Step } = FcSteps;

class Demo extends React.Component {
  state = {
    current: 0,
  };

  onChange = (current) => {
    console.log('onChange:', current);
    this.setState({ current });
  };

  render() {
    const { current } = this.state;

    return (
      <>
        <FcSteps current={current} onChange={this.onChange}>
          <Step title="Step 1" description="This is a description." />
          <Step title="Step 2" description="This is a description." />
          <Step title="Step 3" description="This is a description." />
        </FcSteps>

        <FcDivider />

        <FcSteps current={current} onChange={this.onChange} direction="vertical">
          <Step title="Step 1" description="This is a description." />
          <Step title="Step 2" description="This is a description." />
          <Step title="Step 3" description="This is a description." />
        </FcSteps>
      </>
    );
  }
}

export default Demo;

/**
 * title: 条件触发
 * desc: 可以判断是否需要弹出。
 */

import React from 'react';
import { FcPopconfirm, FcSwitch, FcMessage } from '@ngfed/fc-components';

class App extends React.Component {
  state = {
    visible: false,
    condition: true, // Whether meet the condition, if not show FcPopconfirm.
  };

  changeCondition = (value) => {
    this.setState({ condition: value });
  };

  confirm = () => {
    this.setState({ visible: false });
    FcMessage.success('Next step.');
  };

  cancel = () => {
    this.setState({ visible: false });
    FcMessage.error('Click on cancel.');
  };

  handleVisibleChange = (visible) => {
    if (!visible) {
      this.setState({ visible });
      return;
    }
    // Determining condition before show the FcPopconfirm.
    console.log(this.state.condition);
    if (this.state.condition) {
      this.confirm(); // next step
    } else {
      this.setState({ visible }); // show the FcPopconfirm
    }
  };

  render() {
    return (
      <div>
        <FcPopconfirm
          title="Are you sure delete this task?"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
          onConfirm={this.confirm}
          onCancel={this.cancel}
          okText="Yes"
          cancelText="No"
        >
          <a href="#">Delete a task</a>
        </FcPopconfirm>
        <br />
        <br />
        Whether directly execute：
        <FcSwitch defaultChecked onChange={this.changeCondition} />
      </div>
    );
  }
}

export default App;

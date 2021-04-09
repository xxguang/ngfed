/**
 * title: 进度圈动态展示
 * desc: 会动的进度条才是好进度条。
 */
import React from 'react';
import { FcProgress, FcButton } from '@ngfed/fc-components';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

class App extends React.Component {
  state = {
    percent: 0,
  };

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  };

  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  };

  render() {
    return (
      <>
        <FcProgress type="circle" percent={this.state.percent} />
        <FcButton.Group>
          <FcButton onClick={this.decline} icon={<MinusOutlined />} />
          <FcButton onClick={this.increase} icon={<PlusOutlined />} />
        </FcButton.Group>
      </>
    );
  }
}

export default App;

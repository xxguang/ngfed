/**
 * title: 动态
 * desc: 展示动态变化的效果。
 */

import React from 'react';
import { FcBadge, FcButton, FcSwitch } from '@ngfed/fc-components';
import { MinusOutlined, PlusOutlined, QuestionOutlined } from '@ant-design/icons';

const ButtonGroup = FcButton.Group;

class Demo extends React.Component {
  state = {
    count: 5,
    show: true,
  };

  increase = () => {
    const count = this.state.count + 1;
    this.setState({ count });
  };

  decline = () => {
    let count = this.state.count - 1;
    if (count < 0) {
      count = 0;
    }
    this.setState({ count });
  };

  random = () => {
    const count = Math.floor(Math.random() * 100);
    this.setState({ count });
  };

  onChange = (show) => {
    this.setState({ show });
  };

  render() {
    return (
      <div>
        <div>
          <FcBadge count={this.state.count}>
            <a href="#" className="head-example" />
          </FcBadge>
          <ButtonGroup style={{ marginLeft: 20 }}>
            <FcButton onClick={this.decline}>
              <MinusOutlined />
            </FcButton>
            <FcButton onClick={this.increase}>
              <PlusOutlined />
            </FcButton>
            <FcButton onClick={this.random}>
              <QuestionOutlined />
            </FcButton>
          </ButtonGroup>
        </div>
        <div style={{ marginTop: 10 }}>
          <FcBadge dot={this.state.show}>
            <a href="#" className="head-example" />
          </FcBadge>
          <FcSwitch onChange={this.onChange} checked={this.state.show} style={{ marginLeft: 20 }} />
        </div>
      </div>
    );
  }
}

export default Demo;

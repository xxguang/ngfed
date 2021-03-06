/**
 * title: 最后一个及排序
 * desc: 当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点，当 pending 为真值时展示幽灵节点，如果 pending 是 React 元素可用于定制该节点内容，同时 pendingDot 将可以用于定制其轴点。reverse 属性用于控制节点排序，为 false 时按正序排列，为 true 时按倒序排列。
 */

import React from 'react';
import { FcTimeline, FcButton } from '@ngfed/fc-components';

export default class PendingTimeLine extends React.Component {
  state = {
    reverse: false,
  };

  handleClick = () => {
    this.setState({ reverse: !this.state.reverse });
  };

  render() {
    return (
      <div>
        <FcTimeline pending="Recording..." reverse={this.state.reverse}>
          <FcTimeline.Item>Create a services site 2015-09-01</FcTimeline.Item>
          <FcTimeline.Item>Solve initial network problems 2015-09-01</FcTimeline.Item>
          <FcTimeline.Item>Technical testing 2015-09-01</FcTimeline.Item>
        </FcTimeline>
        <FcButton type="primary" style={{ marginTop: 16 }} onClick={this.handleClick}>
          Toggle Reverse
        </FcButton>
      </div>
    );
  }
}

/**
 * title: 悬停点击弹出窗口
 * desc: 以下示例显示如何创建可悬停和单击的弹出窗口。
 */
import React from 'react';
import { FcPopover, FcButton } from '@ngfed/fc-components';

export default class App extends React.Component {
  state = {
    clicked: false,
    hovered: false,
  };

  hide = () => {
    this.setState({
      clicked: false,
      hovered: false,
    });
  };

  handleHoverChange = (visible) => {
    this.setState({
      hovered: visible,
      clicked: false,
    });
  };

  handleClickChange = (visible) => {
    this.setState({
      clicked: visible,
      hovered: false,
    });
  };

  render() {
    const hoverContent = <div>This is hover content.</div>;
    const clickContent = <div>This is click content.</div>;
    return (
      <FcPopover
        style={{ width: 500 }}
        content={hoverContent}
        title="Hover title"
        trigger="hover"
        visible={this.state.hovered}
        onVisibleChange={this.handleHoverChange}
      >
        <FcPopover
          content={
            <div>
              {clickContent}
              <a onClick={this.hide}>Close</a>
            </div>
          }
          title="Click title"
          trigger="click"
          visible={this.state.clicked}
          onVisibleChange={this.handleClickChange}
        >
          <FcButton>Hover and click / 悬停并单击</FcButton>
        </FcPopover>
      </FcPopover>
    );
  }
}

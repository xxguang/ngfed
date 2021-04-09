/**
 * title:控制关闭状态
 * desc:通过 visible 属性控制关闭状态。
 */
import React from 'react';
import { FcTag, FcButton } from '@ngfed/fc-components';

export default class Demo extends React.Component {
  state = {
    visible: true,
  };

  render() {
    return (
      <>
        <FcTag
          closable
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
        >
          Movies
        </FcTag>
        <br />
        <FcButton size="small" onClick={() => this.setState({ visible: !this.state.visible })}>
          Toggle
        </FcButton>
      </>
    );
  }
}

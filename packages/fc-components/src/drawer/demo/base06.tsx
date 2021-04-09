/**
 * title: 多层抽屉
 * desc: 在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。
 */
import React from 'react';
import { FcDrawer, FcButton } from '@ngfed/fc-components';

class App extends React.Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  render() {
    return (
      <>
        <FcButton type="primary" onClick={this.showDrawer}>
          Open drawer
        </FcButton>
        <FcDrawer
          title="Multi-level drawer"
          width={520}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <FcButton type="primary" onClick={this.showChildrenDrawer}>
            Two-level drawer
          </FcButton>
          <FcDrawer
            title="Two-level Drawer"
            width={320}
            closable={false}
            onClose={this.onChildrenDrawerClose}
            visible={this.state.childrenDrawer}
          >
            This is two-level drawer
          </FcDrawer>
        </FcDrawer>
      </>
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

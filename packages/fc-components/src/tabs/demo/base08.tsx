/**
 * title:位置
 * desc:有四个位置，tabPosition="left|right|top|bottom"。在移动端下，left|right 会自动切换成 top。
 */
import React from 'react';
import { FcTabs, FcRadio, FcSpace } from '@ngfed/fc-components';

const { TabPane } = FcTabs;

export default class Demo extends React.Component {
  state = {
    tabPosition: 'left',
  };

  changeTabPosition = (e) => {
    this.setState({ tabPosition: e.target.value });
  };

  render() {
    const { tabPosition } = this.state;
    return (
      <>
        <FcSpace style={{ marginBottom: 24 }}>
          Tab position:
          <FcRadio.Group value={tabPosition} onChange={this.changeTabPosition}>
            <FcRadio.Button value="top">top</FcRadio.Button>
            <FcRadio.Button value="bottom">bottom</FcRadio.Button>
            <FcRadio.Button value="left">left</FcRadio.Button>
            <FcRadio.Button value="right">right</FcRadio.Button>
          </FcRadio.Group>
        </FcSpace>
        <FcTabs tabPosition={tabPosition}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab 3
          </TabPane>
        </FcTabs>
      </>
    );
  }
}

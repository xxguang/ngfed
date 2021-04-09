/**
 * title: 基本
 * desc: 默认选中第一项。
 */
import React from 'react';
import { FcTabs } from '@ngfed/fc-components';
const { TabPane } = FcTabs;

function callback(key) {
  console.log(key);
}

export default () => (
  <FcTabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="Tab 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Tab 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </FcTabs>
);

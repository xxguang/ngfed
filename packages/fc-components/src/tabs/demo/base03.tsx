/**
 * title: 居中
 * desc: 标签居中展示
 */
import React from 'react';
import { FcTabs } from '@ngfed/fc-components';

const { TabPane } = FcTabs;

export default () => (
  <FcTabs defaultActiveKey="1" centered>
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

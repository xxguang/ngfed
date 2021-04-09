/**
 * title:卡片式页签
 * desc:另一种样式的页签，不提供对应的垂直样式。
 */
import React from 'react';
import { FcTabs } from '@ngfed/fc-components';
const { TabPane } = FcTabs;

function callback(key) {
  console.log(key);
}

export default () => {
  return (
    <FcTabs onChange={callback} type="card">
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
};

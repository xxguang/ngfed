/**
 * title:卡片式页签容器
 * desc:用于容器顶部，需要一点额外的样式覆盖。
 */
import React from 'react';
import { FcTabs } from '@ngfed/fc-components';
const { TabPane } = FcTabs;

export default () => {
  return (
    <div className="card-container">
      <FcTabs type="card">
        <TabPane tab="Tab Title 1" key="1">
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
          <p>Content of Tab Pane 1</p>
        </TabPane>
        <TabPane tab="Tab Title 2" key="2">
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
          <p>Content of Tab Pane 2</p>
        </TabPane>
        <TabPane tab="Tab Title 3" key="3">
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
          <p>Content of Tab Pane 3</p>
        </TabPane>
      </FcTabs>
    </div>
  );
};

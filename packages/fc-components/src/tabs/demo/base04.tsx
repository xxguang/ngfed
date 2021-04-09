/**
 * title: 图标
 * desc: 有图标的标签。
 */
import React from 'react';
import { FcTabs } from '@ngfed/fc-components';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

const { TabPane } = FcTabs;

export default () => {
  return (
    <FcTabs defaultActiveKey="2">
      <TabPane
        tab={
          <span>
            <AppleOutlined />
            Tab 1
          </span>
        }
        key="1"
      >
        Tab 1
      </TabPane>
      <TabPane
        tab={
          <span>
            <AndroidOutlined />
            Tab 2
          </span>
        }
        key="2"
      >
        Tab 2
      </TabPane>
    </FcTabs>
  );
};

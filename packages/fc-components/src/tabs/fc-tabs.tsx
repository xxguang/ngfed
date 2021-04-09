import React from 'react';
import { Tabs } from 'antd';
import omit from 'rc-util/lib/omit';

const { TabPane } = Tabs;

function FcTabs(props) {
  props = omit(props, ['addIcon', 'defaultActiveKey', 'moreIcon', 'tabBarExtraContent']);
  return (
    <>
      <Tabs {...props} />
    </>
  );
}

FcTabs.TabPane = TabPane;
export default FcTabs;

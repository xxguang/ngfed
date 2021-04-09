/**
 * title: 组件尺寸
 * desc: 修改默认组件尺寸。
 */
import React, { useState } from 'react';
import { FcConfigProvider, FcRadio, FcInput, FcDivider, FcTabs } from '@ngfed/fc-components';

const { TabPane } = FcTabs;

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState('small');
  return (
    <div>
      <FcRadio.Group
        value={componentSize}
        onChange={(e) => {
          setComponentSize(e.target.value);
        }}
      >
        <FcRadio.Button value="small">Small</FcRadio.Button>
        <FcRadio.Button value="middle">Middle</FcRadio.Button>
        <FcRadio.Button value="large">Large</FcRadio.Button>
      </FcRadio.Group>
      <FcDivider />
      <FcConfigProvider componentSize={componentSize}>
        <div className="example">
          <FcInput />
        </div>
        <div className="example">
          <FcTabs defaultActiveKey="1">
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
        </div>
      </FcConfigProvider>
    </div>
  );
};

export default FormSizeDemo;

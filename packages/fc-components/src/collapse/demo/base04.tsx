/**
 * title: 可折叠触发区域
 * desc: 通过 collapsible 属性，可以设置面板的可折叠触发区域。
 */

import React from 'react';
import { FcCollapse, FcSpace } from '@ngfed/fc-components';

const { Panel } = FcCollapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default () => {
  return (
    <>
      <FcSpace direction="vertical">
        <FcCollapse collapsible="header">
          <Panel header="This panel can only be collapsed by clicking text" key="1">
            <p>{text}</p>
          </Panel>
        </FcCollapse>
        <FcCollapse collapsible="disabled">
          <Panel header="This panel can't be collapsed" key="1">
            <p>{text}</p>
          </Panel>
        </FcCollapse>
      </FcSpace>
    </>
  );
};

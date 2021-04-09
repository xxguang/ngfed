/**
 * title: 嵌面板嵌
 * desc: 嵌套折叠面板。
 */

import React from 'react';
import { FcCollapse } from '@ngfed/fc-components';

const { Panel } = FcCollapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default () => {
  return (
    <>
      <FcCollapse onChange={callback}>
        <Panel header="This is panel header 1" key="1">
          <FcCollapse>
            <Panel header="This is panel nest panel" key="1">
              <p>{text}</p>
            </Panel>
          </FcCollapse>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </FcCollapse>
      ,
    </>
  );
};

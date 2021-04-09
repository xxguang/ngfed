/**
 * title: 折叠面板
 * desc: 可以同时展开多个面板，这个例子默认展开了第一个
 */
import React from 'react';
import { FcCollapse } from '@ngfed/fc-components';
const { Panel } = FcCollapse;
const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;

function callback(key) {
  console.log(key);
}
export default () => {
  return (
    <>
      <FcCollapse onChange={callback}>
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </FcCollapse>
    </>
  );
};

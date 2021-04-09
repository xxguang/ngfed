/**
 * title: 自定义点状步骤条
 * desc: 为点状步骤条增加自定义展示。
 */

import React from 'react';
import { FcSteps, FcPopover } from '@ngfed/fc-components';

const { Step } = FcSteps;

const customDot = (dot, { status, index }) => (
  <FcPopover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </FcPopover>
);

export default () => {
  return (
    <>
      <FcSteps current={1} progressDot={customDot}>
        <Step title="Finished" description="You can hover on the dot." />
        <Step title="In Progress" description="You can hover on the dot." />
        <Step title="Waiting" description="You can hover on the dot." />
        <Step title="Waiting" description="You can hover on the dot." />
      </FcSteps>
      ,
    </>
  );
};

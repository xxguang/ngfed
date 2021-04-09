/**
 * title: 点状步骤条
 * desc: 包含步骤点的进度条。
 */

import React from 'react';
import { FcSteps, FcDivider } from '@ngfed/fc-components';

const { Step } = FcSteps;

export default () => {
  return (
    <>
      <FcSteps progressDot current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </FcSteps>
      <FcDivider />
      <FcSteps progressDot current={1} direction="vertical">
        <Step title="Finished" description="This is a description. This is a description." />
        <Step title="Finished" description="This is a description. This is a description." />
        <Step title="In Progress" description="This is a description. This is a description." />
        <Step title="Waiting" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </FcSteps>
    </>
  );
};

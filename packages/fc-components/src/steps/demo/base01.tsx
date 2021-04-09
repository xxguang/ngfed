/**
 * title: 基础步骤条
 * desc: 演示提供两种展示方向的步骤条，可以通过设置 `Steps` 的 `direction`属性来设置，其中可以通过设置`<Steps size="small">`启用迷你版的步骤条。
 */

import React from 'react';
import { FcSteps, FcDivider } from '@ngfed/fc-components';

const { Step } = FcSteps;

export default () => {
  return (
    <>
      <FcSteps size="small" current={1}>
        <Step title="Finished" />
        <Step title="In Progress" />
        <Step title="Waiting" />
      </FcSteps>
      <FcDivider />
      <FcSteps current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </FcSteps>
      <FcDivider />
      <FcSteps direction="vertical" current={1}>
        <Step title="Finished" description="This is a description." />
        <Step title="In Progress" description="This is a description." />
        <Step title="Waiting" description="This is a description." />
      </FcSteps>
      ,
    </>
  );
};

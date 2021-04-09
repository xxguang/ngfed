/**
 * title: 带图标的步骤条
 * desc: 通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。
 */

import React from 'react';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import { FcSteps } from '@ngfed/fc-components';

const { Step } = FcSteps;

export default () => {
  return (
    <>
      <FcSteps>
        <Step status="finish" title="Login" icon={<UserOutlined />} />
        <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
        <Step status="process" title="Pay" icon={<LoadingOutlined />} />
        <Step status="wait" title="Done" icon={<SmileOutlined />} />
      </FcSteps>
      ,
    </>
  );
};

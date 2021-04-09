/**
 * title: 步骤切换
 * desc: 通常配合内容及按钮使用，表示一个流程的处理进度。
 */

import React from 'react';
import { FcSteps, FcButton } from '@ngfed/fc-components';
import './base03.css';

const { Step } = FcSteps;

const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];

export default () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <FcSteps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </FcSteps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <FcButton type="primary" onClick={() => next()}>
            Next
          </FcButton>
        )}
        {current === steps.length - 1 && (
          <FcButton type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </FcButton>
        )}
        {current > 0 && (
          <FcButton style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </FcButton>
        )}
      </div>
    </>
  );
};

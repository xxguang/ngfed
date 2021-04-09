/**
 * title: 超出边界
 * desc: 当通过受控将 `value` 超出边界时，提供警告样式。
 */

import React from 'react';
import { FcInputNumber, FcButton, FcSpace } from '@ngfed/fc-components';

const Demo = () => {
  const [value, setValue] = React.useState<string | number>('99');

  return (
    <FcSpace>
      <FcInputNumber min={1} max={10} value={value} onChange={setValue} />
      <FcButton
        type="primary"
        onClick={() => {
          setValue(99);
        }}
      >
        Reset
      </FcButton>
    </FcSpace>
  );
};

export default () => {
  return <Demo />;
};

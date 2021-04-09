/**
 * title: 键盘行为
 * desc: 使用 `keyboard` 属性可以控制键盘行为。
 */

import React from 'react';
import { FcSpace, FcInputNumber, FcCheckbox } from '@ngfed/fc-components';

const App = () => {
  const [keyboard, setKeyboard] = React.useState(true);
  return (
    <FcSpace>
      <FcInputNumber min={1} max={10} keyboard={keyboard} defaultValue={3} />
      <FcCheckbox
        onChange={() => {
          setKeyboard(!keyboard);
        }}
        checked={keyboard}
      >
        Toggle keyboard
      </FcCheckbox>
    </FcSpace>
  );
};

export default () => {
  return <App />;
};

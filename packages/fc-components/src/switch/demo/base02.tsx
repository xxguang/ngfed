/**
 * title: 不可用
 * desc: Switch 失效状态。
 */

import React from 'react';
import { FcSwitch, FcButton } from '@ngfed/fc-components';

const App = () => {
  const [disabled, setDisabled] = React.useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <FcSwitch disabled={disabled} defaultChecked />
      <br />
      <FcButton type="primary" onClick={toggle}>
        Toggle disabled
      </FcButton>
    </>
  );
};

export default App;

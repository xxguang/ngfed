/**
 * title: 聚焦额外配置属性。
 * desc: 聚焦额外配置属性。
 */

import React from 'react';
import { FcInput, FcSpace, FcButton } from '@ngfed/fc-components';

const Demo = () => {
  const inputRef = React.useRef<any>(null);

  const sharedProps = {
    style: { width: '100%' },
    defaultValue: 'Ant Design love you!',
    ref: inputRef,
  };

  return (
    <FcSpace direction="vertical" style={{ width: '100%' }}>
      <FcSpace wrap>
        <FcButton
          onClick={() => {
            inputRef.current!.focus({
              cursor: 'start',
            });
          }}
        >
          Focus at first
        </FcButton>
        <FcButton
          onClick={() => {
            inputRef.current!.focus({
              cursor: 'end',
            });
          }}
        >
          Focus at last
        </FcButton>
        <FcButton
          onClick={() => {
            inputRef.current!.focus({
              cursor: 'all',
            });
          }}
        >
          Focus to select all
        </FcButton>
        <FcButton
          onClick={() => {
            inputRef.current!.focus({
              preventScroll: true,
            });
          }}
        >
          Focus prevent scroll
        </FcButton>
      </FcSpace>
      <br />
      <FcInput.TextArea {...sharedProps} />
    </FcSpace>
  );
};

export default () => {
  return (
    <>
      <Demo />
    </>
  );
};

/**
 * title: 自定义选择标签
 * desc: 允许自定义选择标签的样式。
 */

import React from 'react';
import { FcSelect, FcTag } from '@ngfed/fc-components';
const { Option } = FcSelect;

const options = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];

function tagRender(props) {
  const { label, value, closable, onClose } = props;

  return (
    <FcTag color={value} closable={closable} onClose={onClose} style={{ marginRight: 3 }}>
      {label}
    </FcTag>
  );
}

export default () => {
  return (
    <>
      <FcSelect
        mode="multiple"
        showArrow
        tagRender={tagRender}
        defaultValue={['gold', 'cyan']}
        style={{ width: '100%' }}
        options={options}
      />
    </>
  );
};

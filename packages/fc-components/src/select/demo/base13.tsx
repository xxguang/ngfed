/**
 * title: 自动分词
 * desc: 试下复制 `露西,杰克` 并粘贴到输入框里。只在 tags 和 multiple 模式下可用。
 */

import React from 'react';
import { FcSelect, FcSpace } from '@ngfed/fc-components';
const { Option } = FcSelect;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default () => {
  return (
    <>
      <FcSelect
        mode="tags"
        style={{ width: '100%' }}
        onChange={handleChange}
        tokenSeparators={[',']}
      >
        {children}
      </FcSelect>
    </>
  );
};

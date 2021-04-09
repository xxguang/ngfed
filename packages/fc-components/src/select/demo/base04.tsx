/**
 * title: 三种大小
 * desc: 三种大小的选择框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `40px` 和 `24px` ，默认高度为 `32px`。
 */

import React from 'react';
import { FcSelect, FcSpace, FcRadio } from '@ngfed/fc-components';
const { Option } = FcSelect;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

const SelectSizesDemo = () => {
  const [size, setSize] = React.useState('default');

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  return (
    <>
      <FcSpace direction="vertical">
        <FcRadio.Group value={size} onChange={handleSizeChange}>
          <FcRadio.Button value="large">Large</FcRadio.Button>
          <FcRadio.Button value="default">Default</FcRadio.Button>
          <FcRadio.Button value="small">Small</FcRadio.Button>
        </FcRadio.Group>

        <FcSelect size={size} defaultValue="a1" onChange={handleChange} style={{ width: 200 }}>
          {children}
        </FcSelect>

        <FcSelect
          mode="multiple"
          size={size}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
          style={{ width: 300 }}
        >
          {children}
        </FcSelect>

        <FcSelect
          mode="tags"
          size={size}
          placeholder="Please select"
          defaultValue={['a10', 'c12']}
          onChange={handleChange}
          style={{ width: 300 }}
        >
          {children}
        </FcSelect>
      </FcSpace>
    </>
  );
};

export default () => {
  return <SelectSizesDemo />;
};

/**
 * title: 隐藏已选择选项
 * desc: 隐藏下拉列表中已选择的选项。
 */

import React from 'react';
import { FcSelect, FcSpace } from '@ngfed/fc-components';
const { Option } = FcSelect;

const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

class SelectWithHiddenSelectedOptions extends React.Component {
  state = {
    selectedItems: [],
  };

  handleChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;
    const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
    return (
      <FcSelect
        mode="multiple"
        placeholder="Inserted are removed"
        value={selectedItems}
        onChange={this.handleChange}
        style={{ width: '100%' }}
      >
        {filteredOptions.map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </FcSelect>
    );
  }
}

export default () => {
  return (
    <>
      <SelectWithHiddenSelectedOptions />
    </>
  );
};

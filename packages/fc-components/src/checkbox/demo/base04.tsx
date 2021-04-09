/**
 * title: 全选
 * desc: 在实现全选效果时，你可能会用到 `indeterminate` 属性。
 */

import React from 'react';
import { FcCheckbox, FcDivider } from '@ngfed/fc-components';

const CheckboxGroup = FcCheckbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const App = () => {
  const [checkedList, setCheckedList] = React.useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [checkAll, setCheckAll] = React.useState(false);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  return (
    <>
      <FcCheckbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
        Check all
      </FcCheckbox>
      <FcDivider />
      <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
    </>
  );
};

export default App;

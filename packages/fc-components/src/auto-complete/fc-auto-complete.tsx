import React from 'react';
import { AutoComplete } from 'antd';
import omit from 'rc-util/lib/omit';
const { Option } = AutoComplete;

function FcAutoComplete(props) {
  props = omit(props, ['defaultActiveFirstOption', 'dropdownMatchSelectWidth']);
  return (
    <>
      <AutoComplete {...props} />
    </>
  );
}

FcAutoComplete.Option = Option;
export default FcAutoComplete;

import React from 'react';
import { Select } from 'antd';
import omit from 'rc-util/lib/omit';

const { Option, OptGroup } = Select;

function FcSelect(props) {
  props = omit(props, ['']);
  return <Select {...props} />;
}

FcSelect.Option = Option;
FcSelect.OptGroup = OptGroup;

export default FcSelect;

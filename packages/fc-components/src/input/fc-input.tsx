import React from 'react';
import { Input } from 'antd';
import omit from 'rc-util/lib/omit';

const { Search, Group, TextArea, Password } = Input;
function FcInput(props) {
  props = omit(props, ['']);
  return <Input {...props} />;
}

FcInput.Search = Search;
FcInput.Group = Group;
FcInput.TextArea = TextArea;
FcInput.Password = Password;

export default FcInput;

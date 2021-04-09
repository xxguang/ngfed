import React from 'react';
import { Checkbox } from 'antd';
import omit from 'rc-util/lib/omit';
const { Group } = Checkbox;
function FcCheckbox(props) {
  props = omit(props, ['']);
  return (
    <>
      <Checkbox {...props} />
    </>
  );
}
FcCheckbox.Group = Group;
export default FcCheckbox;

import React from 'react';
import { Dropdown } from 'antd';
import omit from 'rc-util/lib/omit';

const { Button: DropdownButton } = Dropdown;
function FcDropdownButton(props) {
  props = omit(props, ['buttonsRender']);
  return <DropdownButton {...props} />;
}

function FcDropdown(props) {
  props = omit(props, ['']);
  return (
    <>
      <Dropdown {...props} />
    </>
  );
}
FcDropdownButton.__ANT_BUTTON = true;

FcDropdown.Button = FcDropdownButton;
export default FcDropdown;

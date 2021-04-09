import React from 'react';
import { Descriptions } from 'antd';
import omit from 'rc-util/lib/omit';
const { Item } = Descriptions;
function FcDescriptions(props) {
  props = omit(props, ['colon']);
  return (
    <>
      <Descriptions {...props} />
    </>
  );
}
function FcItem(props) {
  props = omit(props, ['showArrow']);
  return (
    <>
      <Item {...props} />
    </>
  );
}
FcDescriptions.Item = FcItem;
export default FcDescriptions;

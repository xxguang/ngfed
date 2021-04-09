import React from 'react';
import { List } from 'antd';
import omit from 'rc-util/lib/omit';

function FcList(props) {
  props = omit(props, ['locale', 'position']);
  return (
    <>
      <List {...props} />
    </>
  );
}
FcList.Item = List.Item;
FcList.Item.Meta = List.Item.Meta;
export default FcList;

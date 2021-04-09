import React from 'react';
import { TreeSelect } from 'antd';
import omit from 'rc-util/lib/omit';

const { TreeNode, SHOW_PARENT } = TreeSelect;

function FcTreeSelect(props) {
  props = omit(props, ['']);
  return <TreeSelect {...props} />;
}

FcTreeSelect.TreeNode = TreeNode;
FcTreeSelect.SHOW_PARENT = SHOW_PARENT;

export default FcTreeSelect;

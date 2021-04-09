import React from 'react';
import { Tree } from 'antd';
import omit from 'rc-util/lib/omit';

const { DirectoryTree } = Tree;
function FcTree(props) {
  props = omit(props, ['virtual']);
  return (
    <>
      <Tree {...props} />
    </>
  );
}
FcTree.DirectoryTree = DirectoryTree;
export default FcTree;

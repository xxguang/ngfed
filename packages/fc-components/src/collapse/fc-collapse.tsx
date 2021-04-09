import React from 'react';
import { Collapse } from 'antd';
import omit from 'rc-util/lib/omit';
const { Panel } = Collapse;

function FcCollapse(props) {
  props = omit(props, ['bordered', 'defaultActiveKey', 'destroyInactivePanel', 'ghost']);
  return (
    <>
      <Collapse {...props} />
    </>
  );
}

function FcPanel(props) {
  props = omit(props, ['showArrow']);
  return (
    <>
      <Panel {...props} />
    </>
  );
}
FcCollapse.Panel = FcPanel;

export default FcCollapse;

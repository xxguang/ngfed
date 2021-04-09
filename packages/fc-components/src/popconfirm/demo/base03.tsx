/**
 * title: 位置
 * desc: 位置有十二个方向。如需箭头指向目标元素中心，可以设置 arrowPointAtCenter。
 */

import React from 'react';
import { FcPopconfirm, FcButton, FcMessage } from '@ngfed/fc-components';

const text = 'Are you sure to delete this task?';

function confirm() {
  FcMessage.info('Clicked on Yes.');
}

export default () => {
  return (
    <div className="demo">
      <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
        <FcPopconfirm
          placement="topLeft"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <FcButton>TL</FcButton>
        </FcPopconfirm>
        <FcPopconfirm placement="top" title={text} onConfirm={confirm} okText="Yes" cancelText="No">
          <FcButton>Top</FcButton>
        </FcPopconfirm>
        <FcPopconfirm
          placement="topRight"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <FcButton>TR</FcButton>
        </FcPopconfirm>
      </div>
      <div style={{ width: 70, float: 'left' }}>
        <FcPopconfirm
          placement="leftTop"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <FcButton>LT</FcButton>
        </FcPopconfirm>
        <FcPopconfirm
          placement="left"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <FcButton>Left</FcButton>
        </FcPopconfirm>
        <FcPopconfirm
          placement="leftBottom"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <FcButton>LB</FcButton>
        </FcPopconfirm>
      </div>
      <div style={{ width: 70, marginLeft: 304 }}>
        <FcPopconfirm
          placement="rightTop"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <FcButton>RT</FcButton>
        </FcPopconfirm>
        <FcPopconfirm
          placement="right"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <FcButton>Right</FcButton>
        </FcPopconfirm>
        <FcPopconfirm
          placement="rightBottom"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <FcButton>RB</FcButton>
        </FcPopconfirm>
      </div>
      <div style={{ marginLeft: 70, clear: 'both', whiteSpace: 'nowrap' }}>
        <FcPopconfirm
          placement="bottomLeft"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <FcButton>BL</FcButton>
        </FcPopconfirm>
        <FcPopconfirm
          placement="bottom"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <FcButton>Bottom</FcButton>
        </FcPopconfirm>
        <FcPopconfirm
          placement="bottomRight"
          title={text}
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <FcButton>BR</FcButton>
        </FcPopconfirm>
      </div>
    </div>
  );
};

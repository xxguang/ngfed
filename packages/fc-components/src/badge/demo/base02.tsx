/**
 * title: 独立使用
 * desc: 不包裹任何元素即是独立使用，可自定样式展现。
 *  在右上角的 badge 则限定为红色。
 */

import React from 'react';
import { FcBadge, FcSpace, FcSwitch } from '@ngfed/fc-components';
import { ClockCircleOutlined } from '@ant-design/icons';

export default () => {
  const [show, setShow] = React.useState(true);
  return (
    <>
      <FcSpace>
        <FcSwitch
          checked={show}
          onChange={() => {
            setShow(!show);
          }}
        />
        <FcBadge count={show ? 25 : 0} />
        <FcBadge count={show ? <ClockCircleOutlined style={{ color: '#f5222d' }} /> : 0} />
        <FcBadge count={show ? 4 : 0} className="site-badge-count-4" />
        <FcBadge
          className="site-badge-count-109"
          count={show ? 109 : 0}
          style={{ backgroundColor: '#52c41a' }}
        />
      </FcSpace>
    </>
  );
};

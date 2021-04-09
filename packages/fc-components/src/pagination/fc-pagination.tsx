import React from 'react';
import { Pagination } from 'antd';
import omit from 'rc-util/lib/omit';

function FcPagination(props) {
  //剔除的api放在后面的数组中
  props = omit(props, ['disabled', 'hideOnSinglePage', 'itemRender']);
  console.log(props);
  return (
    <>
      <Pagination {...props} />
    </>
  );
}
export default FcPagination;

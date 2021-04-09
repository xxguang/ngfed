import React from 'react';
import { PageHeader } from 'antd';
import omit from 'rc-util/lib/omit';

function FcPageHeader(props) {
  props = omit(props, ['breadcrumbRender', 'ghost']);
  return (
    <>
      <PageHeader {...props} />
    </>
  );
}
export default FcPageHeader;

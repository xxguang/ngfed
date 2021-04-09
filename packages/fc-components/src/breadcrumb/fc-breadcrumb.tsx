import React from 'react';
import { Breadcrumb } from 'antd';
import omit from 'rc-util/lib/omit';

const { Item, Separator } = Breadcrumb;
function FcBreadcrumbItem(props) {
  props = omit(props, ['dropdownProps']);
  return <Item {...props} />;
}

function FcBreadcrumbSeparator(props) {
  props = omit(props, ['']);
  return <Separator {...props} />;
}

function FcBreadcrumb(props) {
  props = omit(props, ['']);
  return <Breadcrumb {...props} />;
}
FcBreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
FcBreadcrumbSeparator.__ANT_BREADCRUMB_SEPARATOR = true;

FcBreadcrumb.Item = FcBreadcrumbItem;
FcBreadcrumb.Separator = FcBreadcrumbSeparator;
export default FcBreadcrumb;

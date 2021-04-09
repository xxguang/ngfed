/**
 * title: 带面包屑页头
 * desc: 带面包屑页头，适合层级比较深的页面，让用户可以快速导航。
 */
import React from 'react';
import { FcPageHeader } from '@ngfed/fc-components';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

export default () => {
  return (
    <>
      <FcPageHeader
        className="site-page-header"
        title="Title"
        breadcrumb={{ routes }}
        subTitle="This is a subtitle"
      />
    </>
  );
};

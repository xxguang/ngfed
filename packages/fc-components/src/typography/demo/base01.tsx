/**
 * title: Title
 * desc: 标题排版的样式
 */

import React from 'react';
import { FcTypography } from '@ngfed/fc-components';

const { Title } = FcTypography;
export default () => {
  return (
    <>
      level:
      <Title>h1. Ant Design</Title>
      <Title level={2}>h2. Ant Design</Title>
      <Title level={3}>h3. Ant Design</Title>
      <Title level={4}>h4. Ant Design</Title>
      <Title level={5}>h5. Ant Design</Title>
      delete:
      <Title level={5} delete>
        h5. Ant Design
      </Title>
      disabled:
      <Title level={5} disabled>
        h5. Ant Design
      </Title>
      mark:
      <Title level={5} mark>
        h5. Ant Design
      </Title>
      type:
      <Title level={5}>h5. Ant Design</Title>
      underline:
      <Title level={5} underline>
        h5. Ant Design
      </Title>
      type: secondary | success | warning | danger
      <Title level={5} type="secondary">
        h5. Ant Design secondary
      </Title>
      <Title level={5} type="success">
        h5. Ant Design success
      </Title>
      <Title level={5} type="warning">
        h5. Ant Design warning
      </Title>
      <Title level={5} type="danger">
        h5. Ant Design danger
      </Title>
    </>
  );
};

/**
 * title: React 错误处理
 * desc: 友好的 React 错误处理 包裹组件。
 */

import React, { useState } from 'react';
import { FcButton, FcAlert } from '@ngfed/fc-components';
const { ErrorBoundary } = FcAlert;
const ThrowError: React.FC = () => {
  const [error, setError] = useState<Error>();
  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }
  return (
    <FcButton danger onClick={onClick}>
      Click me to throw a error
    </FcButton>
  );
};
export default () => {
  return (
    <ErrorBoundary>
      <ThrowError />
    </ErrorBoundary>
  );
};

import React from 'react';
import { Alert } from 'antd';
import omit from 'rc-util/lib/omit';

const { ErrorBoundary } = Alert;

function FcAlert(props) {
  props = omit(props, ['closeText']);
  return (
    <>
      <Alert {...props} />
    </>
  );
}

FcAlert.ErrorBoundary = ErrorBoundary;
export default FcAlert;

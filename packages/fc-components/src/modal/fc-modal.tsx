import React from 'react';
import { Modal } from 'antd';
import omit from 'rc-util/lib/omit';

const { confirm, success, error, warning, info, useModal } = Modal;

function FcModal(props) {
  props = omit(props, ['centered', 'closeIcon', 'keyboard', 'mask', 'maskClosable', 'okType']);
  return (
    <>
      <Modal {...props} />
    </>
  );
}

FcModal.confirm = confirm;
FcModal.success = success;
FcModal.error = error;
FcModal.warning = warning;
FcModal.info = info;
FcModal.useModal = useModal;
export default FcModal;

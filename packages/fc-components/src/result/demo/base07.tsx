/**
 * title: Error
 * desc: 复杂的错误反馈。
 */
import React from 'react';
import { FcResult, FcButton, FcTypography } from '@ngfed/fc-components';
import { CloseCircleOutlined } from '@ant-design/icons';

const { Paragraph, Text } = FcTypography;

export default () => {
  return (
    <FcResult
      status="error"
      title="Submission Failed"
      subTitle="Please check and modify the following information before resubmitting."
      extra={[
        <FcButton type="primary" key="console">
          Go Console
        </FcButton>,
        <FcButton key="buy">Buy Again</FcButton>,
      ]}
    >
      <div className="desc">
        <Paragraph>
          <Text
            strong
            style={{
              fontSize: 16,
            }}
          >
            The content you submitted has the following error:
          </Text>
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account has been
          frozen. <a>Thaw immediately &gt;</a>
        </Paragraph>
        <Paragraph>
          <CloseCircleOutlined className="site-result-demo-error-icon" /> Your account is not yet
          eligible to apply. <a>Apply Unlock &gt;</a>
        </Paragraph>
      </div>
    </FcResult>
  );
};

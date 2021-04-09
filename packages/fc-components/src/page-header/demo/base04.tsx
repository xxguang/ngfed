/**
 * title: 响应式
 * desc: 在不同大小的屏幕下，应该有不同的表现
 */
import React from 'react';
import {
  FcPageHeader,
  FcButton,
  FcTag,
  FcStatistic,
  FcDescriptions,
  FcRow,
  FcTabs,
} from '@ngfed/fc-components';

const { TabPane } = FcTabs;
const renderContent = (column = 2) => (
  <FcDescriptions size="small" column={column}>
    <FcDescriptions.Item label="Created">Lili Qu</FcDescriptions.Item>
    <FcDescriptions.Item label="Association">
      <a>421421</a>
    </FcDescriptions.Item>
    <FcDescriptions.Item label="Creation Time">2017-01-10</FcDescriptions.Item>
    <FcDescriptions.Item label="Effective Time">2017-10-10</FcDescriptions.Item>
    <FcDescriptions.Item label="Remarks">
      Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
    </FcDescriptions.Item>
  </FcDescriptions>
);

const extraContent = (
  <div
    style={{
      display: 'flex',
      width: 'max-content',
      justifyContent: 'flex-end',
    }}
  >
    <FcStatistic
      title="Status"
      value="Pending"
      style={{
        marginRight: 32,
      }}
    />
    <FcStatistic title="Price" prefix="$" value={568.08} />
  </div>
);

const Content = ({ children, extra }) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
);
export default () => {
  return (
    <>
      <FcPageHeader
        className="site-page-header-responsive"
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
          <FcButton key="3">Operation</FcButton>,
          <FcButton key="2">Operation</FcButton>,
          <FcButton key="1" type="primary">
            Primary
          </FcButton>,
        ]}
        footer={
          <FcTabs defaultActiveKey="1">
            <TabPane tab="Details" key="1" />
            <TabPane tab="Rule" key="2" />
          </FcTabs>
        }
      >
        <Content extra={extraContent}>{renderContent()}</Content>
      </FcPageHeader>
    </>
  );
};

/**
 * title: 多种形态的 PageHeader
 * desc: 使用操作区，并自定义子节点，适合使用在需要展示一些复杂的信息，帮助用户快速了解这个页面的信息和操作。
 */
import React from 'react';
import {
  FcPageHeader,
  FcButton,
  FcTag,
  FcStatistic,
  FcDescriptions,
  FcRow,
} from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcPageHeader
        className="site-page-header"
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
      >
        <FcDescriptions size="small" column={3}>
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
      </FcPageHeader>
      <br />
      <FcPageHeader
        onBack={() => window.history.back()}
        title="Title"
        tags={<FcTag color="blue">Running</FcTag>}
        subTitle="This is a subtitle"
        extra={[
          <FcButton key="3">Operation</FcButton>,
          <FcButton key="2">Operation</FcButton>,
          <FcButton key="1" type="primary">
            Primary
          </FcButton>,
        ]}
      >
        <FcRow>
          <FcStatistic title="Status" value="Pending" />
          <FcStatistic
            title="Price"
            prefix="$"
            value={568.08}
            style={{
              margin: '0 32px',
            }}
          />
          <FcStatistic title="Balance" prefix="$" value={3345.08} />
        </FcRow>
      </FcPageHeader>
    </>
  );
};

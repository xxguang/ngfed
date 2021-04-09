/**
 * title: 支持更多内容配置
 * desc: 一种支持封面、头像、标题和描述信息的卡片。
 */

import React from 'react';
import { FcCard, FcAvatar } from '@ngfed/fc-components';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = FcCard;
export default () => {
  return (
    <>
      <FcCard
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={
            <FcAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="FcCard title"
          description="This is the description"
        />
      </FcCard>
    </>
  );
};

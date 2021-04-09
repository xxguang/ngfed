/**
 * title: FcAvatar.FcGroup
 * desc: 头像组合展现。
 */

import React from 'react';
import { FcAvatar, FcDivider, FcTooltip } from '@ngfed/fc-components';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

class Demo extends React.Component {
  render() {
    return (
      <>
        <FcAvatar.Group>
          <FcAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <FcAvatar
            style={{
              backgroundColor: '#f56a00',
            }}
          >
            K
          </FcAvatar>
          <FcTooltip title="Ant User" placement="top">
            <FcAvatar
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </FcTooltip>
          <FcAvatar
            style={{
              backgroundColor: '#1890ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </FcAvatar.Group>
        <FcDivider />
        <FcAvatar.Group
          maxCount={2}
          maxStyle={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
          }}
        >
          <FcAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <FcAvatar
            style={{
              backgroundColor: '#f56a00',
            }}
          >
            K
          </FcAvatar>
          <FcTooltip title="Ant User" placement="top">
            <FcAvatar
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </FcTooltip>
          <FcAvatar
            style={{
              backgroundColor: '#1890ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </FcAvatar.Group>
        <FcDivider />
        <FcAvatar.Group
          maxCount={2}
          size="large"
          maxStyle={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
          }}
        >
          <FcAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <FcAvatar
            style={{
              backgroundColor: '#f56a00',
            }}
          >
            K
          </FcAvatar>
          <FcTooltip title="Ant User" placement="top">
            <FcAvatar
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </FcTooltip>
          <FcAvatar
            style={{
              backgroundColor: '#1890ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </FcAvatar.Group>
      </>
    );
  }
}

export default Demo;

/**
 * title: 预加载的卡片
 * desc: 数据读入前会有文本块样式。
 */

import React from 'react';
import { FcCard, FcSkeleton, FcSwitch, FcAvatar } from '@ngfed/fc-components';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = FcCard;

class App extends React.Component {
  state = {
    loading: true,
  };

  onChange = (checked) => {
    this.setState({ loading: !checked });
  };

  render() {
    const { loading } = this.state;

    return (
      <>
        <FcSwitch checked={!loading} onChange={this.onChange} />

        <FcCard style={{ width: 300, marginTop: 16 }} loading={loading}>
          <Meta
            avatar={
              <FcAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="FcCard title"
            description="This is the description"
          />
        </FcCard>

        <FcCard
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <FcSkeleton loading={loading} avatar active>
            <Meta
              avatar={
                <FcAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title="FcCard title"
              description="This is the description"
            />
          </FcSkeleton>
        </FcCard>
      </>
    );
  }
}

export default App;

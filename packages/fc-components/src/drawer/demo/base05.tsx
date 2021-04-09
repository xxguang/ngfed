/**
 * title: 信息预览抽屉
 * desc: 需要快速预览对象概要时使用，点击遮罩区关闭。
 */
import React, { useState } from 'react';
import { FcDrawer, FcList, FcAvatar, FcDivider, FcCol, FcRow } from '@ngfed/fc-components';
import './base05.css';

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

class App extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <FcList
          dataSource={[
            {
              name: 'Lily',
            },
            {
              name: 'Lily',
            },
          ]}
          bordered
          renderItem={(item) => (
            <FcList.Item
              key={item.id}
              actions={[
                <a onClick={this.showDrawer} key={`a-${item.id}`}>
                  View Profile
                </a>,
              ]}
            >
              <FcList.Item.Meta
                FcAvatar={
                  <FcAvatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="https://ant.design/index-cn">{item.name}</a>}
                description="Progresser XTech"
              />
            </FcList.Item>
          )}
        />
        <FcDrawer
          width={640}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
            User Profile
          </p>
          <p className="site-description-item-profile-p">Personal</p>
          <FcRow>
            <FcCol span={12}>
              <DescriptionItem title="Full Name" content="Lily" />
            </FcCol>
            <FcCol span={12}>
              <DescriptionItem title="Account" content="AntDesign@example.com" />
            </FcCol>
          </FcRow>
          <FcRow>
            <FcCol span={12}>
              <DescriptionItem title="City" content="HangZhou" />
            </FcCol>
            <FcCol span={12}>
              <DescriptionItem title="Country" content="China🇨🇳" />
            </FcCol>
          </FcRow>
          <FcRow>
            <FcCol span={12}>
              <DescriptionItem title="Birthday" content="February 2,1900" />
            </FcCol>
            <FcCol span={12}>
              <DescriptionItem title="Website" content="-" />
            </FcCol>
          </FcRow>
          <FcRow>
            <FcCol span={24}>
              <DescriptionItem
                title="Message"
                content="Make things as simple as possible but no simpler."
              />
            </FcCol>
          </FcRow>
          <FcDivider />
          <p className="site-description-item-profile-p">Company</p>
          <FcRow>
            <FcCol span={12}>
              <DescriptionItem title="Position" content="Programmer" />
            </FcCol>
            <FcCol span={12}>
              <DescriptionItem title="Responsibilities" content="Coding" />
            </FcCol>
          </FcRow>
          <FcRow>
            <FcCol span={12}>
              <DescriptionItem title="Department" content="XTech" />
            </FcCol>
            <FcCol span={12}>
              <DescriptionItem title="Supervisor" content={<a>Lin</a>} />
            </FcCol>
          </FcRow>
          <FcRow>
            <FcCol span={24}>
              <DescriptionItem
                title="Skills"
                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
              />
            </FcCol>
          </FcRow>
          <FcDivider />
          <p className="site-description-item-profile-p">Contacts</p>
          <FcRow>
            <FcCol span={12}>
              <DescriptionItem title="Email" content="AntDesign@example.com" />
            </FcCol>
            <FcCol span={12}>
              <DescriptionItem title="Phone Number" content="+86 181 0000 0000" />
            </FcCol>
          </FcRow>
          <FcRow>
            <FcCol span={24}>
              <DescriptionItem
                title="Github"
                content={
                  <a href="http://github.com/ant-design/ant-design/">
                    github.com/ant-design/ant-design/
                  </a>
                }
              />
            </FcCol>
          </FcRow>
        </FcDrawer>
      </>
    );
  }
}
export default () => {
  return (
    <>
      <App />
    </>
  );
};

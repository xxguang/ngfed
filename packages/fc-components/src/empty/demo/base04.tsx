/**
 * title: 全局化配置
 * desc: 自定义全局组件的 FcEmpty 样式。
 */
import React from 'react';
import {
  FcConfigProvider,
  FcSwitch,
  FcDivider,
  FcTreeSelect,
  FcSelect,
  FcCascader,
  FcTransfer,
  FcTable,
  FcList,
} from '@ngfed/fc-components';

import { TreeSelect } from 'antd';

import { SmileOutlined } from '@ant-design/icons';

const customizeRenderEmpty = () => (
  <div style={{ textAlign: 'center' }}>
    <SmileOutlined style={{ fontSize: 20 }} />
    <p>Data Not Found</p>
  </div>
);

const style = { width: 200 };

class Demo extends React.Component {
  state = {
    customize: false,
  };

  render() {
    const { customize } = this.state;
    return (
      <div>
        <FcSwitch
          unCheckedChildren="default"
          checkedChildren="customize"
          checked={customize}
          onChange={(val) => {
            this.setState({ customize: val });
          }}
        />

        <FcDivider />

        <FcConfigProvider renderEmpty={customize && customizeRenderEmpty}>
          <div className="config-provider">
            <h4>Select</h4>
            <FcSelect style={style} />

            <h4>TreeSelect</h4>
            <TreeSelect style={style} treeData={[]} />

            <h4>Cascader</h4>
            <FcCascader style={style} options={[]} showSearch />

            <h4>Transfer</h4>
            <FcTransfer />

            <h4>Table</h4>
            <FcTable
              style={{ marginTop: 8 }}
              columns={[
                {
                  title: 'Name',
                  dataIndex: 'name',
                  key: 'name',
                },
                {
                  title: 'Age',
                  dataIndex: 'age',
                  key: 'age',
                },
              ]}
            />

            <h4>List</h4>
            <FcList />
          </div>
        </FcConfigProvider>
      </div>
    );
  }
}
export default Demo;

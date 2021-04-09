/**
 * title:动态控制表格属性
 * desc:选择不同配置组合查看效果。
 */

import React from 'react';
import { FcTable, FcSwitch, FcRadio, FcForm, FcSpace } from '@ngfed/fc-components';
import { DownOutlined } from '@ant-design/icons';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <FcSpace size="middle">
        <a>Delete</a>
        <a className="ant-dropdown-link">
          More actions <DownOutlined />
        </a>
      </FcSpace>
    ),
  },
];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const expandable = { expandedRowRender: (record) => <p>{record.description}</p> };
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const pagination = { position: 'bottom' };

export default class Demo extends React.Component {
  state = {
    bordered: false,
    loading: false,
    pagination,
    size: 'default',
    expandable,
    title: undefined,
    showHeader,
    footer,
    rowSelection: {},
    scroll: undefined,
    hasData: true,
    tableLayout: undefined,
    top: 'none',
    bottom: 'bottomRight',
  };

  handleToggle = (prop) => (enable) => {
    this.setState({ [prop]: enable });
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  handleTableLayoutChange = (e) => {
    this.setState({ tableLayout: e.target.value });
  };

  handleExpandChange = (enable) => {
    this.setState({ expandable: enable ? expandable : undefined });
  };

  handleEllipsisChange = (enable) => {
    this.setState({ ellipsis: enable });
  };

  handleTitleChange = (enable) => {
    this.setState({ title: enable ? title : undefined });
  };

  handleHeaderChange = (enable) => {
    this.setState({ showHeader: enable ? showHeader : false });
  };

  handleFooterChange = (enable) => {
    this.setState({ footer: enable ? footer : undefined });
  };

  handleRowSelectionChange = (enable) => {
    this.setState({ rowSelection: enable ? {} : undefined });
  };

  handleYScrollChange = (enable) => {
    this.setState({ yScroll: enable });
  };

  handleXScrollChange = (e) => {
    this.setState({ xScroll: e.target.value });
  };

  handleDataChange = (hasData) => {
    this.setState({ hasData });
  };

  render() {
    const { xScroll, yScroll, ...state } = this.state;

    const scroll = {};
    if (yScroll) {
      scroll.y = 240;
    }
    if (xScroll) {
      scroll.x = '100vw';
    }

    const tableColumns = columns.map((item) => ({ ...item, ellipsis: state.ellipsis }));
    if (xScroll === 'fixed') {
      tableColumns[0].fixed = true;
      tableColumns[tableColumns.length - 1].fixed = 'right';
    }

    return (
      <>
        <FcForm
          layout="inline"
          className="components-table-demo-control-bar"
          style={{ marginBottom: 16 }}
        >
          <FcForm.Item label="Bordered">
            <FcSwitch checked={state.bordered} onChange={this.handleToggle('bordered')} />
          </FcForm.Item>
          <FcForm.Item label="loading">
            <FcSwitch checked={state.loading} onChange={this.handleToggle('loading')} />
          </FcForm.Item>
          <FcForm.Item label="Title">
            <FcSwitch checked={!!state.title} onChange={this.handleTitleChange} />
          </FcForm.Item>
          <FcForm.Item label="Column Header">
            <FcSwitch checked={!!state.showHeader} onChange={this.handleHeaderChange} />
          </FcForm.Item>
          <FcForm.Item label="Footer">
            <FcSwitch checked={!!state.footer} onChange={this.handleFooterChange} />
          </FcForm.Item>
          <FcForm.Item label="Expandable">
            <FcSwitch checked={!!state.expandable} onChange={this.handleExpandChange} />
          </FcForm.Item>
          <FcForm.Item label="Checkbox">
            <FcSwitch checked={!!state.rowSelection} onChange={this.handleRowSelectionChange} />
          </FcForm.Item>
          <FcForm.Item label="Fixed Header">
            <FcSwitch checked={!!yScroll} onChange={this.handleYScrollChange} />
          </FcForm.Item>
          <FcForm.Item label="Has Data">
            <FcSwitch checked={!!state.hasData} onChange={this.handleDataChange} />
          </FcForm.Item>
          <FcForm.Item label="Ellipsis">
            <FcSwitch checked={!!state.ellipsis} onChange={this.handleEllipsisChange} />
          </FcForm.Item>
          <FcForm.Item label="Size">
            <FcRadio.Group value={state.size} onChange={this.handleSizeChange}>
              <FcRadio.Button value="default">Default</FcRadio.Button>
              <FcRadio.Button value="middle">Middle</FcRadio.Button>
              <FcRadio.Button value="small">Small</FcRadio.Button>
            </FcRadio.Group>
          </FcForm.Item>
          <FcForm.Item label="Table Scroll">
            <FcRadio.Group value={xScroll} onChange={this.handleXScrollChange}>
              <FcRadio.Button value={undefined}>Unset</FcRadio.Button>
              <FcRadio.Button value="scroll">Scroll</FcRadio.Button>
              <FcRadio.Button value="fixed">Fixed Columns</FcRadio.Button>
            </FcRadio.Group>
          </FcForm.Item>
          <FcForm.Item label="Table Layout">
            <FcRadio.Group value={state.tableLayout} onChange={this.handleTableLayoutChange}>
              <FcRadio.Button value={undefined}>Unset</FcRadio.Button>
              <FcRadio.Button value="fixed">Fixed</FcRadio.Button>
            </FcRadio.Group>
          </FcForm.Item>
          <FcForm.Item label="Pagination Top">
            <FcRadio.Group
              value={this.state.top}
              onChange={(e) => {
                this.setState({ top: e.target.value });
              }}
            >
              <FcRadio.Button value="topLeft">TopLeft</FcRadio.Button>
              <FcRadio.Button value="topCenter">TopCenter</FcRadio.Button>
              <FcRadio.Button value="topRight">TopRight</FcRadio.Button>
              <FcRadio.Button value="none">None</FcRadio.Button>
            </FcRadio.Group>
          </FcForm.Item>
          <FcForm.Item label="Pagination Bottom">
            <FcRadio.Group
              value={this.state.bottom}
              onChange={(e) => {
                this.setState({ bottom: e.target.value });
              }}
            >
              <FcRadio.Button value="bottomLeft">BottomLeft</FcRadio.Button>
              <FcRadio.Button value="bottomCenter">BottomCenter</FcRadio.Button>
              <FcRadio.Button value="bottomRight">BottomRight</FcRadio.Button>
              <FcRadio.Button value="none">None</FcRadio.Button>
            </FcRadio.Group>
          </FcForm.Item>
        </FcForm>
        <FcTable
          {...this.state}
          pagination={{ position: [this.state.top, this.state.bottom] }}
          columns={tableColumns}
          dataSource={state.hasData ? data : null}
          scroll={scroll}
        />
      </>
    );
  }
}

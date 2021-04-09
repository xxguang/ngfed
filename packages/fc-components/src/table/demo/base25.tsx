/**
 * title:分页设置
 * desc:表格的分页设置。
 */

import React from 'react';
import { FcTable, FcTag, FcRadio, FcSpace } from '@ngfed/fc-components';

const topOptions = [
  { label: 'topLeft', value: 'topLeft' },
  { label: 'topCenter', value: 'topCenter' },
  { label: 'topRight', value: 'topRight' },
  { label: 'none', value: 'none' },
];

const bottomOptions = [
  { label: 'bottomLeft', value: 'bottomLeft' },
  { label: 'bottomCenter', value: 'bottomCenter' },
  { label: 'bottomRight', value: 'bottomRight' },
  { label: 'none', value: 'none' },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'FcTags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <span>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <FcTag color={color} key={tag}>
              {tag.toUpperCase()}
            </FcTag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <FcSpace size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </FcSpace>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default class Demo extends React.Component {
  state = {
    top: 'topLeft',
    bottom: 'bottomRight',
  };

  render() {
    return (
      <div>
        <div>
          <FcRadio.Group
            style={{ marginBottom: 10 }}
            options={topOptions}
            value={this.state.top}
            onChange={(e) => {
              this.setState({ top: e.target.value });
            }}
          />
        </div>
        <FcRadio.Group
          style={{ marginBottom: 10 }}
          options={bottomOptions}
          value={this.state.bottom}
          onChange={(e) => {
            this.setState({ bottom: e.target.value });
          }}
        />
        <FcTable
          columns={columns}
          pagination={{ position: [this.state.top, this.state.bottom] }}
          dataSource={data}
        />
      </div>
    );
  }
}

import React from 'react';
import { Table } from 'antd';
import omit from 'rc-util/lib/omit';

const { Column, ColumnGroup, Summary } = Table;

function FcTable(props) {
  props = omit(props, ['showSorterTooltip']);
  return <Table {...props} />;
}

FcTable.Column = Column;
FcTable.ColumnGroup = ColumnGroup;
FcTable.Summary = Summary;
export default FcTable;

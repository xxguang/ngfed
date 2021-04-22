/**
 * title: hook
 * desc: 钩子函数，操作表格时可触发的钩子函数
 * iframe: 800
 */
import React from 'react';
import { FbSheet } from '@ngfed/fb-business';

const options = {
  container: 'luckysheet', // 设定DOM容器的id
  title: 'Luckysheet Demo', // 设定表格名称
  lang: 'zh',
  hook: {
    cellDragStop: function (cell, postion, sheetFile, ctx, event) {
      // console.info(cell, postion, sheetFile, ctx, event);
    },
    rowTitleCellRenderBefore: function (rowNum, postion, ctx) {
      // console.log(rowNum);
    },
    rowTitleCellRenderAfter: function (rowNum, postion, ctx) {
      // console.log(ctx);
    },
    columnTitleCellRenderBefore: function (columnAbc, postion, ctx) {
      // console.log(columnAbc);
    },
    columnTitleCellRenderAfter: function (columnAbc, postion, ctx) {
      // console.log(postion);
    },
    cellRenderBefore: function (cell, postion, sheetFile, ctx) {
      // console.log(cell,postion,sheetFile,ctx);
    },
    cellRenderAfter: function (cell, postion, sheetFile, ctx) {
      // console.log(postion);
    },
    cellMousedownBefore: function (cell, postion, sheetFile, ctx) {
      // console.log(postion);
    },
    cellMousedown: function (cell, postion, sheetFile, ctx) {
      // console.log(sheetFile);
    },
    sheetMousemove: function (cell, postion, sheetFile, moveState, ctx) {
      console.log(cell, postion, sheetFile, moveState, ctx);
    },
    sheetMouseup: function (cell, postion, sheetFile, moveState, ctx) {
      // console.log(cell,postion,sheetFile,moveState,ctx);
    },
    cellAllRenderBefore: function (data, sheetFile, ctx) {
      // console.info(data,sheetFile,ctx)
    },
    updated: function (operate) {
      // console.info(operate)
    },
    cellUpdateBefore: function (r, c, value, isRefresh) {
      // console.info('cellUpdateBefore',r,c,value,isRefresh)
    },
    cellUpdated: function (r, c, oldValue, newValue, isRefresh) {
      // console.info('cellUpdated',r,c,oldValue, newValue, isRefresh)
    },
    sheetActivate: function (index, isPivotInitial, isNewSheet) {
      // console.info(index, isPivotInitial, isNewSheet)
    },
    rangeSelect: function (index, sheet) {
      // console.info(index, sheet)
    },
    commentInsertBefore: function (r, c) {
      // console.info(r, c)
    },
    commentInsertAfter: function (r, c, cell) {
      // console.info(r, c, cell)
    },
    commentDeleteBefore: function (r, c, cell) {
      // console.info(r, c, cell)
    },
    commentDeleteAfter: function (r, c, cell) {
      // console.info(r, c, cell)
    },
    commentUpdateBefore: function (r, c, value) {
      // console.info(r, c, value)
    },
    commentUpdateAfter: function (r, c, oldCell, newCell) {
      // console.info(r, c, oldCell, newCell)
    },
    cellEditBefore: function (range) {
      // console.info(range)
    },
    workbookCreateAfter: function (json) {
      // console.info(json)
    },
    rangePasteBefore: function (range, data) {
      // console.info('rangePasteBefore',range,data)
      // return false; //Can intercept paste
    },
  },
};

export default () => {
  return (
    <div style={{ height: '800px' }}>
      <FbSheet options={options} showtTopbar={true} />
    </div>
  );
};

/**
 * title: 上传列表拖拽排序
 * desc: 使用 itemRender ，我们可以集成 react-dnd 来实现对上传列表拖拽排序。
 */

import React, { useState, useCallback, useRef } from 'react';
import { FcUpload, FcButton, FcTooltip } from '@ngfed/fc-components';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

import { UploadOutlined } from '@ant-design/icons';

import { Tooltip } from 'antd';

const type = 'DragableUploadList';

const DragableUploadListItem = ({ originNode, moveRow, file, fileList }) => {
    const ref = React.useRef();
    const index = fileList.indexOf(file);
    const [{ isOver, dropClassName }, drop] = useDrop(
      () => ({
        accept: type,
        collect: monitor => {
          const { index: dragIndex } = monitor.getItem() || {};
          if (dragIndex === index) {
            return {};
          }
          return {
            isOver: monitor.isOver(),
            dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
          };
        },
        drop: item => {
          moveRow(item.index, index);
        },
      }),
      [index],
    );
    const [, drag] = useDrag(
      () => ({
        type,
        item: { index },
        collect: monitor => ({
          isDragging: monitor.isDragging(),
        }),
      }),
      [],
    );
    drop(drag(ref));
    const errorNode = <Tooltip title="Upload Error">{originNode.props.children}</Tooltip>;
    return (
      <div
        ref={ref}
        className={`ant-upload-draggable-list-item ${isOver ? dropClassName : ''}`}
        style={{ cursor: 'move' }}
      >
        {file.status === 'error' ? errorNode : originNode}
      </div>
    );
  };
  
  const DragSortingUpload: React.FC = () => {
    const [fileList, setFileList] = useState([
      {
        uid: '-1',
        name: 'image1.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-2',
        name: 'image2.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-3',
        name: 'image3.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-4',
        name: 'image4.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-5',
        name: 'image.png',
        status: 'error',
      },
    ]);
  
    const moveRow = useCallback(
      (dragIndex, hoverIndex) => {
        const dragRow = fileList[dragIndex];
        setFileList(
          update(fileList, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragRow],
            ],
          }),
        );
      },
      [fileList],
    );
  
    const onChange = ({ fileList: newFileList }) => {
      setFileList(newFileList);
    };
  
    return (
      <DndProvider backend={HTML5Backend}>
        <FcUpload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          fileList={fileList}
          onChange={onChange}
          itemRender={(originNode, file, currFileList) => (
            <DragableUploadListItem
              originNode={originNode}
              file={file}
              fileList={currFileList}
              moveRow={moveRow}
            />
          )}
        >
          <FcButton icon={<UploadOutlined />}>Click to Upload</FcButton>
        </FcUpload>
      </DndProvider>
    );
  };
  

export default <DragSortingUpload />

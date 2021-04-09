/**
 * title: 上传前裁切图片
 * desc: 配合 antd-img-crop 实现上传前裁切图片。
 */

import React, { useState } from 'react';
import { FcUpload } from '@ngfed/fc-components';

import ImgCrop from 'antd-img-crop';


const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

class Demo extends React.Component{
    render(){
        return (
        <ImgCrop rotate>
          <FcUpload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && '+ Upload'}
          </FcUpload>
        </ImgCrop>
      );
    }
}


export default Demo;

/**
 * title: 渐进加载。
 * desc: 大图使用 placeholder 渐进加载。
 */
import React from 'react';
import { FcImage, FcButton, FcSpace } from '@ngfed/fc-components';

function ImageDemo() {
  const [random, setRandom] = React.useState();
  return (
    <FcSpace size={12}>
      <FcImage
        width={200}
        src={`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`}
        placeholder={
          <FcImage
            preview={false}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
            width={200}
          />
        }
      />
      <FcButton
        type="primary"
        onClick={() => {
          setRandom(Date.now());
        }}
      >
        Reload
      </FcButton>
    </FcSpace>
  );
}

export default ImageDemo;

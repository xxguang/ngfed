/**
 * title: 自定义文字格式
 * desc: format 属性指定格式。
 */

import { FcProgress } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcProgress type="circle" percent={75} format={(percent) => `${percent} Days`} />
      <FcProgress type="circle" percent={100} format={() => 'Done'} />
    </>
  );
};

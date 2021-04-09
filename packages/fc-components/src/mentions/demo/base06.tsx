/**
 * title: 无效或只读
 * desc: 通过 disabled 属性设置是否生效。通过 readOnly 属性设置是否只读。
 */

import React from 'react';
import { FcMentions } from '@ngfed/fc-components';

const { Option } = FcMentions;

function getOptions() {
  return ['afc163', 'zombiej', 'yesmeck'].map((value) => (
    <Option key={value} value={value}>
      {value}
    </Option>
  ));
}

function App() {
  return (
    <>
      <div style={{ marginBottom: 10 }}>
        <FcMentions style={{ width: '100%' }} placeholder="this is disabled Mentions" disabled>
          {getOptions()}
        </FcMentions>
      </div>
      <FcMentions style={{ width: '100%' }} placeholder="this is readOnly Mentions" readOnly>
        {getOptions()}
      </FcMentions>
    </>
  );
}

export default () => {
  return <App />;
};

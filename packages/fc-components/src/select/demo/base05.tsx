/**
 * title: 定制回填内容
 * desc: 使用 `optionLabelProp` 指定回填到选择框的 `Option` 属性。
 */

import React from 'react';
import { FcSelect, FcSpace } from '@ngfed/fc-components';
const { Option } = FcSelect;

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default () => {
  return (
    <>
      <FcSelect
        mode="multiple"
        style={{ width: '100%' }}
        placeholder="select one country"
        defaultValue={['china']}
        onChange={handleChange}
        optionLabelProp="label"
      >
        <Option value="china" label="China">
          <div className="demo-option-label-item">
            <span role="img" aria-label="China">
              🇨🇳
            </span>
            China (中国)
          </div>
        </Option>
        <Option value="usa" label="USA">
          <div className="demo-option-label-item">
            <span role="img" aria-label="USA">
              🇺🇸
            </span>
            USA (美国)
          </div>
        </Option>
        <Option value="japan" label="Japan">
          <div className="demo-option-label-item">
            <span role="img" aria-label="Japan">
              🇯🇵
            </span>
            Japan (日本)
          </div>
        </Option>
        <Option value="korea" label="Korea">
          <div className="demo-option-label-item">
            <span role="img" aria-label="Korea">
              🇰🇷
            </span>
            Korea (韩国)
          </div>
        </Option>
      </FcSelect>
    </>
  );
};

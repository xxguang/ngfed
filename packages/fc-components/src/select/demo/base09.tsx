/**
 * title: 联动
 * desc: 省市联动是典型的例子。
 */

import React from 'react';
import { FcSelect, FcSpace } from '@ngfed/fc-components';
const { Option, OptGroup } = FcSelect;

const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
};

const App = () => {
  const [cities, setCities] = React.useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = React.useState(cityData[provinceData[0]][0]);

  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  const onSecondCityChange = (value) => {
    setSecondCity(value);
  };

  return (
    <>
      <FcSpace>
        <FcSelect
          defaultValue={provinceData[0]}
          style={{ width: 150 }}
          onChange={handleProvinceChange}
        >
          {provinceData.map((province) => (
            <Option key={province}>{province}</Option>
          ))}
        </FcSelect>
        <FcSelect style={{ width: 150 }} value={secondCity} onChange={onSecondCityChange}>
          {cities.map((city) => (
            <Option key={city}>{city}</Option>
          ))}
        </FcSelect>
      </FcSpace>
    </>
  );
};

export default () => {
  return (
    <>
      <App />
    </>
  );
};

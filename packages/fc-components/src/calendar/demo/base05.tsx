/**
 * title: 自定义头部
 * desc: 自定义日历头部内容。
 */

import React from 'react';
import {
  FcCalendar,
  FcAlert,
  FcSelect,
  FcRadio,
  FcCol,
  FcRow,
  FcTypography,
} from '@ngfed/fc-components';
import moment from 'moment';

import './base05.css';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

export default () => {
  return (
    <div className="site-calendar-customize-header-wrapper">
      <FcCalendar
        fullscreen={false}
        headerRender={({ value, type, onChange, onTypeChange }) => {
          const start = 0;
          const end = 12;
          const monthOptions = [];

          const current = value.clone();
          const localeData = value.localeData();
          const months = [];
          for (let i = 0; i < 12; i++) {
            current.month(i);
            months.push(localeData.monthsShort(current));
          }

          for (let index = start; index < end; index++) {
            monthOptions.push(
              <FcSelect.Option className="month-item" key={`${index}`}>
                {months[index]}
              </FcSelect.Option>,
            );
          }
          const month = value.month();

          const year = value.year();
          const options = [];
          for (let i = year - 10; i < year + 10; i += 1) {
            options.push(
              <FcSelect.Option key={i} value={i} className="year-item">
                {i}
              </FcSelect.Option>,
            );
          }
          return (
            <div style={{ padding: 8 }}>
              <FcTypography.Title level={4}>Custom header</FcTypography.Title>
              <FcRow gutter={8}>
                <FcCol>
                  <FcRadio.Group
                    size="small"
                    onChange={(e) => onTypeChange(e.target.value)}
                    value={type}
                  >
                    <FcRadio.Button value="month">Month</FcRadio.Button>
                    <FcRadio.Button value="year">Year</FcRadio.Button>
                  </FcRadio.Group>
                </FcCol>
                <FcCol>
                  <FcSelect
                    size="small"
                    dropdownMatchSelectWidth={false}
                    className="my-year-select"
                    onChange={(newYear) => {
                      const now = value.clone().year(newYear);
                      onChange(now);
                    }}
                    value={String(year)}
                  >
                    {options}
                  </FcSelect>
                </FcCol>
                <FcCol>
                  <FcSelect
                    size="small"
                    dropdownMatchSelectWidth={false}
                    value={String(month)}
                    onChange={(selectedMonth) => {
                      const newValue = value.clone();
                      newValue.month(parseInt(selectedMonth, 10));
                      onChange(newValue);
                    }}
                  >
                    {monthOptions}
                  </FcSelect>
                </FcCol>
              </FcRow>
            </div>
          );
        }}
        onPanelChange={onPanelChange}
      />
    </div>
  );
};

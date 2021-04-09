/**
 * title:附加内容
 * desc:可可以在页签两边添加附加操作。
 */
import React from 'react';
import { FcTabs, FcButton, FcDivider, FcCheckbox } from '@ngfed/fc-components';

const { TabPane } = FcTabs;

const CheckboxGroup = FcCheckbox.Group;

const operations = <FcButton>Extra Action</FcButton>;

const OperationsSlot = {
  left: <FcButton className="tabs-extra-demo-button">Left Extra Action</FcButton>,
  right: <FcButton>Right Extra Action</FcButton>,
};

const options = ['left', 'right'];

export default () => {
  const [position, setPosition] = React.useState(['left', 'right']);

  const slot = React.useMemo(() => {
    if (position.length === 0) return null;

    return position.reduce(
      (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
      {},
    );
  }, [position]);

  return (
    <>
      <FcTabs tabBarExtraContent={operations}>
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </FcTabs>
      <br />
      <br />
      <br />
      <div>You can also specify its direction or both side</div>
      <FcDivider />
      <CheckboxGroup
        options={options}
        value={position}
        onChange={(value) => {
          setPosition(value);
        }}
      />
      <br />
      <br />
      <FcTabs tabBarExtraContent={slot}>
        <TabPane tab="Tab 1" key="1">
          Content of tab 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of tab 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of tab 3
        </TabPane>
      </FcTabs>
    </>
  );
};

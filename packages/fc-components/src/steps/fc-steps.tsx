import React from 'react';
import { Steps } from 'antd';
import omit from 'rc-util/lib/omit';

const { Step } = Steps;
function FcSteps(props) {
  //剔除的api放在后面的数组中
  props = omit(props, ['percent', 'responsive']);
  console.log(props);
  return (
    <>
      <Steps {...props} />
    </>
  );
}
function FcStep(props) {
  //剔除的api放在后面的数组中
  props = omit(props, []);
  console.log(props);
  return (
    <>
      <Step {...props} />
    </>
  );
}
FcSteps.Step = FcStep;
export default FcSteps;

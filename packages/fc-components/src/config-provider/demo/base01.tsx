/**
 * title: 方向
 * desc: 这里列出了支持 rtl 方向的组件，您可以在演示中切换方向。
 */
import {
  FcCol,
  FcRow,
  FcSelect,
  FcConfigProvider,
  FcCascader,
  FcRadio,
  FcSwitch,
  FcDivider,
} from '@ngfed/fc-components';

import { SearchOutlined as SearchIcon, SmileOutlined } from '@ant-design/icons';

const { Option } = FcSelect;

const cascaderOptions = [
  {
    value: 'tehran',
    label: 'تهران',
    children: [
      {
        value: 'tehran-c',
        label: 'تهران',
        children: [
          {
            value: 'saadat-abad',
            label: 'سعادت آیاد',
          },
        ],
      },
    ],
  },
  {
    value: 'ardabil',
    label: 'اردبیل',
    children: [
      {
        value: 'ardabil-c',
        label: 'اردبیل',
        children: [
          {
            value: 'primadar',
            label: 'پیرمادر',
          },
        ],
      },
    ],
  },
  {
    value: 'gilan',
    label: 'گیلان',
    children: [
      {
        value: 'rasht',
        label: 'رشت',
        children: [
          {
            value: 'district-3',
            label: 'منطقه ۳',
          },
        ],
      },
    ],
  },
];

class Page extends React.Component {
  state = {
    currentStep: 0,
    modalVisible: false,

    badgeCount: 5,
    showBadge: true,
  };

  selectBefore = (
    <FcSelect defaultValue="Http://" style={{ width: 90 }}>
      <Option value="Http://">Http://</Option>
      <Option value="Https://">Https://</Option>
    </FcSelect>
  );

  selectAfter = (
    <FcSelect defaultValue=".com" style={{ width: 80 }}>
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </FcSelect>
  );

  handleOk = (e) => {
    console.log(e);
    this.setState({
      modalVisible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      modalVisible: false,
    });
  };

  render() {
    const { currentStep } = this.state;
    return (
      <div className="direction-components">
        <FcRow>
          <FcCol span={24}>
            <FcDivider orientation="left">FcCascader example</FcDivider>
            <FcCascader
              suffixIcon={<SearchIcon />}
              options={cascaderOptions}
              onChange={this.onFcCascaderChange}
              placeholder="یک مورد انتخاب کنید"
              popupPlacement={this.props.popupPlacement}
            />
            &nbsp;&nbsp;&nbsp;&nbsp; With search:
            <FcCascader
              suffixIcon={<SmileOutlined />}
              options={cascaderOptions}
              onChange={this.onFcCascaderChange}
              placeholder="FcSelect an item"
              popupPlacement={this.props.popupPlacement}
              showSearch={this.cascaderFilter}
            />
          </FcCol>
        </FcRow>
        <br />
        <FcRow>
          <FcCol span={12}>
            <FcDivider orientation="left">FcSwitch example</FcDivider>
            &nbsp;&nbsp;
            <FcSwitch defaultChecked />
            &nbsp;&nbsp;
            <FcSwitch loading defaultChecked />
            &nbsp;&nbsp;
            <FcSwitch size="small" loading />
          </FcCol>
          <FcCol span={12}>
            <FcDivider orientation="left">FcRadio Group example</FcDivider>

            <FcRadio.Group defaultValue="c" buttonStyle="solid">
              <FcRadio.Button value="a">تهران</FcRadio.Button>
              <FcRadio.Button value="b" disabled>
                اصفهان
              </FcRadio.Button>
              <FcRadio.Button value="c">فارس</FcRadio.Button>
              <FcRadio.Button value="d">خوزستان</FcRadio.Button>
            </FcRadio.Group>
          </FcCol>
        </FcRow>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    direction: 'ltr',
    popupPlacement: 'bottomLeft',
  };

  changeDirection = (e) => {
    const directionValue = e.target.value;
    this.setState({ direction: directionValue });
    if (directionValue === 'rtl') {
      this.setState({ popupPlacement: 'bottomRight' });
    } else {
      this.setState({ popupPlacement: 'bottomLeft' });
    }
  };

  render() {
    const { direction, popupPlacement } = this.state;
    return (
      <>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginRight: 16 }}>Change direction of components: </span>
          <FcRadio.Group defaultValue="ltr" onChange={this.changeDirection}>
            <FcRadio.Button key="ltr" value="ltr">
              LTR
            </FcRadio.Button>
            <FcRadio.Button key="rtl" value="rtl">
              RTL
            </FcRadio.Button>
          </FcRadio.Group>
        </div>
        <FcConfigProvider direction={direction}>
          <Page className={direction} popupPlacement={popupPlacement} />
        </FcConfigProvider>
      </>
    );
  }
}

export default App;

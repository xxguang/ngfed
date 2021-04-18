import React from 'react';
import { Row, Col } from 'antd';

import './index.less';

type CardLoadingProps = {
  className?: string;
  style?: React.CSSProperties;
  prefix?: string;
};

const CardLoading: React.FC<CardLoadingProps> = (props) => {
  const { style, prefix } = props;
  return (
    <div className={`${prefix}-loading-content`} style={style}>
      <Row gutter={8}>
        <Col span={22}>
          <div className={`${prefix}-loading-block`}></div>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={8}>
          <div className={`${prefix}-loading-block`}></div>
        </Col>
        <Col span={15}>
          <div className={`${prefix}-loading-block`}></div>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={6}>
          <div className={`${prefix}-loading-block`}></div>
        </Col>
        <Col span={18}>
          <div className={`${prefix}-loading-block`}></div>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={13}>
          <div className={`${prefix}-loading-block`}></div>
        </Col>
        <Col span={9}>
          <div className={`${prefix}-loading-block`}></div>
        </Col>
      </Row>
      <Row gutter={8}>
        <Col span={4}>
          <div className={`${prefix}-loading-block`}></div>
        </Col>
        <Col span={3}>
          <div className={`${prefix}-loading-block`}></div>
        </Col>
        <Col span={16}>
          <div className={`${prefix}-loading-block`}></div>
        </Col>
      </Row>
    </div>
  );
};

export default CardLoading;

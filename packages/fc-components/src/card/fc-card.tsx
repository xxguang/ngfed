import React from 'react';
import { Card } from 'antd';
import omit from 'rc-util/lib/omit';

function FcCard(props) {
  props = omit(props, ['bordered', 'defaultActiveTabKey', 'tabBarExtraContent']);
  return (
    <>
      <Card {...props} />
    </>
  );
}

function FcGrid(props) {
  props = omit(props, ['hoverable']);
  return (
    <>
      <Card.Grid {...props} />
    </>
  );
}

function FcMeta(props) {
  props = omit(props, ['']);
  return (
    <>
      <Card.Meta {...props} />
    </>
  );
}

FcCard.Grid = FcGrid;
FcCard.Meta = FcMeta;
export default FcCard;

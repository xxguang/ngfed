import React from 'react';
import { Typography } from 'antd';
import omit from 'rc-util/lib/omit';

const { Title, Text, Link, Paragraph } = Typography;

function FcTitle(props) {
  props = omit(props, ['copyable', 'editable', 'onChange']);
  return (
    <>
      <Title {...props} />
    </>
  );
}

function FcText(props) {
  props = omit(props, ['copyable', 'editable', 'onChange']);
  return (
    <>
      <Text {...props} />
    </>
  );
}

function FcLink(props) {
  props = omit(props, ['copyable', 'editable', 'onChange']);
  return (
    <>
      <Link {...props} />
    </>
  );
}

function FcParagraph(props) {
  props = omit(props, ['copyable', 'editable', 'onChange']);
  return (
    <>
      <Paragraph {...props} />
    </>
  );
}

const FcTypography = {
  Title: FcTitle,
  Text: FcText,
  Link: FcLink,
  Paragraph: FcParagraph,
};
export default FcTypography;

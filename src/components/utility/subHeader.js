import React from 'react';
import { ComponentTitleWrapper } from './subHeader.style';

export default props => (
  <ComponentTitleWrapper className="isoComponentTitle">
    {props.children}
  </ComponentTitleWrapper>
);

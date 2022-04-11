import styled from 'styled-components';
import { palette } from 'styled-theme';

const WidgetWrapper = styled.div`
  margin: 0 10px;
  width: ${props => props.width}px;
  margin-top: ${props => props.gutterTop}px;
  margin-right: ${props => props.gutterRight}px;
  margin-bottom: ${props => props.gutterBottom}px;
  margin-left: ${props => props.gutterLeft}px;
  padding: ${props => props.padding};
  background-color: ${props => props.bgColor}px;
  @media only screen and (max-width: 767) {
    margin-right: 0 !important;
  }
  .dow{
    font-weight: bold;
  }
  .pagevisit{
    color: #42db9c;
    font-weight: bold;
  }
  .newvisit{
    color: #e33d59;
    font-weight: bold;
  }
  
`;

const WidgetBox = styled.div`
  width: 100%;
  height: ${props => (props.height ? `${props.height}px` : '100%')};
  padding: ${props => (props.padding ? props.padding : '10px')};
  background-color: #ffffff;
  border: 1px solid ${palette('border', 2)};

  canvas {
    width: 100% !important;
    height: 100% !important;
  }
  .widgetheader{
    padding: 10px 15px 10px;
  }
  .dropdown{
    float: right;
    color: gray;
  }
`;
const getAlignContent = (align = 'flex-start') => {
  if (align === 'start') return 'flex-start';
  if (align === 'end') return 'flex-end';
  return align;
};
const WidgetColumn = styled.div`
  align-content: ${props => getAlignContent(props.align)};
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: ${props => props.gutterTop}px;
  margin-right: ${props => props.gutterRight}px;
  margin-bottom: ${props => props.gutterBottom}px;
  margin-left: ${props => props.gutterLeft}px;
  padding: ${props => props.padding}px;
  width: ${props => props.width}px;
`;

export { WidgetWrapper, WidgetBox, WidgetColumn };

import styled from "styled-components";
import WithDirection from "@iso/lib/helpers/rtl";
import { palette } from 'styled-theme';

const WidgetWrapper = styled.div`

  margin: 0 10px;
  width: ${(props) => props.width}px;
  margin-top: ${(props) => props.gutterTop}px;
  margin-right: ${(props) => props.gutterRight}px;
  margin-bottom: ${(props) => props.gutterBottom}px;
  margin-left: ${(props) => props.gutterLeft}px;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.bgColor}px;
  @media only screen and (max-width: 767) {
    margin-right: 0 !important;
  }
  .textbold {
    font-weight: bold;
  }
  .cardicon {
    width: 100%;
    max-width: 30px;
    height: auto;
    margin-left: 10%;
    margin-top: 12%;
  }

  .cardborder {
    border-radius: 15px;
    height: 100px;
    width: 100%;
    max-width: 200px;
    width: 160px;
  }
  .cardtext {
    font-size: 10px;
  }
  .ant-card-body {
    padding: 16px;
  }

  .cardhead {
    margin-left: 0%;
    font-size: 10px;
    font-color: red;
  }
  .isoStickerWidget{
    border: solid 4px;
    border-radius: 25px;
    border-color: #ff000000;
  }
`;
export const Box = styled.div`
.ant-select {
  .ant-select-selector{
    background-color: darkblue!important;
    color: white;
    border-radius: 10px!important;  
  }
  .ant-select-arrow {
    color: white !important;
  }
  width:auto;
}
.ant-input-affix-wrapper{
  width:auto !important
}
  width: 100%;
  height: 100%;
  
  background-color: #ffffff;
  margin: 0 0 30px;

  &:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 767px) {
    padding: 20px;
    ${'' /* margin: 0 10px 30px; */};
  }

  &.half {
    width: calc(50% - 34px);
    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;
export const ContentWrapper = styled.div`
.ant-form-item-control-input-content{
  .ant-input{
    max-width:100%
  }
}
.ant-col{
  .ant-space{
    display:grid
  }
}
.ant-space-item{
  display:grid;
 
  width:100%;
}
.ant-input-group{
  display:grid;
  
}
.ant-input{
 
}
.btnStyle{
  .ant-btn{
    width:auto !important
  }
}
  padding: 30px 0;
  .fontgray {
    color: #a8a59d;
  }
  .profilepic {
    max-width: 190px;
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
  .cbutton {
    padding-top: 30px;
    text-align: center;
  }
  .toppadding {
    padding-top: 0px;
  }
  .signUpContent {
    padding-top: 30px;
    margin-bottom: 8px;
    margin-left: 20%;
  }
  .ant-collapse-header {
    color: white !important;
    text-align: center;
    font-weight: bold;
  }
  .lvl0 {
    background-color: #c1b0ff;
  }
  .lvl1 {
    background-color: #af9afc;
  }
  .lvl2 {
    background-color: #987ef7;
  }
  .lvl3 {
    background-color: #8f76e8;
  }
  .lvl4 {
    background-color: #7e66d1;
  }

  .selectStyle {
    .ant-select-selector {
      background-color: darkblue !important;
      color: white;
      border-radius: 10px !important;
    }
    width: 100%;
    .ant-select-arrow {
      color: white !important;
    }
  }

  .pagination {
    margin-top: 20%;
  }
  .ant-form-small .ant-form-item-label > label {
    font-weight: 500;
  }
  .ant-form-small .ant-form-item-label > label {
    font-weight: 500;
  }
  .ant-tabs-tab {
    background: #fff0 !important;
  }
  .ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab-active, .ant-tabs-card.ant-tabs-top > div > .ant-tabs-nav .ant-tabs-tab-active {
    border-bottom-color: #fff0 !important;
  }
  .ant-card-hoverable:hover {
    0 1px 2px -2px rgb(0 0 0 / 16%), 
    0 3px 6px 0 rgb(0 0 0 / 12%), 
    0 2px 12px 4px rgb(0 0 0 / 9%)
  }
  .ant-tabs-tab-active {
    .cardborder{
      border-color: #b114ff !important;
    }
  }
  .btnStyle {
    .ant-btn{
      background-color: darkblue!important;
      color: white;
      border-radius: 10px!important;  
      width: 50%;
    }
    width: 100%;
  }
`;
export default WithDirection(WidgetWrapper);

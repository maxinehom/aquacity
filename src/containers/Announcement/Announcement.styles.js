import styled from "styled-components";
import { palette, font } from "styled-theme";

const Wrapper = styled.div``;

export const ContentWrapper = styled.div`
.ant-space{
  display:contents
}
.ant-picker-range{
  width:100%
}
.ant-space{
  .ant-space-item{
    display:grid !important;
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
  .filterbtn{margin-right:5px}
  @media (max-width: 768px) { .filterbtn{
    margin-bottom:5px
  }}

  width: 100%;
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
  .cbutton{
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
    color: white!important;
    text-align: center;
    font-weight: bold;
  }
  .lvl0{ 
    background-color: #c1b0ff;   
  }
  .lvl1{
    background-color: #af9afc;
  }
  .lvl2{
    background-color: #987ef7;
  }
  .lvl3{
    background-color: #8f76e8;
  }
  .lvl4{
    background-color: #7e66d1;
  }
 
  .selectStyle {
    .ant-select-selector{
      background-color: darkblue!important;
      color: white;
      border-radius: 10px!important;  
    }
    width: 100%;
    .ant-select-arrow {
      color: white !important;
    }
  }
  .btnStyle {
    .ant-btn{
      background-color: darkblue!important;
      color: white;
      border-radius: 10px!important;  
    }
    width: 100%;
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
  
`;
export const WidgetWrapper = styled.div`
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
    max-width: 500px;
    min-width: 150px;
    .ant-card-body {
      padding: 15px;
    }
  }
  .cardtext {
    font-size: 10px;
    margin-bottom: 50%;
  }

  .cardhead {
    margin-left: 0%;
    font-size: 10px;
    font-color: red;
  }
`;
export const QuillEditor = styled.div`
  .ql-editor {
    min-height: 215px;
    text-align: ${(props) => (props["data-rtl"] === "rtl" ? "right" : "left")};
  }

  .ql-toolbar.ql-snow,
  .ql-container.ql-snow {
    border: 1px solid ${palette("border", 0)};
    text-align: ${(props) => (props["data-rtl"] === "rtl" ? "right" : "left")};

    .ql-formats {
      margin: ${(props) =>
        props["data-rtl"] === "rtl" ? "0 0 0 15px" : "0 15px 0 0"};
    }

    .ql-picker-label {
      padding: ${(props) =>
        props["data-rtl"] === "rtl" ? "0 8px 0 2px" : "0 2px 0 8px"};

      &:not(.ql-color-picker):not(.ql-icon-picker) {
        svg {
          right: ${(props) => (props["data-rtl"] === "rtl" ? "inherit" : "0")};
          left: ${(props) => (props["data-rtl"] === "rtl" ? "0" : "inherit")};
        }
      }
    }
  }

  .ql-container {
    font-family: ${font("primary", 0)};
    min-height: 220px;
  }

  .ql-editor p,
  .ql-editor ol,
  .ql-editor ul,
  .ql-editor pre,
  .ql-editor blockquote,
  .ql-editor h1,
  .ql-editor h2,
  .ql-editor h3,
  .ql-editor h4,
  .ql-editor h5,
  .ql-editor h6 {
    color: ${palette("text", 0)};
  }

  .ql-snow.ql-toolbar button:hover,
  .ql-snow .ql-toolbar button:hover,
  .ql-snow.ql-toolbar button:focus,
  .ql-snow .ql-toolbar button:focus,
  .ql-snow.ql-toolbar button.ql-active,
  .ql-snow .ql-toolbar button.ql-active,
  .ql-snow.ql-toolbar .ql-picker-label:hover,
  .ql-snow .ql-toolbar .ql-picker-label:hover,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active,
  .ql-snow.ql-toolbar .ql-picker-item:hover,
  .ql-snow .ql-toolbar .ql-picker-item:hover,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: ${palette("primary", 0)};
  }
  .ql-snow.ql-toolbar button:hover .ql-fill,
  .ql-snow .ql-toolbar button:hover .ql-fill,
  .ql-snow.ql-toolbar button:focus .ql-fill,
  .ql-snow .ql-toolbar button:focus .ql-fill,
  .ql-snow.ql-toolbar button.ql-active .ql-fill,
  .ql-snow .ql-toolbar button.ql-active .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
  .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: ${palette("primary", 0)};
  }
  .ql-snow.ql-toolbar button:hover .ql-stroke,
  .ql-snow .ql-toolbar button:hover .ql-stroke,
  .ql-snow.ql-toolbar button:focus .ql-stroke,
  .ql-snow .ql-toolbar button:focus .ql-stroke,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
  .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
  .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
  .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
  .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: ${palette("primary", 0)};
  }

  .ql-snow a {
    color: ${palette("primary", 0)};
  }
`;
export default WidgetWrapper;
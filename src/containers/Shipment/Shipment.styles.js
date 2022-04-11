import styled from "styled-components";
import { palette } from "styled-theme";

const Wrapper = styled.div`

`;
export const Banner = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 400px;
  position: relative;
  &::after {
    content: "";
    height: 160px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.41));
  }
  
  .container {
    height: 400px;
    position: relative;
    z-index: 1;
    .avatar-card {
      position: absolute;
      bottom: -42px;
      left: 30px;
      pointer-events: none;
      width: calc(100% - 60px);
      @media only screen and (max-width: 767px) {
        bottom: -35px;
      }
      @media only screen and (max-width: 667px) {
        bottom: 20px;
      }
      .avatar {
        @media only screen and (max-width: 767px) {
          width: 160px;
          height: 160px;
        }
        @media only screen and (max-width: 667px) {
          width: 140px;
          height: 140px;
        }
        @media only screen and (max-width: 480px) {
          width: 100px;
          height: 100px;
          border-width: 3px;
        }
      }
      .info {
        @media only screen and (max-width: 767px) {
          padding-left: 15px;
          width: calc(100% - 160px);
        }
        @media only screen and (max-width: 667px) {
          width: calc(100% - 140px);
        }
        @media only screen and (max-width: 480px) {
          width: calc(100% - 100px);
        }
        h3 {
          font-size: 24px;
          line-height: 36px;
          font-weight: 500;
          color: #ffffff;
          pointer-events: all;
          @media only screen and (max-width: 667px) {
            font-size: 22px;
            line-height: 34px;
          }
          @media only screen and (max-width: 480px) {
            font-size: 18px;
            line-height: 30px;
          }
        
        }
        p {
          color: #ffffff;
          font-size: 14px;
          line-height: 24px;
          pointer-events: all;
        }
        
      }
    }
  }
`;

export const Navigation = styled.div`
  background-color: #ffffff;
  pointer-events: all;
  box-shadow: 0 1px 2px #e5e5e5;
  ul.menu {
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 667px) {
      justify-content: flex-start;
    }
    li {
      margin: 0 15px;
      display: block;
      padding: 18px 15px 19px;
      color: ${palette("secondary", 5)};
      font-size: 14px;
      font-weight: 400;
      cursor: pointer;
      @media only screen and (max-width: 320px) {
        margin: 0 7px;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
      strong {
        font-size: 18px;
        font-weight: 600;
        margin-right: 4px;
      }
      &.active {
        border-bottom: 2px solid ${palette("secondary", 5)};
      }
      
    }
  }
`;

export const ContentWrapper = styled.div`
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

  .cardhead{
    margin-left: 0%;
    font-size: 10px;
    font-color: red;
  }
  
`;
export default WidgetWrapper;

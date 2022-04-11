import styled from "styled-components";
import { palette } from "styled-theme";

const Wrapper = styled.div`

`;


export const ContentWrapper = styled.div`
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
  
`;

export default Wrapper;

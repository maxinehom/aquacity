import styled from 'styled-components';
import WithDirection from '@iso/lib/helpers/rtl';

const WDShopSearchPageWrapper = styled.div`

  padding: 50px 20px 40px;
  overflow: hidden;

  @media only screen and (max-width: 767px) {
    padding: 50px 15px;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 50px 30px;
  }

  .isoShopSidebarToggle {
    margin-bottom: 20px;
    margin: ${(props) =>
      props['data-rtl'] === 'rtl' ? '0 0 20px 0' : '0 0 20px 0'};
  }

  &.sidebarOpen {
    .isoShopSidebar {
      margin: ${(props) =>
        props['data-rtl'] === 'rtl' ? '0 0 0 30px' : '0 30px 0 0'};
    }
  }

  .isoShopMainWrapper {
    width: 100%;
    display: flex;
  }
  .colstyle{
    text-align: center;
  }

  .btncartstyle{
    padding-top: 20px;
    border-radius: 5px;
  }
  .btn{
    border-radius: 10px;
    width: 50%;
    height: 15%;
    color: black;
  }
  .content{
    font-size: 10px;
  }
  .ant-rate {
    font-size: 12px !important;
  }
  .price{
    font-size: 16px;
    font-weight: bold;
    padding-top: 8px;
  }
  .delprice{
    font-size: 16px;
    color:gray;
    font-weight: normal;
  }
  
  .container {
    border-radius: 15px;
    overflow: hidden;
  }
  .container:before {
    content:"";
    position:absolute;
    width:100%;
    height:100%;
    top:0;left:0;right:0;
    background-color:rgba(0,0,0,0);
  }
  .container:hover::before {
    background-color:rgba(0,0,0,0.5);
  }
  .container img {
    display:block;
    width:100%;
    max-width: 1000px;
    margin: 0 auto;
    height: auto;
  }
  .container button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    opacity:0;
  } 
  .container:hover button {   
    opacity: 1;
  }
  
`;
export const Wrapper = styled.div`
  .imgsize{
    width: 100%;
    max-width: 1000px;
    height: auto;
  }
  .detailbtn{
    width: 90%;
    height: 35px;
  }
  .pricetag{
    font-size: 20px;
  }
  .ant-descriptions-row > th, .ant-descriptions-row > td {
    padding-bottom: 10px;
  }
  .imgdesc{
    width: 100%;
    padding-top: 10px;
  }
  .fontdesc{
    padding-top: 10px;
    // font-family: "Roboto";
    // font-weight: 500;
  }
  .ant-descriptions-item-content{
    font-size: 13px;
  }
`;

const ShopSearchPageWrapper = WithDirection(WDShopSearchPageWrapper);

export default ShopSearchPageWrapper;

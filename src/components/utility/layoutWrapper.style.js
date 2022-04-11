import styled from 'styled-components';

const LayoutContentWrapper = styled.div`
.ant-space{
  display:contents
}
.ant-picker-range{
  width:100%
}
  padding: 40px 20px;
  display: flex;
  flex-flow: row wrap;
  overflow: hidden;

  @media only screen and (max-width: 767px) {
    padding: 50px 20px;
  }

  @media (max-width: 580px) {
    padding: 15px;
  }
  .filterbtn{
    margin-right:5px
  }
`;

export { LayoutContentWrapper };

import styled from 'styled-components';
import { borderRadius } from '@iso/lib/helpers/style_utils';

const StickerWidgetWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  overflow: hidden;
  ${borderRadius('5px')};

  .isoIconWrapper {
    display: flex;
    align-items: left;
    justify-content: left;
    width: 80px;
    flex-shrink: 0;
    //background-color: rgba(0, 0, 0, 0.1);

    i {
      font-size: 30px;
    }
  }

  .isoContentWrapper {
    width: 100%;
    padding: 20px 15px 20px 20px;
    display: flex;
    flex-direction: column;

    .isoStatNumber {
      font-size: 25px;
      font-weight: 500;
      line-height: 0.8;
      margin: 0 0 5px;
      @media only screen and (max-width: 767px) {
        font-size:25px;
        font-weight: 500;
        line-height: 0.8;
        margin: 0 0 5px;
      
      }
  
    }

    .isoLabel {
      font-size: 16px;
      font-weight: 400;
      margin: 10px 0 0 0;
      line-height: 2.5;
      margin-top: 30%;

      @media only screen and (min-width: 768px) and (max-width: 1220px) {
        font-size: 16px;
        font-weight: 400;
        margin: 10px 0 0 0;
        line-height: 2.5;
        margin-top: 18%;
      }
      @media only screen and (min-width: 300px) and (max-width: 767px) {
        font-size: 16px;
        font-weight: 400;
        margin: 10px 0 0 0;
        line-height: 2.5;
        margin-top: 25%;  
      }  

      @media only screen and (min-width: 0px) and (max-width: 299px) {
        font-size: 16px;
        font-weight: 400;
        margin: 10px 0 0 0;
        line-height: 2.5;
        margin-top: 15%;  
      }  
      

    }
  }
`;

export { StickerWidgetWrapper };

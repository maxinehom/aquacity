import React from "react";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import PageHeader from "@iso/components/utility/pageHeader";
import SubHeader from "@iso/components/utility/subHeader";
import IntlMessages from "@iso/components/utility/intlMessages";
import CourierList from "./CourierList";
import AddCourier from "./AddCourier";
import { Row, Col, Tabs, Card} from 'antd';
import top_up_images from "@iso/assets/images/sticker/top-up.png";
import transfer_images from "@iso/assets/images/sticker/transfer.png";
import withdrawal_images from "@iso/assets/images/sticker/withdrawal.png";
import statement_images from "@iso/assets/images/sticker/statement.png";
import WidgetsWrapper,{ContentWrapper} from './Shipment.styles';

const { Meta } = Card;
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}


const AdminPanel = () => {
  return (
    
    <LayoutWrapper>
      <ContentWrapper>
      <PageHeader>
        <IntlMessages id="Shipment" />
      </PageHeader>
      
        <Tabs defaultActiveKey="1" onChange={callback} type='card'>
          <TabPane tab={<WidgetsWrapper>
              <Card
              className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
              >
                <Meta  className="cardtext" title="Courier List" description="" />
              </Card>
            </WidgetsWrapper>} key="1">
            <SubHeader>Courier List</SubHeader>
             <CourierList />
          </TabPane>
          <TabPane  tab={<WidgetsWrapper>
              <Card
              className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
              >
                <Meta  className="cardtext" title="Add Courier" description="" />
              </Card>
            </WidgetsWrapper>} key="2">
            <SubHeader>Add Courier</SubHeader>
            <AddCourier />
          </TabPane>
        </Tabs>
      </ContentWrapper>
    </LayoutWrapper>
  );
};
export default AdminPanel;

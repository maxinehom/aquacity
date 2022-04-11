import top_up_images from "@iso/assets/images/sticker/top-up.png";
import IntlMessages from "@iso/components/utility/intlMessages";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import PageHeader from "@iso/components/utility/pageHeader";
import SubHeader from "@iso/components/utility/subHeader";
import { Card, Tabs } from 'antd';
import React from "react";
import WidgetsWrapper, { ContentWrapper } from './AdminPanel.styles';
import PaymentApproval from "./PaymentApproval";
import SalesShipment from "./SalesShipment";

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
        <IntlMessages id="Admin Panel" />
      </PageHeader>
      
        <Tabs defaultActiveKey="1" onChange={callback} type="card">
          <TabPane tab={<WidgetsWrapper>
              <Card
              className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
              >
                <Meta  className="cardtext" title="Sales Payment Approval" description="" />
              </Card>
            </WidgetsWrapper>} key="1">
              <SubHeader>Sales Payment Approval</SubHeader>
             <PaymentApproval />
          </TabPane>
          <TabPane  tab={<WidgetsWrapper>
              <Card
              className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
              >
                <Meta  className="cardtext" title="Update Sales Shipment" description="" />
              </Card>
            </WidgetsWrapper>} key="2">
            <SubHeader>Update Sales Shipment</SubHeader>
            <SalesShipment />
          </TabPane>
        </Tabs>
      </ContentWrapper>
    </LayoutWrapper>
  );
};
export default AdminPanel;

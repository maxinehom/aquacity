import React from "react";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import PageHeader from "@iso/components/utility/pageHeader";
import SubHeader from "@iso/components/utility/subHeader";
import IntlMessages from "@iso/components/utility/intlMessages";
import DetailsBonus from "./DetailsBonusReport";
import GroupBonus from "./GroupBonusReport";
import PersonalSales from "./PersonalSalesReport";
import { Row, Col, Tabs, Card} from 'antd';
import top_up_images from "@iso/assets/images/sticker/top-up.png";
import transfer_images from "@iso/assets/images/sticker/transfer.png";
import withdrawal_images from "@iso/assets/images/sticker/withdrawal.png";
import statement_images from "@iso/assets/images/sticker/statement.png";
import WidgetsWrapper,{ContentWrapper} from './Report.styles';

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
        <IntlMessages id="Report List" />
      </PageHeader>
      
        <Tabs defaultActiveKey="1" onChange={callback} type="card">
          <TabPane tab={<WidgetsWrapper>
              <Card
              className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
              >
                <Meta  className="cardtext" title="Details Bonus Report" description="" />
              </Card>
            </WidgetsWrapper>} key="1">
            <SubHeader>Detail Bonus Report</SubHeader>
             <DetailsBonus />
          </TabPane>
          <TabPane tab={<WidgetsWrapper>
              <Card
              className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
              >
                <Meta  className="cardtext" title="Group Bonus Report" description="" />
              </Card>
            </WidgetsWrapper>} key="2">
            <SubHeader>Group Bonus Report</SubHeader>
             <GroupBonus />
          </TabPane>
          <TabPane tab={<WidgetsWrapper>
              <Card
              className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
              >
                <Meta  className="cardtext" title="Personal Sales Report" description="" />
              </Card>
            </WidgetsWrapper>} key="3">
            <SubHeader>Personal Sales Report</SubHeader>
             <PersonalSales />
          </TabPane>
        </Tabs>
      </ContentWrapper>
    </LayoutWrapper>
  );
};
export default AdminPanel;

import top_up_images from "@iso/assets/images/sticker/top-up.png";
import IntlMessages from "@iso/components/utility/intlMessages";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import PageHeader from "@iso/components/utility/pageHeader";
import SubHeader from "@iso/components/utility/subHeader";
import { Card, Tabs } from 'antd';
import React from "react";
import AddAnnouncement from "./AddAnnouncement";
import WidgetsWrapper, { ContentWrapper } from './Announcement.styles';
import ViewAnnouncement from "./AnnouncementList";
import ManageAnnouncement from "./ManageAnnouncement";
const { Meta } = Card;
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}


const AdminPanel = () => {
  return (
    
    <LayoutWrapper>
      {/*<PageHeader>
        <IntlMessages id="Announcement" />
  </PageHeader>*/}
      <ContentWrapper >
        
      <ViewAnnouncement />
      
        <Tabs defaultActiveKey="1" onChange={callback} type="card">
          {/*<TabPane tab={<WidgetsWrapper>
              <Card
              className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
              >
                <Meta  className="cardtext" title="View Announcement" description="" />
              </Card>
            </WidgetsWrapper>} key="1">
            <SubHeader>View Announcement</SubHeader>
             
          </TabPane>*/}
          {/*<TabPane tab={<WidgetsWrapper>
              <Card
              className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
              >
                <Meta  className="cardtext" title="New Announcement" description="" />
              </Card>
            </WidgetsWrapper>} key="2">
            <SubHeader>Add Announcement</SubHeader>
            <AddAnnouncement />
          </TabPane>
          <TabPane tab={<WidgetsWrapper>
              <Card
              className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
              >
                <Meta  className="cardtext" title="Manage Announcement" description="" />
              </Card>
            </WidgetsWrapper>} key="3">
            <SubHeader>Manage Announcement</SubHeader>
            <ManageAnnouncement />
          </TabPane>*/}
        </Tabs>
        </ContentWrapper>
    </LayoutWrapper>
  );
};
export default AdminPanel;

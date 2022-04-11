import React from "react";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import PageHeader from "@iso/components/utility/pageHeader";
import SubHeader from "@iso/components/utility/subHeader";
import IntlMessages from "@iso/components/utility/intlMessages";
import { Row, Col, Tabs, Card} from 'antd';
import top_up_images from "@iso/assets/images/sticker/top-up.png";
import WidgetsWrapper,{ContentWrapper} from './Member.styles';
import UserProfile from './Profile'
import Registration from './Registration'
import MemberList from './MemberList'
import OrganizationChart from './OrganizationChart'

const { Meta } = Card;
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}


const Member = () => {
  return (
    
    <LayoutWrapper>
      <ContentWrapper style={{width:'100%'}}>
      <PageHeader>Member</PageHeader>
      <Row gutter={0} justify="start" style={{width: '100%'}}>
          <Col lg={24} md={24} sm={24} xs={24}>
            <Tabs defaultActiveKey="1" onChange={callback} type="card">
              <TabPane tab={<WidgetsWrapper>
                  <Card
                  className="cardborder" 
                    hoverable
                    cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
                  >
                    <Meta  className="cardtext" title="User Profile" description="" />
                  </Card>
                </WidgetsWrapper>} key="1">
                <SubHeader> Member Profile</SubHeader>
                <UserProfile/>
              </TabPane>
              <TabPane  tab={<WidgetsWrapper>
                  <Card
                  className="cardborder" 
                    hoverable
                    cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
                  >
                    <Meta  className="cardtext" title="Registration" description="" />
                  </Card>
                </WidgetsWrapper>} key="2">
                <SubHeader> Registration</SubHeader>
                <Registration/>
              </TabPane>
              <TabPane  tab={<WidgetsWrapper>
                  <Card
                  className="cardborder" 
                    hoverable
                    cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
                  >
                    <Meta  className="cardtext" title="Member List" description="" />
                  </Card>
                </WidgetsWrapper>} key="3">
                <SubHeader>Member List</SubHeader>
                <MemberList/>
              </TabPane>
              <TabPane  tab={<WidgetsWrapper>
                  <Card
                  className="cardborder" 
                    hoverable
                    cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
                  >
                    <Meta  className="cardtext" title="Organization Chart" description="" />
                  </Card>
                </WidgetsWrapper>} key="4">
                <SubHeader>Organization Chart</SubHeader>
                <OrganizationChart/>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </ContentWrapper>
    </LayoutWrapper>
  );
};
export default Member;

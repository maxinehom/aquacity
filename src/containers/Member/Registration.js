import React from "react";
import Wrapper, { ContentWrapper } from "./Profile.styles";
import LayoutContent from "@iso/components/utility/layoutContent";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import {PageHeader,Breadcrumb} from "antd";
import SubHeader from "@iso/components/utility/subHeader";
import IntlMessages from "@iso/components/utility/intlMessages";
import RegistrationForm from '../Forms/RegistrationForm/RegistrationForm';
const Registration = () => {
  return (
    <div style={{ width: '100%', padding:"40px 20px" }}>
      <PageHeader 
       title="Member Registration"
       className="site-page-header"
       //subTitle="This is a subtitle"
       //tags={<Tag color="blue">Running</Tag>}
       extra={[
         <Breadcrumb >
           <Breadcrumb.Item className="firstbreadcrumb">Member</Breadcrumb.Item>
           <Breadcrumb.Item>
             {/* <a href="/dashboard/announcement"></a> */}
             Member Registration
           </Breadcrumb.Item>
         </Breadcrumb>
       ]}></PageHeader>

    <LayoutWrapper>
      <LayoutContent  style={{ width:'100%', margin: '0 auto' }}>
       
          <ContentWrapper >
            <RegistrationForm />
          </ContentWrapper>
        
      </LayoutContent>
    </LayoutWrapper>
    </div>  
    
  );
};
export default Registration;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Layout, Grid, Col, Row, Tabs,PageHeader,Breadcrumb} from "antd";
import { Link } from "react-router-dom";
import Wrapper, { ContentWrapper } from "./Profile.styles";
import userpic from "@iso/assets/images/user1.png";
import LayoutContent from "@iso/components/utility/layoutContent";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import IntlMessages from "@iso/components/utility/intlMessages";
import EditUserProfile from "./EditProfile";
import EditAddress from "./EditAddress";
import EditBank from "./EditBank";
import SubHeader from "@iso/components/utility/subHeader";
const memberID = localStorage.getItem('username')
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

const UserProfile = () => {
  const [showProfile, setshowProfile] = React.useState(true);
  const [showEditProfile, setshowEditProfile] = React.useState(false);
  const [showEditAddress, setshowEditAddress] = React.useState(false);
  const [showEditBank, setshowEditBank] = React.useState(false);

  const [ProfileData, setProfileData] = useState([]);

  function handleBackProfile() {
    setshowEditProfile(false);
    setshowProfile(true);
    setshowEditAddress(false);
    setshowEditBank(false);
  }
  function handleEditProfile() {
    setshowEditProfile(true);
    setshowProfile(false);
    setshowEditAddress(false);
    setshowEditBank(false);
  }
  function handleEditAddress() {
    setshowEditProfile(false);
    setshowProfile(false);
    setshowEditAddress(true);
    setshowEditBank(false);
  }
  function handleEditBank() {
    setshowEditProfile(false);
    setshowProfile(false);
    setshowEditAddress(false);
    setshowEditBank(true);
  }

  React.useEffect(() => {
    var profiledata = {
      value: JSON.parse(memberID),
    };
    let statement_config = {
      method: "POST",
      url: process.env.REACT_APP_API_KEY + "/member/GetMemberProfile",
      headers: {
        "Content-Type": "application/json",
      },
      data: profiledata,
    };
    axios(statement_config)
      .then(function (response) {
        if (response.data.code) setProfileData(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div style={{ width: '100%', padding:"40px 20px" }}>
      <PageHeader 
       title="Member Profile"
       className="site-page-header"
       //subTitle="This is a subtitle"
       //tags={<Tag color="blue">Running</Tag>}
       extra={[
         <Breadcrumb >
           <Breadcrumb.Item className="firstbreadcrumb">Member</Breadcrumb.Item>
           <Breadcrumb.Item>
             {/* <a href="/dashboard/announcement"></a> */}
             Member Profile
           </Breadcrumb.Item>
         </Breadcrumb>
       ]}></PageHeader>
    
    <LayoutWrapper>
    <LayoutContent>
      {showProfile ? (<div style={{ width: "100%" }}>
        <ContentWrapper>
          <Row>
            <Col span={6}>
              <img slt="/" src={ProfileData.profileImage} className="profilepic" />
            </Col>
            <Col span={12}>

              <Tabs defaultActiveKey="1" onChange={callback} centered>
                <TabPane tab="Personal Information" key="1">


                  <Form
                    name="userprofile"
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 14 }}
                    autoComplete="off"
                  >
                    <Form.Item
                      className="toppadding"
                      label="Member ID"
                      name="memeber id"
                    >
                      <p className="fontgray">{ProfileData.memberID}</p>
                    </Form.Item>

                    {/* <Form.Item label="Username" name="uname">
                      <p className="fontgray">{ProfileData.fullname}</p>
                    </Form.Item> */}

                    <Form.Item label="Ranking" name="ranking">
                      <p className="fontgray">{ProfileData.ranking}</p>
                    </Form.Item>

                    <Form.Item label="Full Name" name="name">
                      <p className="fontgray">{ProfileData.fullname}</p>
                    </Form.Item>

                    <Form.Item label="Email" name="email">
                      <p className="fontgray">{ProfileData.email}</p>
                    </Form.Item>

                    <Form.Item label="Mobile Number" name="mobilepn">
                      <p className="fontgray">{ProfileData.mobileCode}{ProfileData.mobile}</p>
                    </Form.Item>

                    <Form.Item label="Nationality" name="nationality">
                      <p className="fontgray">{ProfileData.nationality}</p>
                    </Form.Item>

                    <Form.Item label="Identity Registration No." name="identity_resgistration_no">
                      <p className="fontgray">{ProfileData.ic}</p>
                    </Form.Item>

                    <Form.Item label="Gender" name="gender">
                      <p className="fontgray">{ProfileData.gender}</p>
                    </Form.Item>


                    <Form.Item label="Race" name="race">
                      <p className="fontgray">{ProfileData.race}</p>
                    </Form.Item>

                    <Form.Item label="Date Of Birth" name="date_of_birth">
                      <p className="fontgray">{ProfileData.birthday}</p>
                    </Form.Item>

                    <Form.Item
                      className="cbutton"
                      wrapperCol={{ span: 15, offset: 5 }}
                    >
                      <Button
                        type="primary"
                        style={{ marginRight: 8, marginBottom: 8 }}
                        onClick={handleEditProfile}
                      >
                        Edit Details
                        {/* <Link
                        className="isoDropdownLink"
                        to={"/dashboard/editprofile"}
                      >
                        Edit Details
                      </Link> */}
                      </Button>
                      <Button type="secondary" htmlType="submit">
                        <Link
                          className="isoDropdownLink"
                          to={"/dashboard/changepassword"}
                        >
                          Change Password
                        </Link>
                      </Button>
                    </Form.Item>
                  </Form>
                </TabPane>
                <TabPane tab="Address" key="2">
                  <Form
                    name="useraddress"
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 14 }}
                    autoComplete="off"
                  >
                    <Form.Item
                      className="toppadding"
                      label="Address"
                      name="address"
                    >
                      <p className="fontgray">{ProfileData.address}</p>
                    </Form.Item>

                    <Form.Item
                      className="toppadding"
                      label="City"
                      name="city"
                    >
                      <p className="fontgray">{ProfileData.city}</p>
                    </Form.Item>

                    <Form.Item
                      className="toppadding"
                      label="Postcode"
                      name="postcode"
                    >
                      <p className="fontgray">{ProfileData.postCode}</p>
                    </Form.Item>

                    <Form.Item
                      className="toppadding"
                      label="State"
                      name="state"
                    >
                      <p className="fontgray">{ProfileData.state}</p>
                    </Form.Item>

                    <Form.Item
                      className="toppadding"
                      label="Country"
                      name="country"
                    >
                      <p className="fontgray">{ProfileData.country}</p>
                    </Form.Item>

                    <Form.Item
                      className="cbutton"
                      wrapperCol={{ span: 15, offset: 5 }}
                    >
                      <Button
                        type="primary"
                        style={{ marginRight: 8, marginBottom: 8 }}
                        onClick={handleEditAddress}
                      >
                        Edit Address
                      </Button>
                    </Form.Item>
                  </Form>
                </TabPane>
                <TabPane tab="Bank" key="3">
                  <Form
                    name="userprofile"
                    labelCol={{ span: 12 }}
                    wrapperCol={{ span: 14 }}
                    autoComplete="off"
                  >
                    <Form.Item
                      className="toppadding"
                      label="Bank Name"
                      name="bankname"
                    >
                      <p className="fontgray">{ProfileData.bankName}</p>
                    </Form.Item>

                    <Form.Item
                      className="toppadding"
                      label="Bank Account Number"
                      name="bank_account_number"
                    >
                      <p className="fontgray">{ProfileData.bankAccount}</p>
                    </Form.Item>

                    <Form.Item
                      className="toppadding"
                      label="Bank Account Holder"
                      name="bank_account_holder"
                    >
                      <p className="fontgray">{ProfileData.bankHolder}</p>
                    </Form.Item>


                    <Form.Item
                      className="cbutton"
                      wrapperCol={{ span: 15, offset: 5 }}
                    >
                      <Button
                        type="primary"
                        style={{ marginRight: 8, marginBottom: 8 }}
                        onClick={handleEditBank}
                      >
                        Edit Bank
                        {/* <Link
                                className="isoDropdownLink"
                                to={"/dashboard/editaddress"}
                              >
                                Edit Details
                              </Link> */}
                      </Button>
                    </Form.Item>
                  </Form>
                </TabPane>
              </Tabs>
            </Col>
          </Row>
        </ContentWrapper>

      </div>) : null}
      {showEditProfile ? (<div style={{ width: "100%" }}>
        <EditUserProfile />
      </div>) : null}
      {showEditAddress ? (<div style={{ width: "100%" }}>
        <EditAddress />
      </div>) : null}
      {showEditBank ? (<div style={{ width: "100%" }}>
        {/* didnt use class because it's under global */}
        <EditBank />
      </div>) : null}
    </LayoutContent>
    </LayoutWrapper>
    </div>   
  );
};
export default UserProfile;

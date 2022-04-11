import React from "react";
import { Form, Button, Layout, Grid, Col, Row, Input, Upload } from "antd";
import { Link } from "react-router-dom";
import Wrapper, { ContentWrapper } from "./Profile.styles";
import userpic from "@iso/assets/images/user1.png";
import LayoutContent from "@iso/components/utility/layoutContent";
import PageHeader from "@iso/components/utility/pageHeader";
import IntlMessages from "@iso/components/utility/intlMessages";
const EditUserProfile = () => {
  return (
    <div className="showhidecontent">
      <PageHeader>
        <IntlMessages id="Edit Profile Details" />
      </PageHeader>
      <LayoutContent>
        <Wrapper>
          <ContentWrapper>
            <Row>
              <Col span={5}>
                <Upload
                  listType="picture-card"
                  maxCount={1}
                  showUploadList={false}
                >
                  <img slt="/" src={userpic} className="profilepic" />
                </Upload>
              </Col>
              <Col span={12}>
                <Form
                  name="userprofile"
                  labelCol={{ span: 10 }}
                  wrapperCol={{ span: 12 }}
                >
                  <Form.Item
                    className="toppadding"
                    label="Username"
                    name="username"
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item label="Ranking" name="ranking">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Name (AS Per NRIC)" name="name_as_per_nric">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Email" name="email">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Mobile Phone Number" name="moblie">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Nationality" name="nationality">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Identity Registration No" name="identity_registration_no">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Gender" name="gender">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Race" name="race">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Marital Status" name="marital_status">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Date Of Birth" name="date_of_birth">
                    <Input />
                  </Form.Item>


                  <Form.Item
                    className="cbutton"
                    wrapperCol={{ span: 15, offset: 6 }}
                  >
                    <Button
                      style={{ marginRight: 8, marginBottom: 8 }}
                      onClick={() => window.location.reload(false)}
                    >
                      Back
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ marginRight: 8, marginBottom: 8 }}
                    >
                      Update Details
                    </Button>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </ContentWrapper>
        </Wrapper>
      </LayoutContent>
    </div>
  );
};
export default EditUserProfile;

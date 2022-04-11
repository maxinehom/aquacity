import React from "react";
import { Form, Button, Layout, Grid, Col, Row, Input, Upload } from "antd";
import { Link } from "react-router-dom";
import Wrapper, { ContentWrapper } from "./Profile.styles";
import userpic from "@iso/assets/images/user1.png";
import LayoutContent from "@iso/components/utility/layoutContent";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import PageHeader from "@iso/components/utility/pageHeader";
import IntlMessages from "@iso/components/utility/intlMessages";
const EditAddress = () => {
  return (
    <div className="showhidecontent">
      <PageHeader>
        <IntlMessages id="Edit Address Details" />
      </PageHeader>
      <LayoutContent>
        <Wrapper>
         
          <ContentWrapper>
            <Row>
              <Col span={16}>
                <Form
                  name="userprofile"
                  labelCol={{ span: 12 }}
                  wrapperCol={{ span: 14 }}
                >

                  <Form.Item label="Address" name="address" className="toppadding">
                    <Input />
                  </Form.Item>

                  <Form.Item label="City" name="city">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Postcode" name="postcode">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Country" name="country">
                    <Input />
                  </Form.Item>

                  <Form.Item label="State" name="state">
                    <Input />
                  </Form.Item>

                  <Form.Item
                    className="cbutton"
                    wrapperCol={{ span: 15, offset: 10 }}
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
                    {/* <Button type="primary" htmlType="submit">
                      <Link
                        className="isoDropdownLink"
                        to={"/dashboard/changepassword"}
                      >
                        Change Password
                      </Link>
                    </Button> */}
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
export default EditAddress;

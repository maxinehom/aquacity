import React from "react";
import { Form, Button, Layout, Grid, Col, Row, Input, Upload } from "antd";
import Wrapper, { ContentWrapper } from "./Profile.styles";
import { Link } from "react-router-dom";
import userpic from "@iso/assets/images/user1.png";
import LayoutContent from "@iso/components/utility/layoutContent";
import PageHeader from "@iso/components/utility/pageHeader";
import IntlMessages from "@iso/components/utility/intlMessages";
const EditBank = () => {
  return (
    <div className="showhidecontent">
      <PageHeader>
        <IntlMessages id="Edit Bank Details" />
      </PageHeader>
      <LayoutContent>
        <Wrapper>
          
          <ContentWrapper>
            <Row>
              <Col span={6}>
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
                  labelCol={{ span: 12 }}
                  wrapperCol={{ span: 14 }}
                >

                  <Form.Item label="Bank Name" name="bankname"  className="toppadding">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Bank Account Number" name="bank_acc_nbr">
                    <Input />
                  </Form.Item>

                  <Form.Item label="Bank Account Holder" name="bank_acc_holder">
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
export default EditBank;

import React from "react";
import { Form, Input, Button } from "antd";
import Wrapper, { ContentWrapper } from "./Profile";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import PageHeader from "@iso/components/utility/pageHeader";
import IntlMessages from "@iso/components/utility/intlMessages";
import { Link } from "react-router-dom";
const ChangePassword = () => {
  return (
    <LayoutWrapper >
  
          <Form
            name="changepassword"
            labelCol={{ span: 7 }}
            wrapperCol={{ span: 12 }}
            autoComplete="off"
            style={{width:'100%', marginTop:'10%'}}
          >
            <Form.Item className="itempadding" label="Username" name="username">
              <Input
                disabled="true"
                className="fontgray"
                defaultValue="admin01"
              />
            </Form.Item>
            <Form.Item
              name="currentpassword"
              label="Current Password"
              rules={[
                {
                  required: true,
                  message: "Please input your current password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="newpassword"
              label="New Password"
              rules={[
                {
                  required: true,
                  message: "Please input your new password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["newpassword"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              className="itempadding"
              wrapperCol={{ offset: 10, span: 24 }}
            >
              <Button>
                <Link className="isoDropdownLink"to={"/dashboard/memberprofile"}>
                  Back
                </Link>
              </Button>
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginLeft: 8 }}
              >
                Save
              </Button>
            </Form.Item>
          </Form>

    </LayoutWrapper>
  );
};
export default ChangePassword;

import React from "react";
import Wrapper, { ContentWrapper } from "./Shipment.styles";
import LayoutContent from "@iso/components/utility/layoutContent";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import SubHeader from "@iso/components/utility/subHeader";
import { Form, Input, Row, Col, Select, Checkbox,Button, Breadcrumb, PageHeader } from 'antd';
import IntlMessages from "@iso/components/utility/intlMessages";
const { TextArea } = Input;
const { Option } = Select;
const AddProduct = () => {
  const [btnadd, setbtnadd] = React.useState(false);
  const onFinish = (values) => {
    setbtnadd(true)
    setTimeout(
        () => setbtnadd(false),
        3000
    );
    console.log('Received values of form: ', values);
  };
  return (
    <div style={{width: '100%', padding:"40px 20px"}}>
       <PageHeader
        title="Add Courier"
        className="site-page-header"
        onBack={() => window.history.back()}
        //subTitle="This is a subtitle"
        //tags={<Tag color="blue">Running</Tag>}
        extra={[
          <Breadcrumb >
            <Breadcrumb.Item className="firstbreadcrumb">Shipment</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/dashboard/courierlist">Courier List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {/* <a href="/dashboard/announcement"></a> */}
              Add Courier
            </Breadcrumb.Item>
          </Breadcrumb>
        ]}
      />
 
 <LayoutWrapper>
      <LayoutContent  style={{ width:'100%', margin: '0 auto' }}>
    
        
            <Form 
            colon={false}  
            layout='vertical' 
            name='add_product' 
            size='default' 
            wrapperCol={24} 
            onFinish={onFinish} 
            >
             <Row gutter={[16, 16]} justify="center">    
               <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name='product_code'
                    label='Product Code'
                    rules={[
                      {
                        required: true,
                        message: 'Please input product code!',
                      },
                    ]}
                  >
                    <Input/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name='product_name'
                    label='Product Name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input product name!',
                      },
                    ]}
                  >
                    <Input/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="select_status"
                    label="Status"
                    rules={[
                      {
                        required: true,
                        message: 'Please select your favourite colors!',
                      },
                    ]}
                  >
                    <Select defaultValue="active">
                      <Option value="active">Active</Option>
                      <Option value="suspended">Suspended</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="product_category"
                    label="Product Category"
                    rules={[
                      {
                        required: true,
                        message: 'Please select product category!',
                      },
                    ]}
                  >
                    <Select defaultValue="mlm">
                      <Option value="mlm">MLM Service</Option>
                      <Option value="other">Other</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="product_display"
                    label="Product Display"
                  >
                    <Checkbox.Group style={{width:'100%'}}>
                      <Row gutter={[10, 10]} justify="start" >
                        <Col span={8}>
                          <Checkbox
                            value="member_sales"
                            style={{
                              lineHeight: '32px',
                            }}
                          >
                            Member Sales
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox
                            value="reg_sales"
                            style={{
                              lineHeight: '32px',
                            }}
                           
                          >
                            Registration Sales 
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox
                            value="upg_sales"
                            style={{
                              lineHeight: '32px',
                            }}
                          >
                            Upgrade Sales 
                          </Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="priority_order"
                    label="Priority Order"
                  >
                    <Input placeholder="Large Number will display first" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item
                    name="product_remark"
                    label="Product Remark"
                  >
                     <TextArea showCount rows={5} maxLength={500}/>
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 11, span: 24 }}>
                  <Button loading={btnadd} type="primary" htmlType="submit" style={{width: 100, height:30, fontWeight:'500'}}>
                    Add
                  </Button>
                </Form.Item>
                </Col>
              </Row>
            </Form>
      </LayoutContent>
      </LayoutWrapper>
    </div>
  )};
export default AddProduct;

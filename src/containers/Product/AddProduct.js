import React from "react";
import Wrapper, { ContentWrapper } from "./Product.styles";
import LayoutContent from "@iso/components/utility/layoutContent";
import SubHeader from "@iso/components/utility/subHeader";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import { Form, Input, Row, Col, Select, Checkbox, Divider, Button, PageHeader, Breadcrumb } from 'antd';
import IntlMessages from "@iso/components/utility/intlMessages";
import Editor from '@iso/components/uielements/editor';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import GoogleDrive from '@uppy/google-drive';
import Dropbox from '@uppy/dropbox';
import Instagram from '@uppy/instagram';
// import Webcam from '@uppy/webcam'
import { Dashboard } from '@uppy/react';

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
  const uppy = Uppy({
    debug: true,
    autoProceed: false,
    restrictions: {
      maxFileSize: 1000000,
      maxNumberOfFiles: 3,
      minNumberOfFiles: 2,
      allowedFileTypes: ['image/*', 'video/*'],
    },
  });

  uppy.use(GoogleDrive, {
    id: 'GoogleDrive',
    companionUrl: 'https://companion.uppy.io',
  });
  uppy.use(Dropbox, { companionUrl: 'https://companion.uppy.io' });
  uppy.use(Instagram, { companionUrl: 'https://companion.uppy.io' });
  // .use(Webcam)
  uppy.use(Tus, { endpoint: 'https://master.tus.io/files/' });

  uppy.on('complete', result => {
    console.log('successful files:', result.successful);
    console.log('failed files:', result.failed);
  });
  return (
    <div style={{width: '100%', padding:"40px 20px"}}>
       <PageHeader
        title="Add Product"
        className="site-page-header"
        onBack={() => window.history.back()}
        //subTitle="This is a subtitle"
        //tags={<Tag color="blue">Running</Tag>}
        extra={[
          <Breadcrumb >
            <Breadcrumb.Item className="firstbreadcrumb">Product</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/dashboard/productlist">Product List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {/* <a href="/dashboard/announcement"></a> */}
              Add Product
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
            <h2>1. Product Information</h2>
            
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
                    <Input placeholder="Larger Number will display first" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item
                    name="product_remark"
                    label="Product Remark"
                  >
                     <TextArea showCount rows={5} maxLength={500}/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Form.Item
                    name="is_package"
                    label="Is Package?"
                  >
                     <Checkbox>Yes</Checkbox>
                  </Form.Item>
                </Col>

            </Row>
            <Divider/>
            <h2>2. Product Pricing</h2>
           
            <Row gutter={[16, 16]} justify="center">
              <Col xs={12} sm={8} md={4} lg={4} xl={4}>
                <Form.Item
                    name='reg_country'
                    label='Register Country'
                  >
                    Malaysia
                </Form.Item>
              </Col>
              <Col xs={12} sm={8} md={4} lg={4} xl={4}>
                <Form.Item
                    name='mem_pv'
                    label='Member PV'
                  >
                    <Input />
                </Form.Item>
              </Col>
              <Col xs={12} sm={8} md={4} lg={4} xl={4}>
                <Form.Item
                    name='mem_price'
                    label='Member Price'
                  >
                    <Input />
                </Form.Item>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              </Col>
            </Row>
            <Divider/>
            <h2>3. Product Description</h2>
            
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form.Item 
                    name='product_description'
                    label='Product Description'
                  >
                    <Editor placeholder="Write something..." />
                </Form.Item>
              </Col>
            </Row>
            <Divider />
            <h2>4. Product Thumbnail</h2>
            
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form.Item
                    name='product_description'
                    label='Product Thumbnail'
                  >
                    <Dashboard
                      plugins={['GoogleDrive', 'Dropbox', 'Instagram']}
                      uppy={uppy}
                      inline={true}
                      target=".DashboardContainer"
                      replaceTargetContent={true}
                      showProgressDetails={true}
                      note="Images and video only, 2–3 files, up to 1 MB"
                      height={250}
                      width="100%"
                      metaFields={[
                        { id: 'name', name: 'Name', placeholder: 'file name' },
                        {
                          id: 'caption',
                          name: 'Caption',
                          placeholder: 'describe what the image is about',
                        },
                      ]}
                      browserBackButtonClose={true}
                    />
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
    
  );
};
export default AddProduct;

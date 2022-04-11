import React from 'react';
import ShopSearchPageWrapper from './Shop.styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./ImageGallery.css";
import LayoutContent from "@iso/components/utility/layoutContent";
import { Row, Col, Descriptions, Tabs, Divider, Form, Button, Input, PageHeader, Breadcrumb} from 'antd';
import ProductMainImage from '@iso/assets/images/ProductImage/p1-sq.png';
import ProductDescriptionImage from '@iso/assets/images/ProductImage/product-descr-01.jpeg';
import ProductDescriptionImage2 from '@iso/assets/images/ProductImage/product-descr-02.jpeg';
import {Wrapper} from './Shop.styles';
import { Link } from "react-router-dom";
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

const ImageGallery = () =>{
   return <Carousel infiniteLoop autoPlay stopOnHover thumbWidth={120} emulateTouch showArrows={false} showStatus={false}>
       <div className="imgsize">
          <img src={ProductMainImage} />
      </div>
      <div className="imgsize">
          <img src={ProductMainImage} />
      </div>
      <div className="imgsize">
          <img src={ProductMainImage} />
      </div>
      <div className="imgsize">
          <img src={ProductMainImage} />
      </div>
      <div className="imgsize">
          <img src={ProductMainImage} />
      </div>
      <div className="imgsize">
          <img src={ProductMainImage} />
      </div>
      <div className="imgsize">
          <img src={ProductMainImage} />
      </div>
      <div className="imgsize">
          <img src={ProductMainImage} />
      </div>
      <div className="imgsize">
          <img src={ProductMainImage} />
      </div>
      <div className="imgsize">
          <img src={ProductMainImage} />
      </div>
    </Carousel>
};

export default function () {
  return (
    <Wrapper className="isoShopSearchPage">
      
      <LayoutContent>
          <Row gutter={[20, 20]} justify="center">
            <Col xs={24} sm={24} md={11} lg={11} xl={11} className="colstyle">
              <ImageGallery />   
            </Col>
            <Col xs={24} sm={24} md={13} lg={13} xl={13} className="colstyle">
            <Descriptions title="Rocketfish" layout='vertical' column={1} labelStyle={{fontWeight: 'bold'}} colon={false}>
              <Descriptions.Item label="Bluetooth Music Receiver Black, 0991 models"><strong className="pricetag">RM 240</strong></Descriptions.Item>  
              <Descriptions.Item >A product detail page (PDP) is a web page on an eCommerce site that presents the description of a specific product in view. The details displayed often include size, color, price, shipping information, reviews, and other relevant information customers may want to know before making a purchase</Descriptions.Item>
              <Descriptions.Item label="Dimension">Small Pot 10cm x 10.5cm<br/>Tray 13cm x 2.2cm<br/>Big Pot 20cm x 21cm<br/>Tray 25cm x 5.4cm</Descriptions.Item>
              <Descriptions.Item label="Materials">
                Porcelain
              </Descriptions.Item>
            </Descriptions>
            <Row gutter={[10, 10]} justify="space-between">
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Link to="/dashboard/checkout">
                <Button type="primary" className="detailbtn">Buy Now</Button>
                </Link>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} >
              <Link to="/dashboard/cart">
                <Button type="secondary" className="detailbtn" >Add To Cart</Button>
                </Link>
              </Col>
            </Row>
            </Col>
          </Row>
          <Row gutter={[10, 10]} justify="start" >
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="colstyle">
              <Tabs defaultActiveKey="1" onChange={callback} style={{paddingTop:25}}>
                <TabPane tab="Detail" key="1">
                <Form
                  name="productdetail"
                  labelCol={{ span: 5 }}
                  wrapperCol={{ span: 11 }}
                  autoComplete="off"
                  
                  colon={false}
                  labelAlign='left'
                >
                  <Form.Item
                    label={<label style={{ color: "gray" }}>SKU</label>}
                    name="sku"
                  >
                    BDC9873DSDF928Q9GS
                  </Form.Item>

                  <Form.Item
                    label={<label style={{ color: "gray" }}>Color</label>}
                    name="p_color"
                  >
                    Mix-color
                  </Form.Item>

                  <Form.Item
                    label={<label style={{ color: "gray" }}>Return restrictions apply</label>}
                    name="return_restrictions"
                  >
                    This item is not valid for returns, refunds and exchanges.<br/>For any product concerns or issues, please reach out to our Customer Service Team.
                  </Form.Item>
                </Form>
                <div>
                  <img alt="/" src={ProductDescriptionImage} className="imgdesc" />
                  <img alt="/" src={ProductDescriptionImage2} className="imgdesc" />
                  <p style={{paddingTop:10}}>Polyester is deemed lower quality due to its none natural quality’s. Made from synthetic materials, not natural like wool. Polyester suits become creased easily and are known for not being breathable. </p>
                </div>
                </TabPane>
                <TabPane tab="Return Policy" key="2">
                <div><p>Buyer may only apply for the refund and/or return of the Item in the following circumstances:</p><br/>
                  <ul style={{listStyleType:'disc'}}>
                    <li>- The Item has not been received by Buyer;</li>
                    <li>- The Item was defective and/or damaged on delivery;</li>
                    <li>- The Item received is incomplete (missing quantity or accessories);</li>
                    <li>- Seller has delivered an Item that does not match the agreed specification (e.g. wrong size, colour, etc.) to Buyer;</li>
                    <li>- The Item delivered to Buyer is materially different from the description provided by Seller in the listing of the Item; </li>
                    <li>- The Item received is a counterfeit item**;</li>
                    <li>- The Item received has physical damage (e.g. dented, scratched, shattered);</li>
                    <li>- The Item received is faulty (e.g. malfunction, does not work as intended);</li>
                    <li>- By way of private agreement with Seller and Seller must send his/her confirmation to Shopee confirming such agreement; or</li>
                    <li>- Change of mind*</li>
                  </ul>
                        <br/>
                        *Change of Mind return policy is only applicable to certain categories and restricted to certain Sellers only.
                        <br/>
                        **Counterfeit item return policy is applicable to Shopee Mall sellers only.
                </div>
                </TabPane>
                <TabPane tab="Delivery" key="3">
                  <div><p>Delivery Information:</p><br/>
                  <Input.Group compact>
                    <Input style={{ width: 150 }} placeholder="Enter Postcode" />
                    <Button type="primary">Check</Button>
                  </Input.Group>
                  <br/>
                  <p>When shipping your parcel, it is important to take note of the nature of your products.<br/>
                   If you would like to find out more details about dangerous goods and prohibited items for Pos Laju, please check out the link <a>HERE</a>.</p>
                  </div>
                </TabPane>
              </Tabs>
              
            </Col>
          </Row>
      </LayoutContent>
    </Wrapper>
  );
}

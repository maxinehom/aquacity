import React from 'react';
import { createConnector } from 'react-instantsearch';
import ContentElement from './ContentElement';
// import EmptyComponent from '@iso/components/EmptyComponent';
// import { LoaderElement } from '@iso/components/Shop/ShopComponent.style';
import { Row, Col, Layout, Card, Pagination, Button, Rate  } from 'antd';
import testpic from '@iso/assets/images/ProductImage/p1-sq.png'
import { Link } from "react-router-dom";
import PageHeader from "@iso/components/utility/pageHeader";
import IntlMessages from "@iso/components/utility/intlMessages";

const { Meta } = Card;
const CustomResults = createConnector({
  displayName: 'CustomResults',
  getProvidedProps(props, searchState, searchResults) {
    const status = searchResults.results
      ? searchResults.results.nbHits === 0
      : 'loading';
    return { query: searchState.query, status, props };
  },
})(({ status, query, ...props }) => {
 
    return (
      
      <Layout>
        <PageHeader>
      <IntlMessages id="Shopping" />
      </PageHeader>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
          <Card
            hoverable
            cover={<img alt="example" src={testpic} />}
            className="container"
            bodyStyle={{padding: 15, fontWeight: 'bold'}}
          >     
            <Link
              to={"/dashboard/productdetail"}
            >
              <button className="btn">View Detail</button> 
            </Link>
            {/* <Rate disabled defaultValue={4} className="star"/> */}
            <p>Bluetooth Music Receiver</p>
            <p className="price"><del className="delprice">RM 540</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 240</p>
          </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
          <Card
            hoverable
            cover={<img alt="example" src={testpic} />}
            className="container"
            bodyStyle={{padding: 15, fontWeight: 'bold'}}
          >     
            <Link
              to={"/dashboard/productdetail"}
            >
              <button className="btn">View Detail</button> 
            </Link>
            {/* <Rate disabled defaultValue={4} className="star"/> */}
            <p>Bluetooth Music Receiver</p>
            <p className="price"><del className="delprice">RM 540</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 240</p>
          </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
          <Card
            hoverable
            cover={<img alt="example" src={testpic} />}
            className="container"
            bodyStyle={{padding: 15, fontWeight: 'bold'}}
          >     
            <Link
              to={"/dashboard/productdetail"}
            >
              <button className="btn">View Detail</button> 
            </Link>
            {/* <Rate disabled defaultValue={4} className="star"/> */}
            <p>Bluetooth Music Receiver</p>
            <p className="price"><del className="delprice">RM 540</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 240</p>
          </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
          <Card
            hoverable
            cover={<img alt="example" src={testpic} />}
            className="container"
            bodyStyle={{padding: 15, fontWeight: 'bold'}}
          >     
            <Link
              to={"/dashboard/productdetail"}
            >
              <button className="btn">View Detail</button> 
            </Link>
            {/* <Rate disabled defaultValue={4} className="star"/> */}
            <p>Bluetooth Music Receiver</p>
            <p className="price"><del className="delprice">RM 540</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 240</p>
          </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
          <Card
            hoverable
            cover={<img alt="example" src={testpic} />}
            className="container"
            bodyStyle={{padding: 15, fontWeight: 'bold'}}
          >     
            <Link
              to={"/dashboard/productdetail"}
            >
              <button className="btn">View Detail</button> 
            </Link>
            {/* <Rate disabled defaultValue={4} className="star"/> */}
            <p>Bluetooth Music Receiver</p>
            <p className="price"><del className="delprice">RM 540</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 240</p>
          </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
          <Card
            hoverable
            cover={<img alt="example" src={testpic} />}
            className="container"
            bodyStyle={{padding: 15, fontWeight: 'bold'}}
          >     
            <Link
              to={"/dashboard/productdetail"}
            >
              <button className="btn">View Detail</button> 
            </Link>
            {/* <Rate disabled defaultValue={4} className="star"/> */}
            <p>Bluetooth Music Receiver</p>
            <p className="price"><del className="delprice">RM 540</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 240</p>
          </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
          <Card
            hoverable
            cover={<img alt="example" src={testpic} />}
            className="container"
            bodyStyle={{padding: 15, fontWeight: 'bold'}}
          >     
            <Link
              to={"/dashboard/productdetail"}
            >
              <button className="btn">View Detail</button> 
            </Link>
            {/* <Rate disabled defaultValue={4} className="star"/> */}
            <p>Bluetooth Music Receiver</p>
            <p className="price"><del className="delprice">RM 540</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 240</p>
          </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
          <Card
            hoverable
            cover={<img alt="example" src={testpic} />}
            className="container"
            bodyStyle={{padding: 15, fontWeight: 'bold'}}
          >     
            <Link
              to={"/dashboard/productdetail"}
            >
              <button className="btn">View Detail</button> 
            </Link>
            {/* <Rate disabled defaultValue={4} className="star"/> */}
            <p>Bluetooth Music Receiver</p>
            <p className="price"><del className="delprice">RM 540</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 240</p>
          </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8}>
          <Card
            hoverable
            cover={<img alt="example" src={testpic} />}
            className="container"
            bodyStyle={{padding: 15, fontWeight: 'bold'}}
          >     
            <Link
              to={"/dashboard/productdetail"}
            >
              <button className="btn">View Detail</button> 
            </Link>
            {/* <Rate disabled defaultValue={4} className="star"/> */}
            <p>Bluetooth Music Receiver</p>
            <p className="price"><del className="delprice">RM 540</del>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RM 240</p>
          </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="colstyle">
        <Pagination className="btncartstyle" defaultCurrent={1} total={500} showSizeChanger={false}/>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} className="colstyle">
        <Button type="primary">
          <Link
            to={"/dashboard/cart"}
          >
             Go to Cart
          </Link>
        </Button>
        </Col>
        </Row>
      </Layout>
    );
 
});

export default CustomResults;

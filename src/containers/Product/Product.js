import React from "react";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import PageHeader from "@iso/components/utility/pageHeader";
import SubHeader from "@iso/components/utility/subHeader";
import IntlMessages from "@iso/components/utility/intlMessages";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import { Row, Col, Tabs, Card} from 'antd';
import top_up_images from "@iso/assets/images/sticker/top-up.png";
import transfer_images from "@iso/assets/images/sticker/transfer.png";
import withdrawal_images from "@iso/assets/images/sticker/withdrawal.png";
import statement_images from "@iso/assets/images/sticker/statement.png";
import WidgetsWrapper,{ContentWrapper} from './Product.styles';

const { Meta } = Card;
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}


const AdminPanel = () => {
  return (
    
    <LayoutWrapper>
      <ContentWrapper>
      <PageHeader>
        <IntlMessages id="Product" />
      </PageHeader>
      
        <Tabs defaultActiveKey="1" onChange={callback} type="card">
          <TabPane tab={<WidgetsWrapper>
              <Card
              className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
              >
                <Meta  className="cardtext" title="Product List" description="" />
              </Card>
            </WidgetsWrapper>} key="1">
              <SubHeader>Product List</SubHeader>
             <ProductList />
          </TabPane>
          <TabPane  tab={<WidgetsWrapper>
              <Card
              className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
              >
                <Meta  className="cardtext" title="Add Product" description="" />
              </Card>
            </WidgetsWrapper>} key="2">
            <SubHeader>Add Product</SubHeader>
            <AddProduct />
          </TabPane>
        </Tabs>
      </ContentWrapper>
    </LayoutWrapper>
  );
};
export default AdminPanel;

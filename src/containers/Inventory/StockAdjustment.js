import { FilterOutlined, RedoOutlined } from '@ant-design/icons';
import LayoutContent from "@iso/components/utility/layoutContent";
import { Button, Col, DatePicker, Input, Pagination, Row, Select, Space, Table, Breadcrumb, PageHeader } from 'antd';
import { dropRight } from 'lodash-es';
import React from "react";
import { ContentWrapper } from "./Inventory.styles";
import SubHeader from "@iso/components/utility/subHeader";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import IntlMessages from "@iso/components/utility/intlMessages";
const { RangePicker } = DatePicker;
const { Search } = Input;
// const suffix = (
//   <AudioOutlined
//     style={{
//       fontSize: 16,
//       color: '#1890ff',
//     }}
//   />
// );
const onSearch = value => console.log(value);
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
const columns = [
  {
    title: 'No.',
    width: '3%',
    dataIndex: 'list_num',
    key: 'list_num',
    fixed:'left',
  },
  {
    title: 'Product Code',
    width: '18%',
    dataIndex: 'p_Code',
    key:'p_Code',
   
  },
  {
    title: 'Product Name',
    dataIndex: 'p_Name',
    key: 'p_Name',
    width:'18%',
  }, 
  {
    title: 'Company Stock Balance',
    dataIndex: 'com_S_Bal',
    key: 'com_S_Bal',
    width:'12%',
  },
  {
    title: 'Action',
    key: 'operation',
    align: 'right',
    fixed: 'right',
    width: '20%',
    render: () => <Select defaultValue='Action' >
                    <option  value='view'>View</option>
                    <option value='edit'>Edit</option>
                  </Select>,
  },
];

const data = [
  {
    key: '1',
    list_num: '1',
    p_Code:'P100009ABCJ',
    p_Name: 'TechBase Product',
    com_S_Bal: '50',
  },
  {
    key: '2',
    list_num: '2',
    p_Code:'P100009ABCJ',
    p_Name: 'TechBase Product',
    com_S_Bal: '50',
  },
  {
    key: '3',
    list_num:'3',
    p_Code:'P100009ABCJ',
    p_Name: 'TechBase Product',
    com_S_Bal: '50',
  },
];

const PaymentApproval = () => {
  const [showFilter, setshowFilter] = React.useState(false);
  const handleFilter = () => {
    if(showFilter === false){
      setshowFilter(true)
    } else if(showFilter === true){
      setshowFilter(false)
    }
  }
  return (
    <div style={{width: '100%', padding:"40px 20px"}}>
      <PageHeader
       title="Stock Adjustment"
       className="site-page-header"
       //subTitle="This is a subtitle"
       //tags={<Tag color="blue">Running</Tag>}
       extra={[
         <Breadcrumb >
           <Breadcrumb.Item className="firstbreadcrumb">Inventory</Breadcrumb.Item>
           <Breadcrumb.Item>
         {/* <a href="/dashboard/announcement"></a> */}
         Stock Adjustment
       </Breadcrumb.Item>
         </Breadcrumb>
       ]}
       >
      </PageHeader>
     
    <LayoutWrapper>
      <LayoutContent>
      <Row style={{ marginBottom:'2%' }} justify='end'>
            {/*<Col>
            <Button style={{height:'40px',width:'40px'}} icon={< RedoOutlined />} size="medium"/>
            </Col>*/}
            <Col>
            <Button style={{height:'40px'}} onClick={handleFilter} icon={<FilterOutlined />} size="medium">
              <span className="hide-font">Filter</span>
            </Button>
            </Col>
      </Row>
      {showFilter ? (<div>
        <ContentWrapper>
          <Row gutter={[40, 16]} justify="space-between">
         
            <Col xs={24} sm={12} md={12} lg={12} xl={12} className="colstyle">
              <h1>Search By (Member ID / Name / IC)</h1>
              <Input placeholder="Search By (Member ID / Name / IC)" />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} className="colstyle">
              <h1>Search By (Invoice ID)</h1>
              <Input placeholder="Search By (Invoice ID)"/>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} className="colstyle">
              <h1>Search By Status</h1>
              <Input.Group compact >
              <Select defaultValue="Please Approval">
                <Option  value="Zhejiang">Ready to Dispense</Option>
                <Option value="Jiangsu">Collected</Option>
                <Option value="Jiangsu">On Delivery</Option>
                <Option value="Jiangsu">Packing in Progress</Option>
              </Select>
              </Input.Group>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={12} className="colstyle">
              <h1>Search By (Join Date)</h1>
              <Space direction="vertical"  size={12}>
              <RangePicker  />
              </Space>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="colstyle">
              <Row style={{marginTop:'1%', marginRight:'0%', float: 'right'}}>
                <Col>
                  <Button style={{ width: 100}} type="default">Reset</Button>
                </Col>
                <Col>
                  <Button style={{  width: 100,marginLeft:10}} type="primary">Search</Button>
                </Col>
            </Row>
            </Col>
          </Row>
          </ContentWrapper>
          </div>):null}
           <ContentWrapper >
              <Table pagination={false} className='selectStyle' columns={columns} dataSource={data} />
              <Row style={{ marginTop: '4%'}} justify='end'>
                <Pagination 
                total={85}
                showSizeChanger
                showQuickJumper
                showTotal={total => `Total ${total} items`}
              /></Row>
            </ContentWrapper>
    
      </LayoutContent>
      </LayoutWrapper>
    </div>
  );
};
export default PaymentApproval;

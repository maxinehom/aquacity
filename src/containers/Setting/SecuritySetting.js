import React from "react";
import { Table, Select, Input, Space, DatePicker, Button, Row, Col, Pagination,Tabs, Breadcrumb, PageHeader } from 'antd';
import  { ContentWrapper } from "./Setting.styles";
import LayoutContent from "@iso/components/utility/layoutContent";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import SubHeader from "@iso/components/utility/subHeader";
import {RedoOutlined} from '@ant-design/icons';
import {FilterOutlined} from '@ant-design/icons';
import IntlMessages from "@iso/components/utility/intlMessages";
import { AudioOutlined } from '@ant-design/icons';
import { Column } from "rc-table";
import ChangePassword from "./ChangePassword";
function callback(key) {
  console.log(key);
}
const { TabPane } = Tabs;
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
    width: 50,
    dataIndex: 'list_num',
    key: 'list_num',

  },
  {
    title: 'Member ID',
    width: 100,
    dataIndex: 'member_id',
    key: 'member_id',
  
  },
  
  {
    title: 'Member Name',
    dataIndex: 'member_name',
    key: 'member_name',
    width: 200,
  },
  {
    title: 'Status',
    dataIndex: 'inv_stat',
    key: 'inv_stat',
    width: 150,
  },
  {
    title: 'Action',
    key: 'operation',
   
    width: 100,
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
    inv_num:'00000012341',
    amount: '250.00',
    inv_stat: 'Pending',
    member_name: 'TECHBASE ADMIN',
    payment_method: 'Online Transfer',
    reject_reason: 'N/A',
  },
  {
    key: '2',
    list_num: '2',
    inv_num:'00000012342',
    amount: '750.00',
    inv_stat: 'Approved',
    member_name: 'TECHBASE ADMIN 2',
    payment_method: 'Card Credit',
    reject_reason: 'N/A',
  },
  {
    key: '3',
    list_num:'3',
    inv_num:'00000012343',
    amount: '500.00',
    inv_stat: 'Rejected',
    member_name: 'TECHBASE ADMIN 3',
    payment_method: 'Card Credit',
    reject_reason: 'Insufficient Fund',
  },
];

const SecuritySetting = () => {
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
        title="Security Setting"
        className="site-page-header"
        //subTitle="This is a subtitle"
        //tags={<Tag color="blue">Running</Tag>}
        extra={[
          <Breadcrumb >
            <Breadcrumb.Item className="firstbreadcrumb">Setting</Breadcrumb.Item>
            <Breadcrumb.Item>
            Security Setting
            </Breadcrumb.Item>
          </Breadcrumb>
        ]}
      />
    
 <LayoutWrapper>
      <LayoutContent>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane key="1" tab="Blocked IP List">
          <Row style={{ marginBottom:'2%' }} justify='end'>
            {/*<Col>
            <Button style={{height:'40px',width:'40px'}} icon={< RedoOutlined />} size="medium"/>
            </Col>*/}
            <Col>
            <Button style={{height:'40px'}} onClick={handleFilter} icon={<FilterOutlined />} size="medium" >
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
        </TabPane>
        <TabPane key="2" tab="Change Password">
            <ChangePassword style={{width:'100%'}}/>
        </TabPane>
        </Tabs>
      </LayoutContent>
      </LayoutWrapper>
    </div>
  );
};
export default SecuritySetting;

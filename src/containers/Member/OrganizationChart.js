
import { Tree, Popover, Tabs, Collapse, Table,Select, Input, Space, DatePicker, Button, Row, Col, Pagination,PageHeader,Breadcrumb } from 'antd';
import Wrapper, { ContentWrapper } from "./Profile.styles";
import {RedoOutlined} from '@ant-design/icons';
import {FilterOutlined} from '@ant-design/icons';
import LayoutContent from "@iso/components/utility/layoutContent";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import SubHeader from "@iso/components/utility/subHeader";
import IntlMessages from "@iso/components/utility/intlMessages";
import React, { useState } from 'react';
const { Panel } = Collapse;
const { TreeNode } = Tree;
const { TabPane } = Tabs;
const { Option } = Select;
const { RangePicker } = DatePicker;
function callback(key) {
  console.log(key);
}
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const popcontent = (
  <div>
    <Popover content={'pop'} trigger='click'>Content</Popover>
  </div>
);

const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
      {
        title: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
    children: [
      { title: '0-1-0-0', key: '0-1-0-0' },
      { title: '0-1-0-1', key: '0-1-0-1' },
      { title: '0-1-0-2', key: '0-1-0-2' },
    ],
  },
  {
    title: '0-2',
    key: '0-2',
  },
];

const tablecolumns = [
  {
    title: 'No.',
    width: 100,
    dataIndex: 'list_num',
    key: 'list_num',
  
  },
  {
    title: 'Member',
    width: 100,
    dataIndex: 'member_id',
    key: 'member_id',
    
  },
  {
    title: 'Name',
    dataIndex: 'member_name',
    key: 'member_name',
    width: 150,
  },
  {
    title: 'Ranking',
    dataIndex: 'member_ranking',
    key: 'member_ranking',
    width: 150,
  },
  {
    title: 'Upline ID',
    dataIndex: 'upline_id',
    key: 'upline_id',
    width: 150,
  },
  {
    title: 'Signup Date',
    dataIndex: 'signup_date',
    key: 'signup_date',
    width: 150,
  },
  {
    title: 'Status',
    dataIndex: 'member_status',
    key: 'member_status',
    width: 150,
  },
  {
    title: 'Members',
    dataIndex: 'member_num',
    key: 'member_num',
    width: 150,
  },
];

const tabledata = [
  {
    key: '1',
    list_num:'1',
    member_id: '000001',
    member_name: 'John Weak',
    member_ranking: 'Admin',
    upline_id: '-',
    signup_date: '01 Jan 2000 00:00:00',
    member_status: 'Active',
    member_num: '3',
  },
  {
    key: '2',
    list_num:'2',
    member_id: '000002',
    member_name: 'John Strong',
    member_ranking: 'Admin',
    upline_id: '-',
    signup_date: '01 Jan 2000 00:00:00',
    member_status: 'Active',
    member_num: '2',
  },
  {
    key: '3',
    list_num:'3',
    member_id: '000003',
    member_name: 'John',
    member_ranking: 'Admin',
    upline_id: '-',
    signup_date: '01 Jan 2000 00:00:00',
    member_status: 'Active',
    member_num: '1',
  },
];

const OrganizationChart = () => {

  const [expandedKeys, setExpandedKeys] = useState(['0-0-0', '0-0-1']);
  const [checkedKeys, setCheckedKeys] = useState(['0-0-0']);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [autoExpandParent, setAutoExpandParent] = useState(false);

  const onExpand = (expandedKeysValue) => {
    console.log('onExpand', expandedKeysValue); // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.

    setExpandedKeys(expandedKeysValue);
    setAutoExpandParent(false);
  };
  const onSelect = (selectedKeys) => {
    console.log('selected', selectedKeys);
    JSON.stringify(popcontent);
  };
  const [showFilter, setshowFilter] = React.useState(false);
  const handleFilter = () => {
    if(showFilter == false){
      setshowFilter(true)
    } else if(showFilter == true){
      setshowFilter(false)
    }
  }

  return (
    <div style={{ width: '100%', padding:"40px 20px" }}>
      <PageHeader
       title="Organization Chart"
       className="site-page-header"
       //subTitle="This is a subtitle"
       //tags={<Tag color="blue">Running</Tag>}
       extra={[
         <Breadcrumb >
           <Breadcrumb.Item className="firstbreadcrumb">Member</Breadcrumb.Item>
           <Breadcrumb.Item>
             {/* <a href="/dashboard/announcement"></a> */}
             Organization Chart
           </Breadcrumb.Item>
         </Breadcrumb>
       ]}
       ></PageHeader>
    <LayoutWrapper>
      
      <LayoutContent>
        <Row style={{ marginBottom:'2%' }} justify='end'>
        
       {/*} <Col>
        <Button style={{height:'40px',width:'40px'}} icon={< RedoOutlined />} size="medium"/>
        </Col>*/}
        <Col>
        <Button style={{height:'40px'}} onClick={handleFilter} icon={<FilterOutlined />} size="medium">
          <span className="hide-font">Filter</span>
        </Button>
        </Col>
        </Row>
        {showFilter ? (<div>
        <Row gutter={[40, 16]} justify="space-between">

          <Col xs={24} sm={12} md={12} lg={12} xl={12} className="colstyle">
            <h1>Search By (Member ID / Name / IC)</h1>
            <Input placeholder="Search By (Member ID / Name / IC)" />
          </Col>
        
          <Col xs={24} sm={12} md={12} lg={12} xl={12} className="colstyle">
            <h1>Search By Ranking</h1>
            <Input.Group compact >
            <Select style={{display:'grid' }} placeholder="Please Select">
              <Option  value="diamond">Diamond</Option>
              <Option value="emerald">Emerald</Option>
              <Option value="gold">Gold</Option>
              <Option value="bronze">Bronze</Option>
            </Select>
            </Input.Group>
          </Col>
      
          
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className="colstyle">
            <Row style={{marginTop:'0%', marginRight:'0%', float: 'right'}}>
              <Col>
                <Button style={{ width: 100}} type="default">Reset</Button>
              </Col>
              <Col>
                <Button style={{  width: 100,marginLeft:10}} type="primary" >Search</Button>
              </Col>
          </Row>  
          </Col>
        </Row>
        </div>):null}
        
          <ContentWrapper >
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tree View" key="1">
              <Tree
                  // checkable
                  onExpand={onExpand}
                  expandedKeys={expandedKeys}
                  autoExpandParent={autoExpandParent}
                  // onCheck={onCheck}
                  // checkedKeys={checkedKeys}
                  onSelect={onSelect}
                  selectedKeys={selectedKeys}
                   treeData={treeData}
                >
                {/* <TreeNode title={popcontent}>
                  <TreeNode title={popcontent}></TreeNode>
                </TreeNode> */}
              </Tree>
            </TabPane>
            <TabPane tab="Table View" key="2">
            <Collapse accordion expandIconPosition="right" defaultActiveKey={['lvl0']}>
              <Panel header="Level 0" key="lvl0" className="lvl0">
                <Table columns={tablecolumns} dataSource={tabledata} />
              </Panel>
              <Panel header="Level 1" key="lvl1" className="lvl1">
                <Table columns={tablecolumns} dataSource={tabledata}  />
              </Panel>
              <Panel header="Level 2" key="lvl2" className="lvl2">
                <Table columns={tablecolumns} dataSource={tabledata}  />
              </Panel>
              <Panel header="Level 3" key="lvl3" className="lvl3">
                <Table columns={tablecolumns} dataSource={tabledata} />
              </Panel>
              <Panel header="Level 4" key="lvl4" className="lvl4">
                <Table columns={tablecolumns} dataSource={tabledata} />
              </Panel>
            </Collapse>
            </TabPane>
          </Tabs>
              
          </ContentWrapper>
        
      </LayoutContent>
      </LayoutWrapper>
    </div>  
  );
};
export default OrganizationChart;

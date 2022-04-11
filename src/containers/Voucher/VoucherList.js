import React from "react";
import { Table, Select, Input, Space, DatePicker, Button, Row, Col, Pagination,Breadcrumb, PageHeader } from 'antd';
import  { ContentWrapper } from "./Voucher.styles";
import LayoutContent from "@iso/components/utility/layoutContent";
import SubHeader from "@iso/components/utility/subHeader";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import {RedoOutlined} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import {FilterOutlined,PlusCircleOutlined} from '@ant-design/icons';
import IntlMessages from "@iso/components/utility/intlMessages";
import { AudioOutlined } from '@ant-design/icons';
import { Column } from "rc-table";

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
    title: 'Voucher Code',
    width: 200,
    dataIndex: 'voucher_code',
    key: 'voucher_code',
   
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width:250,
  }, 
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: 150,
  },
  {
    title: 'Start Effective Time',
    dataIndex: 'starteffectivetime',
    key: 'starteffectivetime',
    width: 250,
  },
  {
    title: 'End Effective Time',
    dataIndex: 'endeffectivetime',
    key: 'endeffectivetime',
    width: 250,
  },
  {
    title: 'Sales Type',
    dataIndex: 'sales_type',
    key: 'sales_type',
    width: 150,
  },
  {
    title: 'Usage',
    dataIndex: 'usage',
    key: 'usage',
    width: 200,
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
    
    list_num: '1',
    voucher_code:'TECHBASE888',
    description:'Offer 50%',
    type: 'Discount Percent',
    starteffectivetime: '3/15/2022 12:00:00 AM',
    endeffectivetime: '3/20/2022 12:00:00 AM',
    sales_type:'Registration',
    usage:'1/10',
  },
  {
    
    list_num: '2',
    voucher_code:'MARCH315',
    description:'Free Shipping',
    type: 'Free Shipping',
    starteffectivetime: '3/20/2022 12:00:00 AM',
    endeffectivetime: '3/30/2022 12:00:00 AM',
    sales_type:'Repeat Purchase',
    usage:'8/1000',
  },
  {
    
    list_num: '3',
    voucher_code:'HAPPY2022',
    description:'New Year Offer',
    type: 'Discount Percent',
    starteffectivetime: '1/1/2022 12:00:00 AM',
    endeffectivetime: '2/1/2022 12:00:00 AM',
    sales_type:'Registration',
    usage:'3/100',
  },
];

const VoucherList = () => {
  const history = useHistory();
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
        title="Voucher List"
        className="site-page-header"
        //subTitle="This is a subtitle"
        //tags={<Tag color="blue">Running</Tag>}
        extra={[
          <Breadcrumb >
            <Breadcrumb.Item className="firstbreadcrumb">Voucher</Breadcrumb.Item>
            <Breadcrumb.Item>
            Voucher List
            </Breadcrumb.Item>
          </Breadcrumb>
        ]}
      />
     
 <LayoutWrapper>
      <LayoutContent>
      <Row style={{ marginBottom:'2%' }} justify='end'>
            {/*<Col>
            <Button style={{height:'40px',width:'40px'}} icon={< RedoOutlined />} size="medium"/>
            </Col>*/}

            <Col>
            <Button style={{height:'35px',width:'85px'}} onClick={handleFilter} icon={<FilterOutlined />} size="medium" className="filterbtn">
              <span>Filter</span>
            </Button>
            <Button
              className="addbutton"
              style={{ height: "35px"}}
              onClick={() => {
                history.push({
                  pathname: "/dashboard/newvoucher",
                });
              }}
              icon={<PlusCircleOutlined />}
              size="medium"
              type="primary"
            >
              Add Voucher
            </Button>
            </Col>
      </Row>
      {showFilter ? (<div>
        <ContentWrapper>
          <Row gutter={[40, 16]} justify="space-between">

            <Col xs={24} sm={12} md={12} lg={12} xl={8} className="colstyle">
              <h1>Search By Voucher Code</h1>
              <Input placeholder="Search By Voucher Code" />
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={8} className="colstyle">
              <h1>Search By Effective Time</h1>
              <Space direction="vertical" size={12}>
                <RangePicker />
              </Space>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={8} className="colstyle">
              <h1>Voucher Type</h1>
              <Input.Group compact >
              <Select defaultValue="Please Approval">
                <Option  value="Zhejiang">Discount</Option>
                <Option value="Jiangsu">Cast</Option>
              </Select>
              </Input.Group>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12} xl={8} className="colstyle">
              <h1>Sales Type</h1>
              <Input.Group compact >
              <Select defaultValue="Please Approval">
                <Option  value="Zhejiang">Repeat Purchase</Option>
                <Option value="Jiangsu">Registration</Option>
              </Select>
              </Input.Group>
            </Col>
            
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="colstyle">
              <Row style={{marginTop:'2%', marginRight:'0%', float: 'right'}}>
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
export default VoucherList;
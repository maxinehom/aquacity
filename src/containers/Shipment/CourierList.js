import React from "react";
import { Table, Select, Input, Space, DatePicker, Button, Row, Col, Pagination,Breadcrumb, PageHeader } from 'antd';
import  { ContentWrapper } from "./Shipment.styles";
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
    title: 'Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
   
  },
  {
    title: 'Office Tel',
    dataIndex: 'office_tel',
    key: 'office_tel',
    width: 100,
  }, 
  {
    title: 'Remark',
    dataIndex: 'remark',
    key: 'remark',
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
    key: '1',
    list_num: '1',
    name:'00000012341',
    office_tel: '250.00',
    remark: 'Pending',
  },
  {
    key: '2',
    list_num: '2',
    name:'00000012341',
    office_tel: '250.00',
    remark: 'Pending',
  },
  {
    key: '3',
    list_num: '3',
    name:'00000012341',
    office_tel: '250.00',
    remark: 'Pending',
  },
];

const ProductList = () => {
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
        title="Courier List"
        className="site-page-header"
        //subTitle="This is a subtitle"
        //tags={<Tag color="blue">Running</Tag>}
        extra={[
          <Breadcrumb >
            <Breadcrumb.Item className="firstbreadcrumb">Shipment</Breadcrumb.Item>
            <Breadcrumb.Item>
            Courier List
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
                  pathname: "/dashboard/AddCourier",
                });
              }}
              icon={<PlusCircleOutlined />}
              size="medium"
              type="primary"
            >
              Add Courier
            </Button>
            </Col>
      </Row>
      {showFilter ? (<div>
        <ContentWrapper>
          <Row gutter={[40, 16]} justify="space-between">

            <Col xs={24} sm={12} md={12} lg={12} xl={12} className="colstyle">
              <h1>Search By (Name/Tel)</h1>
              <Input placeholder="Search By (Member ID / Name / IC)" />
            </Col>
           
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="colstyle">
              <Row style={{marginTop:'0%', marginRight:'0%', float: 'right'}}>
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
export default ProductList;

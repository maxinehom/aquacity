import { FilterOutlined, RedoOutlined,PlusCircleOutlined} from '@ant-design/icons';
import LayoutContent from "@iso/components/utility/layoutContent";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import { useHistory } from "react-router-dom";
import SubHeader from "@iso/components/utility/subHeader";
import { Button, Col, DatePicker, Input, Pagination, Row, Select, Space, Table,PageHeader,Breadcrumb } from 'antd';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContentWrapper, FormWrapper } from "./sms.styles";
const memberID = localStorage.getItem('username')
const { RangePicker } = DatePicker;
const { Search } = Input;
const onSearch = value => console.log(value);
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

const SMSList = () => {
const history = useHistory();
  let num=0;
  const [showFilter, setshowFilter] = React.useState(false);
  const [MemberList, setMemberList] = useState([]);
  const handleFilter = () => {
    if (showFilter === false) {
      setshowFilter(true)
    } else if (showFilter === true) {
      setshowFilter(false)
    }
  }
  React.useEffect(() => {
    var getlist = {
      value: JSON.parse(memberID),
    };
    let statement_config = {
      method: "POST",
      url: process.env.REACT_APP_API_KEY + "/member/GetMemberList",
      headers: {
        "Content-Type": "application/json",
      },
      data: getlist,
    };
    axios(statement_config)
      .then(function (response) {
        if (response.data.code) setMemberList(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const columns = [
    {
      title: 'No.',
      width: 50,
      dataIndex: 'list_num',
    },
    {
      title: 'Distributor ID',
      dataIndex: 'distributorID',
      key: 'distributorID',
      
    },
    {
      title: 'Name',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Mobile No',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
        title: 'Country',
        dataIndex: 'country',
        key: 'country',
      },
      {
        title: 'State',
        dataIndex: 'state',
        key: 'state',
      },
      {
        title: 'Ranking',
        dataIndex: 'ranking',
        key: 'ranking',
      },
      {
        title: 'Join Date',
        dataIndex: 'joindate',
        key: 'joindate',
      },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];
  const distributordata = [
{   list_num : '1',
    distributorID : '004973',
    fullname : 'ACHONG',
    mobile:'60124203733',
    gender:'Male',
    country:'Malaysia',
    state:'Johor',
    ranking:'Customer',
    joindate:'29 Jul 2021',
    status:'Active'
},
{   list_num : '2',
    distributorID : '035823',
    fullname : 'ANG KEAN KOK	',
    mobile:'6177804938',
    gender:'Male',
    country:'Malaysia',
    state:'Kedah',
    ranking:'Master Dealer',
    joindate:'27 Nov 2021',
    status:'Active'
},
{   list_num : '3',
    distributorID : '017377',
    fullname : 'GRACE TAN SHU TING',
    mobile:'60192607367	',
    gender:'Female',
    country:'Malaysia',
    state:'Selangor',
    ranking:'Dealer',
    joindate:'30 Sep 2021',
    status:'InActive'
}
  ]

  return (
    <div style={{ width: '100%', padding:"40px 20px" }}>
      <PageHeader
       title="SMS Statement"
       className="site-page-header"
       //subTitle="This is a subtitle"
       //tags={<Tag color="blue">Running</Tag>}
       extra={[
         <Breadcrumb >
           <Breadcrumb.Item className="firstbreadcrumb">SMS</Breadcrumb.Item>
           <Breadcrumb.Item>
             {/* <a href="/dashboard/announcement"></a> */}
            SMS Statement
           </Breadcrumb.Item>
         </Breadcrumb>
       ]}
       ></PageHeader>
   
    <ContentWrapper>
    <LayoutContent>
      <Row style={{ marginBottom: '2%' }} justify='end'>

        {/*<Col>
          <Button style={{ height: '40px', width: '40px' }} icon={< RedoOutlined />} size="medium" />
        </Col>*/}
        <Col>
          <Button style={{ height: '35px'}} onClick={handleFilter} icon={<FilterOutlined />} size="medium" className="filterbtn">
            <span className="hide-font">Filter</span>
          </Button>
          <Button
              className="addbutton"
              style={{ height: "35px"}}
              onClick={() => {
                history.push({
                  pathname: "/dashboard/sendsms",
                });
              }}
              icon={<PlusCircleOutlined />}
              size="medium"
              type="primary"
            >
              Send SMS
            </Button>
        </Col>
      </Row>
      {showFilter ? (<div>
        <Row gutter={[40, 16]} justify="space-between">

          <Col xs={24} sm={12} md={12} lg={12} xl={8} className="colstyle">
            <h1>Search By (Distributor ID / Name / IC)</h1>
            <Input placeholder="Search By (Member ID / Name / IC)" />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8} className="colstyle">
            <h1>Search By Ranking</h1>
            <Input.Group compact >
              <Select placeholder="Please Select">
                <Option value="diamond">Customer</Option>
                <Option value="emerald">Dealer</Option>
                <Option value="gold">Master Dealer</Option>

              </Select>
            </Input.Group>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8} className="colstyle">
            <h1>Search By (Join Date)</h1>
            <Space direction="vertical" size={12}>
              <RangePicker/>
            </Space>
          </Col>
         
          <Col xs={24} sm={24} md={24} lg={24} xl={24} className="colstyle">
            <Row style={{ marginTop: '2%', marginRight: '0%', float: 'right' }}>
              <Col>
                <Button style={{ width: 100 }} type="default">Reset</Button>
              </Col>
              <Col>
                <Button style={{ width: 100, marginLeft: 10 }} type="primary" >Search</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>) : null}
      <ContentWrapper >
        <Table pagination={false} className='selectStyle' columns={columns} dataSource={distributordata} />
        <Row style={{ marginTop: '4%' }} justify='end'><Pagination
          total={85}
          showSizeChanger
          showQuickJumper
          showTotal={total => `Total ${total} items`}
        /></Row>
      </ContentWrapper>

    </LayoutContent>   
    </ContentWrapper>
    </div> 
  );
};
export default SMSList;

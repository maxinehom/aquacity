import { FilterOutlined, RedoOutlined } from '@ant-design/icons';
import LayoutContent from "@iso/components/utility/layoutContent";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import SubHeader from "@iso/components/utility/subHeader";
import { Button, Col, DatePicker, Input, Pagination, Row, Select, Space, Table,PageHeader,Breadcrumb } from 'antd';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContentWrapper, FormWrapper } from "./Member.styles";
const memberID = localStorage.getItem('username')
const { RangePicker } = DatePicker;
const { Search } = Input;
const onSearch = value => console.log(value);
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

const MemberList = () => {
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
      render: () => {
        num = num + 1;
        return <span>{num}</span>;
      },
      key: num,
    },
    {
      title: 'Member',
      dataIndex: 'memberID',
      key: 'memberID',
      
    },
    {
      title: 'Name',
      dataIndex: 'fullname',
      key: 'fullname',
    },
    {
      title: 'Ranking',
      dataIndex: 'ranking',
      key: 'ranking',
    },
    {
      title: 'Signup Date',
      dataIndex: 'signupDate',
      key: 'signupDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'operation',
     
      render: () => <Select defaultValue='Action' >
        <option value='view'>View</option>
        <option value='edit'>Edit</option>
      </Select>,
    },
  ];

  return (
    <div style={{ width: '100%', padding:"40px 20px" }}>
      <PageHeader
       title="Member List"
       className="site-page-header"
       //subTitle="This is a subtitle"
       //tags={<Tag color="blue">Running</Tag>}
       extra={[
         <Breadcrumb >
           <Breadcrumb.Item className="firstbreadcrumb">Member</Breadcrumb.Item>
           <Breadcrumb.Item>
             {/* <a href="/dashboard/announcement"></a> */}
             Member List
           </Breadcrumb.Item>
         </Breadcrumb>
       ]}
       ></PageHeader>
   
    
    <FormWrapper>
    <LayoutContent>
      <Row style={{ marginBottom: '2%' }} justify='end'>

        {/*<Col>
          <Button style={{ height: '40px', width: '40px' }} icon={< RedoOutlined />} size="medium" />
        </Col>*/}
        <Col>
          <Button style={{ height: '40px'}} onClick={handleFilter} icon={<FilterOutlined />} size="medium">
            <span className="hide-font">Filter</span>
          </Button>
        </Col>
      </Row>
      {showFilter ? (<div>
        <Row gutter={[40, 16]} justify="space-between">

          <Col xs={24} sm={12} md={12} lg={12} xl={12} className="colstyle">
            <h1>Search By (Member ID / Name / IC)</h1>
            <Input placeholder="Search By (Member ID / Name / IC)"/>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12} className="colstyle">
            <h1>Search By City</h1>
            <Input placeholder="Search By City"/>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12} className="colstyle">
            <h1>Search By Ranking</h1>
            <Input.Group compact >
              <Select placeholder="Please Select">
                <Option value="diamond">Diamond</Option>
                <Option value="emerald">Emerald</Option>
                <Option value="gold">Gold</Option>
                <Option value="bronze">Bronze</Option>
              </Select>
            </Input.Group>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={12} className="colstyle">
            <h1>Search By (Join Date)</h1>
            <Space direction="vertical" size={12}>
              <RangePicker/>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8} className="colstyle">
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={8} className="colstyle">
            <Row style={{ marginTop: '6%', marginRight: '2%', float: 'right' }}>
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
        <Table pagination={false} className='selectStyle' columns={columns} dataSource={MemberList} />
        <Row style={{ marginTop: '4%' }} justify='end'><Pagination
          total={85}
          showSizeChanger
          showQuickJumper
          showTotal={total => `Total ${total} items`}
        /></Row>
      </ContentWrapper>

    </LayoutContent>
    </FormWrapper>
   
    </div> 
  );
};
export default MemberList;

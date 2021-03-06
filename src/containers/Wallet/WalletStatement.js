import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Table, Select, Input, Space, DatePicker, Button, Row, Col, Pagination } from 'antd';
import LayoutContent from "@iso/components/utility/layoutContent";
import { RedoOutlined } from '@ant-design/icons';
import { FilterOutlined } from '@ant-design/icons';
import { ContentWrapper } from './Wallet.styles';
const memberID = localStorage.getItem('username')

const { RangePicker } = DatePicker;
const { Search } = Input;


const onSearch = value => console.log(value);
const { Option } = Select;

const WalletStatement = () => {
  let num = 0;
  const [pageSizePagination, setPageSizePagination] = React.useState(10);
  const [showFilter, setshowFilter] = React.useState(false);
  const [Wstatement, setWstatement] = useState([]);
  const handleFilter = () => {
    if (showFilter === false) {
      setshowFilter(true)
    } else if (showFilter === true) {
      setshowFilter(false)
    }
  }
  React.useEffect(() => {
    if (memberID != undefined) {
      var wallet_statement = {
        memberID: JSON.parse(memberID),
        walletID: "1",
      };
      let statement_config = {
        method: "POST",
        url: process.env.REACT_APP_API_KEY + "/wallet/GetWalletStatement",
        headers: {
          "Content-Type": "application/json",
        },
        data: wallet_statement,
      };
      axios(statement_config)
        .then(function (response) {

          if (response.data.code) setWstatement(response.data.result);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, []);
  function onShowSizeChange(pageSize) {
    if (pageSize !== pageSizePagination) {
      setPageSizePagination(pageSize);
    }
  }
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
      title: 'From ID',
      dataIndex: 'fromID',
      key: 'fromID',
    },
    {
      title: 'From Name',
      dataIndex: 'fromName',
      key: 'fromName',
    },
    {
      title: 'To ID',
      dataIndex: 'toID',
      key: 'toID',
    },
    {
      title: 'To Name',
      dataIndex: 'toName',
      key: 'toName',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Sales ID',
      dataIndex: 'salesID',
      key: 'salesID',
    },
    {
      title: 'Remarks',
      dataIndex: 'remarks',
      key: 'remarks',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Transaction Type',
      dataIndex: 'transactionType',
      key: 'transactionType',
    },
  ];
  return (
    <div style={{ width: '100%' }}>

      <LayoutContent>
        <Row style={{ marginBottom: '2%' }} justify="end">
          {/*<Col>
            <Button style={{ height: '40px', width: '40px' }} icon={< RedoOutlined />} size="medium" />
          </Col>*/}
          <Col>
            <Button style={{ height: '35px' }} onClick={handleFilter} icon={<FilterOutlined />} size="medium">
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
              <h1>Search By Wallet</h1>
              <Input.Group compact >
                <Select defaultValue="c_wallet">
                  <Option value="c_wallet">C$ Wallet</Option>
                  <Option value="s_wallet">S$ Wallet</Option>
                  <Option value="r_wallet">R$ Wallet</Option>
                </Select>
              </Input.Group>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} className="colstyle">
              <Row style={{ marginTop: '1%', marginRight: '0%', float: 'right' }}>
                <Col>
                  <Button style={{ width: 100 }} type="default">Reset</Button>
                </Col>
                <Col>
                  <Button style={{ width: 100, marginLeft: 10 }} type="primary">Search</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>) : null}
        <ContentWrapper >
          <Table pagination={true} className='selectStyle' columns={columns} dataSource={Wstatement.slice()} />
          <Row justify='end' style={{ marginTop: '4%' }}>
            {/* <Pagination
              pageSize={pageSizePagination}
              total={num}
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              showQuickJumper
              showTotal={total => `Total ${total} items`}
            /> */}
          </Row>
        </ContentWrapper>

      </LayoutContent>
    </div>
  );
};
export default WalletStatement;

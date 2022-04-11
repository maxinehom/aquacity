import React,{useState, useEffect} from 'react';
import axios from "axios";
import { Row, Col, Tabs, Form, Input, Button, Divider, Select, Upload, message,Table, Space, Card, PageHeader, Breadcrumb } from 'antd';
import { InboxOutlined,PlusCircleOutlined} from '@ant-design/icons';
import SubHeader from '@iso/components/utility/subHeader';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import LayoutContent from "@iso/components/utility/layoutContent";
import { FilterOutlined } from '@ant-design/icons';
import StickerWidget from './Sticker/StickerWidget';
import basicStyle from '@iso/assets/styles/constants';
import sticker_a from "@iso/assets/images/sticker/sticker_a.png";
import sticker_b from "@iso/assets/images/sticker/sticker_b.png";
import sticker_c from "@iso/assets/images/sticker/sticker_c.png";
import top_up_images from "@iso/assets/images/sticker/top-up.png";
import transfer_images from "@iso/assets/images/sticker/transfer.png";
import { Link } from "react-router-dom";
import withdrawal_images from "@iso/assets/images/sticker/withdrawal.png";
import statement_images from "@iso/assets/images/sticker/statement.png";
// import whitelogo from "@iso/assets/images/sticker/techbase.png";
import WidgetWrapper, {ContentWrapper, Box} from './Wallet.styles';
import WalletStatement from './WalletStatement'
import { grayscale } from 'base16';
const memberID = localStorage.getItem('username')
const { TabPane } = Tabs;
const { TextArea } = Input;
const { Option } = Select;
const { Meta } = Card;

const data = [
  {
    key: '1',
    member_id: '000001',
    member_name: 'John Weak',
    cash_wallet: 'RM 78,122.00',
  },
  {
    key: '2',
    member_id: '000002',
    member_name: 'John Pro',
    cash_wallet: 'RM 78,123.00',
  },
  {
    key: '3',
    member_id: '000003',
    member_name: 'John Smith',
    cash_wallet: 'RM 78,124.00',
  },
];

// Table ^
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};




export default function Wallet() {
  const [showFilter, setshowFilter] = React.useState(false);
  const handleFilter = () => {
    if (showFilter === false) {
      setshowFilter(true)
    } else if (showFilter === true) {
      setshowFilter(false)
    }
  }
  const { rowStyle, colStyle } = basicStyle;
  const [showTable, setshowTable] = React.useState(true);
  const [showForm, setshowForm] = React.useState(false);

  const [data_c, setDataC] = useState("");
  const [data_s, setDataS] = useState("");
  const [data_r, setDataR] = useState("");
  
  React.useEffect(() => {    
    var balance_c = {
      memberID: JSON.parse(memberID),
      walletType: "1",
    };
    let config_c = {
      method: "POST",
      url: process.env.REACT_APP_API_KEY + "/wallet/GetWalletBalance/",
      headers: {
        "Content-Type": "application/json",
      },
      data: balance_c,
    };
    axios(config_c)
      .then(function (response) {
        if (response.data.code) setDataC(response.data.result);
        alert(response.data.result)
      })
      .catch(function (error) {
        console.log(error);
      });
    
    var balance_s = {
      memberID: JSON.parse(memberID),
      walletType: "2",
    };
    let config_s = {
      method: "POST",
      url: process.env.REACT_APP_API_KEY + "/wallet/GetWalletBalance/",
      headers: {
        "Content-Type": "application/json",
      },
      data: balance_s,
    };
    axios(config_s)
      .then(function (response) {
        if (response.data.code) setDataS(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });

      var balance_r = {
        memberID: JSON.parse(memberID),
        walletType: "4",
      };
      let config_r = {
        method: "POST",
        url: process.env.REACT_APP_API_KEY + "/wallet/GetWalletBalance/",
        headers: {
          "Content-Type": "application/json",
        },
        data: balance_r,
      };
      axios(config_r)
        .then(function (response) {
          if (response.data.code) setDataR(response.data.result);
        })
        .catch(function (error) {
          console.log(error);
        });

      

  }, []);

  const handleShowForm = () => {
      setshowForm(true);
      setshowTable(false);
  }
  const handleShowTable = () => {   
      setshowForm(false);
     setshowTable(true);
  }
    


  //Form Submit v
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onReset = () => {
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  

//Table v
const columns = [
  {
    title: 'Member ID',
    dataIndex: 'member_id',
    key: 'member_id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'member_name',
    key: 'member_name',
  },
  {
    title: 'Cash Wallet',
    dataIndex: 'cash_wallet',
    key: 'cash_wallet',
  },
  {
    title: 'Action',
    key: 'action',
    
    render: (text, record) => (
      <Select defaultValue='Action' >
      <option  value='view'>Approve</option>
      <option value='edit'>Reject</option>
    </Select>
    ),
  },
];
const STICKER_WIDGET = [
  {  
    key: 'c_wallet', 
    number: data_c,
    text: 'C$ Wallet',
    // icon: 'ion-card',
    fontColor: '#ffffff', 
    bgColor: '#7266BA',
    bgImage: `url(${sticker_a})`,
    // icon: `url(${whitelogo})`,
    bgSize: 'cover',
    bgPosition: 'center center',
    bgRepeat: 'no-repeat',
    bdColor: '#ff000000',
    // textAlign: '0%',
  },
  {
    key: 's_wallet', 
    number: data_s,
    text: 'S$ Wallet',
    // icon: 'ion-wallet',
    fontColor: '#ffffff',
    bgColor: '#42A5F6',
    bgImage: `url(${sticker_b})`,
    bgSize: 'cover',
    bgPosition: 'center center',
    bgRepeat: 'no-repeat',
    bdColor: '#6f21ed',
  },
  {
    key: 'r_wallet', 
    number: data_r,
    text: 'R$ Wallet',
    //icon: 'ion-bank',
    fontColor: '#ffffff',
    bgColor: '#7ED320',
    bgImage: `url(${sticker_c})`,
    bgSize: 'cover',
    bgPosition: 'center center',
    bgRepeat: 'no-repeat',
    bdColor: '#ff000000',
  },
];

  //Form Submit ^
  return (
    
 
    <LayoutWrapper>
      <ContentWrapper style={{width: '100%'}}>
      <PageHeader
       title="Wallet"
       className="site-page-header"
       //subTitle="This is a subtitle"
       //tags={<Tag color="blue">Running</Tag>}
       extra={[
         <Breadcrumb >
           <Breadcrumb.Item className="firstbreadcrumb">Wallet</Breadcrumb.Item>
           <Breadcrumb.Item>
         {/* <a href="/dashboard/announcement"></a> */}
         S-Wallet
       </Breadcrumb.Item>
         </Breadcrumb>
       ]}
       >
      </PageHeader>
        <Row style={rowStyle} gutter={0} justify="start">
         {/* Sticker Widget */}
          {STICKER_WIDGET.map((widget, idx) => (
            <Col lg={8} md={12} sm={12} xs={24} style={colStyle} key={idx}>
              <WidgetWrapper>
              <Link to={"/dashboard/"+widget.key} >         
                <StickerWidget 
                  className="leftbottom"
                  height={widget.height}
                  text={widget.text}
                  number={widget.number}
                  fontColor={widget.fontColor}                
                  bgImage={widget.bgImage} 
                  bgSize={widget.bgSize}  
                  width={widget.width}
                  bgRepeat={widget.bgRepeat}
                  textAlign={widget.textAlign}
                  bdColor={widget.bdColor}
                  bgPosition={widget.bgPosition}
                />      
                </Link>           
              </WidgetWrapper>
            </Col>
          ))}
        </Row>
        <SubHeader >S$ Wallet</SubHeader>
        {/* <Row style={rowStyle} gutter={16,16} justify="start" >
          <Col lg={4} md={8} sm={8} xs={24} style={colStyle}>   
            <WidgetWrapper>
              <Card
                className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={top_up_images }/>}
              >
                <Meta  className="cardtext" title="Top Up" description="" />
              </Card>
            </WidgetWrapper>
          </Col>

          <Col lg={4} md={8} sm={8} xs={24} style={colStyle}>    
            <WidgetWrapper>
              <Card
              className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={transfer_images}/>}
              >
                <Meta  className="cardtext" title="Transfer" description="" />
              </Card>
            </WidgetWrapper>
          </Col>
          <Col lg={4} md={8} sm={8} xs={24} style={colStyle}>   
            <WidgetWrapper>
              <Card
              className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={withdrawal_images}/>}
              >
                <Meta  className="cardtext" title="Withdrawal" description="" />
              </Card>
            </WidgetWrapper>
          </Col>
          <Col lg={4} md={6} sm={8} xs={24} style={colStyle}>   
            <WidgetWrapper>
              <Card
              className="cardborder" 
                hoverable
                cover={<img  className="cardicon" alt="/" src={statement_images}/>}
              >
                <Meta  className="cardtext" title="Statement" description="" />
              </Card>
            </WidgetWrapper>
          </Col>

        </Row> */}
        <Row style={rowStyle} gutter={0} justify="start" >
          <Col lg={24} md={24} sm={24} xs={24}>
            <Tabs defaultActiveKey="1" type="card">
              <TabPane tab={
                <WidgetWrapper>
                  <Card
                    className="cardborder"
                    hoverable
                    cover={<img className="cardicon" alt="/" src={statement_images} />}
                  >
                    <Meta className="cardtext" title="Statement" description="" />
                  </Card>
                </WidgetWrapper>} key="1">

                <WalletStatement />

              </TabPane>
          <TabPane tab={
                <WidgetWrapper>
                  <Card
                    className="cardborder"
                    hoverable
                    cover={<img className="cardicon" alt="/" src={top_up_images} />}
                  >
                 
                    <Meta className="cardtext" title="Top Up" description="" />
                  </Card>
                </WidgetWrapper>} key="2">
                <LayoutContent>
                  <Box>
                <Row style={{ marginBottom: '2%' }} justify="end">
                 {/*<Col>
            <Button style={{ height: '40px', width: '40px' }} icon={< RedoOutlined />} size="medium" />
          </Col>*/}
          <Col>
            <Button style={{ height: '35px'}} onClick={handleFilter} icon={<FilterOutlined />} className="filterbtn" size="medium">
              <span className="hide-font">Filter</span>
            </Button>
            <Button
            key="openform" onClick={handleShowForm}
              className="addbutton"
              style={{ height: "35px"}}
              icon={<PlusCircleOutlined />}
              size="medium"
              type="primary"
            >
              <span className="hide-font">Top up</span>
            </Button>
          </Col> 
        </Row>
        {showFilter ? (<div>
          <Row gutter={[40, 16]} justify="space-between">

            <Col xs={24} sm={12} md={12} lg={12} xl={8} className="colstyle">
              <h1>Search By (Member ID / Name / IC)</h1>
              <Input placeholder="Search By (Member ID / Name / IC)" />
            </Col>
            
            <Col xs={24} sm={12} md={12} lg={12} xl={8} className="colstyle">
              <Row style={{ marginTop: '6%', marginRight: '2%', float: 'right' }}>
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
                <ContentWrapper>
                {showTable ? <Table className='btnStyle' columns={columns} dataSource={data} /> : null}
                {showForm ? 
                
                  <Form
                    form={form}
                    name="topup_wallet"
                    labelAlign={'right'}
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 24 }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                     <Divider></Divider>
                        <SubHeader>
                          Topup Details
                        </SubHeader>
                    <Form.Item  >
                          <Button htmlType="button" onClick={handleShowTable} style={{ float: 'right' }}>
                            Back to Table
                          </Button>
                        </Form.Item>
                    <Form.Item
                      label="Member ID"
                      name="member_id"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Member ID!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      label="Member Name"
                      name="member_name"
                    >
                      John Weak
                    </Form.Item>
                    <Form.Item
                      label="Top Up Amount"
                      name="topup_amount"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your top up amount!',
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Today Currency"
                      name="today_currency"
                    >
                      RM 5
                    </Form.Item>
                    <Form.Item
                      label="Security Password"
                      name="security_pw"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item
                      label="Payment Method"
                      name="topup_with"

                    >
                      <Select defaultValue="fpx" style={{ width: 200 }}>
                        <Option value="fpx">FPX (Online Payment)</Option>
                        <Option value="e-wallet">E-Wallet</Option>
                        <Option value="cards">Debit / Credit Card</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      wrapperCol={{
                        offset: 5,
                        span: 12,
                      }}
                      name="upload receipt"
                    >
                      <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                          <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload your receipt</p>
                      </Dragger>
                    </Form.Item>
                    <Form.Item
                      wrapperCol={{
                        offset: 5,
                        span: 12,
                      }}
                    >
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                      <Button htmlType="button" onClick={onReset} style={{ marginLeft: 8 }}>
                        Reset
                      </Button>
                    </Form.Item>
                  </Form>
                :null}
                </ContentWrapper>
                </Box>
                </LayoutContent>
          </TabPane>
        
              <TabPane tab={
                <WidgetWrapper>
                  <Card
                    className="cardborder"
                    hoverable
                    cover={<img className="cardicon" alt="/" src={transfer_images} />}
                  >
                    <Meta className="cardtext" title="Transfer" description="" />
                  </Card>
                </WidgetWrapper>} key="3">
                <LayoutContent>
                <Box>
                <Row style={{ marginBottom: '2%' }} justify="end">
          {/*<Col>
            <Button style={{ height: '40px', width: '40px' }} icon={< RedoOutlined />} size="medium" />
          </Col>*/}
          <Col>
            <Button style={{ height: '35px'}} onClick={handleFilter} icon={<FilterOutlined />} className="filterbtn" size="medium">
              <span className="hide-font">Filter</span>
            </Button>
            <Button
            key="openform" onClick={handleShowForm}
              className="addbutton"
              style={{ height: "35px"}}
              icon={<PlusCircleOutlined />}
              size="medium"
              type="primary"
            >
              <span className="hide-font">Transfer</span>
            </Button>
          </Col> 
        </Row>
        {showFilter ? (<div>
          <Row gutter={[40, 16]} justify="space-between">

            <Col xs={24} sm={12} md={12} lg={12} xl={8} className="colstyle">
              <h1>Search By (Member ID / Name / IC)</h1>
              <Input placeholder="Search By (Member ID / Name / IC)" />
            </Col>
            
            <Col xs={24} sm={12} md={12} lg={12} xl={8} className="colstyle">
              <Row style={{ marginTop: '6%', marginRight: '2%', float: 'right' }}>
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
                <ContentWrapper>
                {showTable ? <Table className='btnStyle' columns={columns} dataSource={data} /> : null}
                {showForm ? 
                <Form
                form={form}
                name="transfer_wallet"
                labelAlign={'right'}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 24 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                 <Divider></Divider>
                        <SubHeader>
                          Transfer Details
                        </SubHeader>
                        <Form.Item  >
                          <Button htmlType="button" onClick={handleShowTable} style={{ float: 'right' }}>
                            Back to Table
                          </Button>
                        </Form.Item>
                <Form.Item
                  label="From (Member ID)"
                  name="from_id"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Transfer from" />
                </Form.Item>
                <Form.Item
                  name="member_name"
                  label=" "
                  colon={false}
                >
                  John Weak
                </Form.Item>
                <Form.Item
                  name="wallet_balance"
                  label=" "
                  colon={false}
                  style={{ fontWeight: 'bold' }}
                >
                  Wallet Balance :RM78,122.00
                </Form.Item>
                <Form.Item
                  label="To (Member ID)"
                  name="to_id"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Transfer to" />
                </Form.Item>
                <Form.Item
                  label="Transfer Amount"
                  name="transfer_amount"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your transfer amount!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="wallet_type"
                  label="Wallet Type"
                >
                  <Select defaultValue="c_wallet" style={{ width: 200 }}>
                    <Option value="c_wallet">C$ Wallet</Option>
                    <Option value="s_wallet">S$ Wallet</Option>
                    <Option value="r_wallet">R$ Wallet</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label="Security Password"
                  name="security_pw"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  label="Remark"
                  name="transfer_remark"
                >
                  <TextArea rows={4} />
                </Form.Item>
                <Form.Item
                  wrapperCol={{
                    offset: 10,
                    span: 12,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button htmlType="button" onClick={onReset} style={{ marginLeft: 8 }}>
                    Reset
                  </Button>
                </Form.Item>
              </Form>
                :null}
                </ContentWrapper>
                </Box>
                </LayoutContent>
              </TabPane>

              <TabPane tab={

                <WidgetWrapper>
                  <Card
                    className="cardborder"
                    hoverable
                    cover={<img className="cardicon" alt="/" src={withdrawal_images} />}
                  >
                    <Meta className="cardtext" title="Withdrawal" description="" />
                  </Card>

                </WidgetWrapper>} key="4">
                <LayoutContent>
                <Box className='box-css'>
                <Row style={{ marginBottom: '2%' }} justify="end">
          {/*<Col>
            <Button style={{ height: '40px', width: '40px' }} icon={< RedoOutlined />} size="medium" />
          </Col>*/}
          <Col>
            <Button style={{ height: '35px'}} onClick={handleFilter} icon={<FilterOutlined />} className="filterbtn" size="medium">
              <span className="hide-font">Filter</span>
            </Button>
            <Button
            key="openform" onClick={handleShowForm}
              className="addbutton"
              style={{ height: "35px"}}
              icon={<PlusCircleOutlined />}
              size="medium"
              type="primary"
            >
              <span className="hide-font">Withdraw</span>
            </Button>
          </Col> 
        </Row>
        {showFilter ? (<div>
          <Row gutter={[40, 16]} justify="space-between">

            <Col xs={24} sm={12} md={12} lg={12} xl={8} className="colstyle">
              <h1>Search By (Member ID / Name / IC)</h1>
              <Input placeholder="Search By (Member ID / Name / IC)" />
            </Col>
            
            <Col xs={24} sm={12} md={12} lg={12} xl={8} className="colstyle">
              <Row style={{ marginTop: '6%', marginRight: '2%', float: 'right' }}>
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
        <ContentWrapper>
                  {showTable ? <Table className='btnStyle' columns={columns} dataSource={data} /> : null}
                  {showForm ?
                    <div>
                      <Form
                        form={form}
                        name="transfer_wallet"
                        labelAlign={'right'}
                        labelCol={{ span: 5 }}
                        wrapperCol={{ span: 24 }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                      >
                        <Divider></Divider>
                        <SubHeader>
                          Withdrawal Details
                        </SubHeader>
                        <Form.Item  >
                          <Button htmlType="button" onClick={handleShowTable} style={{ float: 'right' }}>
                            Back to Table
                          </Button>
                        </Form.Item>
                        
                        <Form.Item
                          label="Member ID"
                          name="member_id"
                        >
                          000002
                        </Form.Item>
                        <Form.Item
                          name="member_name"
                          label="Member Name"
                        >
                          John Weak
                        </Form.Item>
                        <Form.Item
                          name="wallet_type"
                          label="Wallet Type"
                          rules={[
                            {
                              required: true,
                              message: 'Please select your wallet type!',
                            },
                          ]}
                        >
                          <Select defaultValue="select" style={{ width: 200 }}
                          >
                            <Option value="select">Please Select</Option>
                            <Option value="c_wallet">C$ Wallet</Option>
                            <Option value="s_wallet">S$ Wallet</Option>
                            <Option value="r_wallet">R$ Wallet</Option>
                          </Select>
                        </Form.Item>
                        <Form.Item
                          name="wallet_balance"
                          label=" "
                          colon={false}
                          style={{ fontWeight: 'bold' }}
                        >
                          Wallet Balance :RM78,122.00
                        </Form.Item>
                        <Form.Item
                          label="Withdraw Amount"
                          name="withdraw_amount"
                          extra="*Minimum Withdrawal Amount is 300."
                          rules={[
                            {
                              required: true,
                              message: 'Please input your withdraw amount!',
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name="withdrawal_charge"
                          label="Withdrawal Charge"
                          extra="*Withdrawal Charge is 5% per transaction"
                        >
                          <Input defaultValue="5.00" disabled={true} />
                        </Form.Item>
                        <Form.Item
                          label="Security Password"
                          name="security_pw"
                          rules={[
                            {
                              required: true,
                              message: 'Please input your password!',
                            },
                          ]}
                        >
                          <Input.Password />
                        </Form.Item>
                        <Form.Item
                          name="bank_name"
                          label="Bank Name"
                          rules={[
                            {
                              required: true,
                              message: 'Please select your bank!',
                            },
                          ]}
                        >
                          <Select defaultValue="0" style={{ width: 200 }}>
                            <option value="0">Please Select</option>
                            <option value="1">Affin Bank Berhad</option>
                            <option value="2">AFFIN INVESTMENT BANK BERHAD</option>
                            <option value="3">AFFIN ISLAMIC BANK BERHAD</option>
                            <option value="4">Al Rajhi Banking &amp; Investment Corporation</option>
                            <option value="5">Alliance Bank Berhad</option>
                            <option value="6">ALLIANCE INVESTMENT BANK BERHAD</option>
                            <option value="7">ALLIANCE INVESTMENT BANK BERHAD - SPI</option>
                            <option value="8">ALLIANCE ISLAMIC BANK BERHAD</option>
                            <option value="9">AMBANK Berhad</option>
                            <option value="10">AMBANK BERHAD-ISLAMIC</option>
                            <option value="11">AMINVESTMENT BANK BERHAD</option>
                            <option value="12">AMINVESTMENT BANK BERHAD - SPI </option>
                            <option value="13">AMISLAMIC BANK BERHAD</option>
                            <option value="14">ASEAMBANKERS MALAYSIA BHD-THIRD PARTY</option>
                            <option value="15">ASEAMBANKERS MSIA BHD (SPI ACC)</option>
                            <option value="16">ASIAN FINANCE BERHAD</option>
                            <option value="17">BANGKOK BANK BERHAD</option>
                            <option value="18">Bank Islam Malaysia</option>
                            <option value="19">Bank Muamalat (Malaysia)</option>
                            <option value="20">BANK NEGARA MALAYSIA</option>
                            <option value="21">Bank of America</option>
                            <option value="22">BANK OF CHINA (MALAYSIA) BERHAD</option>
                            <option value="23">Bank of Tokyo Mitsubishi (M) BHD</option>
                            <option value="24">BANK PEMBANGUNAN MALAYSIA BHD</option>
                            <option value="25">BANK PEMBANGUNAN MALAYSIA BHD-SPI</option>
                            <option value="26">BANK PERTANIAN MALAYSIA</option>
                            <option value="27">Bank Pertanian Malaysia</option>
                            <option value="28">BANK PERTANIAN MSIA BHD -SPI</option>
                            <option value="29">Bank Rakyat Malaysia</option>
                            <option value="30">BANK RAKYAT MAS(M) BHD-SPTF</option>
                            <option value="31">Bank Simpanan Nasional</option>
                            <option value="32">BANK SIMPANAN NASIONAL</option>
                            <option value="33">BANK SIMPANAN NASIONAL - ISLAMIC</option>
                            <option value="34">BNM : AKAUNTAN NEGARA - KHAS</option>
                            <option value="35">BNM : AKAUNTAN NEGARA - MMO</option>
                            <option value="36">BNM : AKAUNTAN NEGARA - UTAMA</option>
                            <option value="37">BNM : CIT - SAFE GUARD</option>
                            <option value="38">BNM : CIT - SECURIFORCE</option>
                            <option value="39">BNM : CIT - TUAH GUARD</option>
                            <option value="40">BNM : DANAMODAL BHD</option>
                            <option value="41">BNM : KUMP WANG AMANAH NEGARA</option>
                            <option value="42">BNM : TABUNG AMANAH SEACEN</option>
                            <option value="43">BNM- CIT-SECURICOR</option>
                            <option value="44">BNM:AKAUNTAN NEGARA-BAYARAN</option>
                            <option value="45">BNM:AKAUNTAN NEGARA-KAWALAN BAYARAN</option>
                            <option value="46">BNM:AKAUNTAN NEGARA-KAWALAN TERIMAAN</option>
                            <option value="47">BNM:AKAUNTAN NEGARA-TERIMAAN</option>
                            <option value="48">BNM:BON KORPORAT FAEDAH-DIVIDEN</option>
                            <option value="49">BNM:BON KORPORAT TEBUSAN</option>
                            <option value="50">BNM:EPF-MMO</option>
                            <option value="51">BNM:JABATAN KASTAM-TERIMAAN</option>
                            <option value="52">BNM:KUMP WANG AMANAH PENCEN</option>
                            <option value="53">BNM:OTHER BNM TRX-BILLING CHARGES</option>
                            <option value="54">BNM:OTHER JABATAN AKAUN TRANSACTIONS</option>
                            <option value="55">BNM:PERBADANAN INSURANS DEPOSIT MSIA</option>
                            <option value="56">BNM:PERBADANAN INSURANS DEPOSIT MSIA</option>
                            <option value="57">BNM:SETTLEMENT OF FOREX</option>
                            <option value="58">BNM:SETTLEMENT OF MONEY MARKET OPER</option>
                            <option value="59">BNP Paribas Malaysia</option>
                            <option value="60">BNP PARIBAS(M) BHD(ISLAMIC BANKING WINDO</option>
                            <option value="61">CAGAMAS BERHAD</option>
                            <option value="62">CAGAMAS BERHAD - SPTF</option>
                            <option value="63">CIMB Bank Berhad</option>
                            <option value="64">CIMB INVESTMENT BANK BERHAD</option>
                            <option value="65">CIMB INVESTMENT BERHAD - SPI</option>
                            <option value="66">CIMB ISLAMIC BANK BERHAD</option>
                            <option value="67">CITIBANK Berhad</option>
                            <option value="68">CITIBANK BERHAD - SPI</option>
                            <option value="69">DEUTSCHE BANK</option>
                            <option value="70">Deutsche Bank (M) BHD</option>
                            <option value="71">ECM LIBRA AVENUE SECURITIES SDN BHD</option>
                            <option value="72">EUROCLEAR</option>
                            <option value="73">EXPORT IMPORT BANK BERHAD</option>
                            <option value="74">EXPORT IMPORT BANK BERHAD-SPI</option>
                            <option value="75">Hong Leong Bank</option>
                            <option value="76">HONG LEONG INVESTMENT BANK</option>
                            <option value="77">HONG LEONG ISLAMIC BANK BERHAD</option>
                            <option value="78">HSBC (M) Berhad</option>
                            <option value="79">HSBC AMANAH MALAYSIA BERHAD</option>
                            <option value="80">HSBC BANK MALAYSIA BERHAD - SPI</option>
                            <option value="81">HWANG-DBS INVESTMENT BANK BERHAD</option>
                            <option value="82">IND &amp; COM Bank of China</option>
                            <option value="83">INDIA INTERNATIONAL BANK(MALAYSIA) BERHAD</option>
                            <option value="84">J.P. Morgan Chase</option>
                            <option value="85">KAF INVESTMENT BANK BERHAD</option>
                            <option value="86">KAF INVESTMENT BANK BERHAD - SPI</option>
                            <option value="87">KENANGA INVESTMENT BANK BERHAD</option>
                            <option value="88">KUMPULAN WANG PERSARAAN</option>
                            <option value="89">KUMPULAN WANG SIMPANAN PEKERJA</option>
                            <option value="90">Kuwait Finance House</option>
                            <option value="91">MALAYAN BANKING BERHAD</option>
                            <option value="92">MALAYSIAN ELECTRONIC PAYMENT SYSTEM SDN.</option>
                            <option value="93">MAYBANK ISLAMIC BERHAD</option>
                            <option value="94">MIDF AMANAH INVESTMENT BANK BERHAD</option>
                            <option value="95">MIDF AMANAH INVESTMENT BANK BERHAD - SPI</option>
                            <option value="96">MIMB INVESTMENT BANK BERHAD</option>
                            <option value="97">MIZUHO CORPORATE BANK (MALAYSIA) BHD</option>
                            <option value="98">NATIONAL BANK OF ABU DHABI</option>
                            <option value="99">OCBC AL-AMIN BANK BERHAD</option>
                            <option value="100">OCBC Bank (MSIA) BHD</option>
                            <option value="101">OSK INVESTMENT BANK BERHAD</option>
                            <option value="102">OSK INVESTMENT BANK BERHAD -SPI</option>
                            <option value="103">Public Bank</option>
                            <option value="104">PUBLIC INVESTMENT BANK BERHAD</option>
                            <option value="105">PUBLIC ISLAMIC BANK BERHAD</option>
                            <option value="106">RHB Bank</option>
                            <option value="107">RHB BANK - ISLAMIC</option>
                            <option value="108">RHB INVESTMENT BANK BERHAD </option>
                            <option value="109">SME BANK</option>
                            <option value="110">SME BANK-SPI</option>
                            <option value="111">Standard Chartered</option>
                            <option value="112">STANDARD CHARTERED SAADIQ BERHAD</option>
                            <option value="113">Sumitomo Mitsui Bank</option>
                            <option value="114">THE BANK OF NOVA SCOTIA BERHAD</option>
                            <option value="115">United Overseas Bank</option>
                            <option value="346">PT. BANK PEMBANGUNAN DAERAH BALI</option>
                            <option value="347">ABN AMRO BANK NV</option>
                            <option value="348">PT. BANK AGRO NIAGA</option>
                            <option value="349">PT. BANK BARCLAYS INDONESIA</option>
                            <option value="350">PT. BANK ANTAR DAERAH</option>
                            <option value="351">PT. ANZ PANIN BANK</option>
                            <option value="352">PT. BANK PANIN SYARIAH</option>
                            <option value="353">PT. BANK ARTHA GRAHA INTERNASIONAL&nbsp;TBK</option>
                            <option value="354">PT. BANK ARTOS INDONESIA</option>
                            <option value="355">PT. BANK KESAWAN</option>
                            <option value="356">PT. BANK BUMI ARTA</option>
                            <option value="357">PT. BANK PERMATA TBK</option>
                            <option value="358">PT. BANK UOB BUANA</option>
                            <option value="359">PT. BANK UMUM KOPERASI INDONESIA (BUKOPIN)</option>
                            <option value="360">PT. BANK DANAMON INDONESIA INDONESIA Tbk</option>
                            <option value="361">PT. BANK DIPO INTERNASIONAL</option>
                            <option value="362">PT. BANK DKI</option>
                            <option value="363">PT. BANK COMMONWEALTH</option>
                            <option value="364">BANK OF CHINA</option>
                            <option value="365">THE BANGKOK BANK PCL</option>
                            <option value="366">PT. BANK MANDIRI (Persero) Tbk</option>
                            <option value="367">PT. BANK CIMB NIAGA TBK</option>
                            <option value="368">PT. BANK NEGARA INDONESIA 1946 (Persero) Tbk</option>
                            <option value="369">PT. BANK BNP PARIBAS INDONESIA</option>
                            <option value="370">BANK OF AMERICA NA</option>
                            <option value="371">THE BANK OF TOKYO MITSUBISHI UFJ LTD</option>
                            <option value="372">PT. BANK RESONA PERDANIA</option>
                            <option value="373">PT.BANK RAKYAT INDONESIA (Persero) Tbk</option>
                            <option value="374">PT. BANK HIMPUNAN SAUDARA 1906</option>
                            <option value="375">PT. BANK SYARIAH MANDIRI Tbk</option>
                            <option value="376">PT. BANK TABUNGAN NEGARA (PERSERO)</option>
                            <option value="377">PT. BANK ICB BUMIPUTERA TBK</option>
                            <option value="378">PT. BANK BISNIS INTERNATIONAL</option>
                            <option value="379">PT. BANK SYARIAH MEGA INDONESIA</option>
                            <option value="380">PT. BANK CENTRAL ASIA Tbk</option>
                            <option value="381">JPMORGAN CHASE BANK&nbsp;NA</option>
                            <option value="382">PT. BANK MUTIARA&nbsp;TBK</option>
                            <option value="383">CITIBANK NA</option>
                            <option value="384">PT. CENTRATAMA NASIONAL BANK</option>
                            <option value="385">PT. BANK CAPITAL INDONESIA</option>
                            <option value="386">PT. BANK CHINATRUST INDONESIA</option>
                            <option value="387">PT. BANK DBS INDONESIA</option>
                            <option value="388">DEUTSCHE BANK AG</option>
                            <option value="389">PT. BANK SYARIAH BRI</option>
                            <option value="390">PT. BANK EKONOMI RAHARJA</option>
                            <option value="391">PT. BANK EKSKUTIF INTERNASIONAL</option>
                            <option value="392">PT. BANK FAMA INTERNATIONAL</option>
                            <option value="393">PT. BANK AGRIS</option>
                            <option value="394">PT. BANK GANESHA</option>
                            <option value="395">PT. BANK HANA</option>
                            <option value="396">PT. BANK HARDA INTERNASIONAL</option>
                            <option value="397">THE HONGKONG AND SHANGHAI BC</option>
                            <option value="398">PT. BANK WOORI INDONESIA</option>
                            <option value="399">PT. BANK INTERNATIONAL INDONESIA Tbk</option>
                            <option value="400">PT. BANK ICBC INDONESIA</option>
                            <option value="401">BANK INDONESIA</option>
                            <option value="402">PT. BANK INA PERDANA</option>
                            <option value="403">PT. BANK INDEX SELINDO</option>
                            <option value="404">PT. BANK JASA JAKARTA</option>
                            <option value="405">PT. BANK KEB INDONESIA</option>
                            <option value="406">PT. BANK KESEJAHTERAAN EKONOMI</option>
                            <option value="407">PT. BANK NATIONALNOBU</option>
                            <option value="408">PT. BANK LIMAN INTERNATIONAL</option>
                            <option value="409">PT.ANGLOMAS INTERNATIONAL BANK</option>
                            <option value="410">PT. BANK MULTI ARTA SENTOSA</option>
                            <option value="411">PT. BANK MASPION INDONESIA</option>
                            <option value="412">PT. BANK MAYAPADA</option>
                            <option value="413">PT. BANK MAYBANK INDOCORP</option>
                            <option value="414">PT. BANK WINDU KENTJANA INTERNASIONAL TBK</option>
                            <option value="415">PT. BANK MESTIKA DHARMA</option>
                            <option value="416">PT. BANK METRO EKSPRESS</option>
                            <option value="417">PT. BANK MEGA Tbk</option>
                            <option value="418">PT. BANK MITRANIAGA</option>
                            <option value="419">PT. BANK MIZUHO INDONESIA</option>
                            <option value="420">PT. BANK MUAMALAT INDONESIA</option>
                            <option value="421">PT. BANK OCBC NILAI INTI SARI PENJIMPAN Tbk</option>
                            <option value="422">PT. BANK NUSANTARA PARAHYANGAN</option>
                            <option value="423">PT. BANK OCBC INDONESIA</option>
                            <option value="424">PT. BPD ISTIMEWA ACEH</option>
                            <option value="425">PT. BPD BENGKULU</option>
                            <option value="426">PT.BANK PEMBANGUNAN DAERAH PAPUA</option>
                            <option value="427">PT. BANK PEMBANGUNAN DAERAH JABAR DAN BANTEN</option>
                            <option value="428">PT. BANK PEMBANGUNAN DAERAH JAWA TENGAH</option>
                            <option value="429">PT. BANK PEMBANGUNAN JAWA TIMUR</option>
                            <option value="430">PT.BANK PEMBANGUNAN DAERAH JAMBI</option>
                            <option value="431">PT.BANK PEMBANGUNAN DAERAH KALBAR</option>
                            <option value="432">PT. BPD KALIMANTAN TENGAH</option>
                            <option value="433">PT BANK PEMBANGUNAN DAERAH KALIMANTAN SELATAN</option>
                            <option value="434">PT.BANK PEMBANGUNAN DAERAH KALTIM</option>
                            <option value="435">PT.BANK PEMBANGUNAN DAERAH LAMPUNG</option>
                            <option value="436">PT.BANK PEMBANGUNAN DAERAH MALUKU</option>
                            <option value="437">PT. BANK PEMBANGUNAN DAERAH NTB</option>
                            <option value="438">PT.BANK PEMBANGUNAN DAERAH NTT</option>
                            <option value="439">PT.BANK PEMBANGUNAN DAERAH RIAU</option>
                            <option value="440">PT. BANK PEMBANGUNAN DAERAH SUMATERA BARAT</option>
                            <option value="441">PT. BPD SUMSEL DAN BABEL</option>
                            <option value="442">PT. BANK PEMBANGUNAN DAERAH SUMUT</option>
                            <option value="443">PT. BPD SULAWESI TENGAH</option>
                            <option value="444">PT. BPD SULAWESI TENGGARA</option>
                            <option value="445">PT.BANK PEMBANGUNAN DAERAH SULSEL</option>
                            <option value="446">PT. BANK PEMBANGUNAN SULAWESI UTARA</option>
                            <option value="447">PT. PANIN BANK Tbk</option>
                            <option value="448">PT.PRIMA MASTER BANK</option>
                            <option value="449">PT. BANK SAHABAT PURBA DANARTA</option>
                            <option value="450">PT. BANK RABOBANK INTERNATIONAL INDONESIA</option>
                            <option value="451">PT. BANK ANDARA</option>
                            <option value="452">PT. BANK ROYAL INDONESIA</option>
                            <option value="453">PT. BANK SBI INDONESIA</option>
                            <option value="454">PT. BANK SINARMAS</option>
                            <option value="455">STANDARD CHARTERED BANK</option>
                            <option value="456">PT. BANK SYARIAH BUKOPIN</option>
                            <option value="457">PT. BANK SINAR HARAPAN BALI</option>
                            <option value="458">PT. BANK SUMITOMO MITSUI INDONESIA</option>
                            <option value="459">PT. BANK VICTORIA SYARIAH</option>
                            <option value="460">PT. BANK SWADESI</option>
                            <option value="461">PT. BANK PERMATA TBK</option>
                            <option value="462">PT. BANK DANAMON INDONESIA INDONESIA Tbk</option>
                            <option value="463">PT. BANK INTERNASIONAL INDONESIA Tbk</option>
                            <option value="464">PT. BANK TABUNGAN NEGARA (PERSERO) SYARIAH</option>
                            <option value="465">HSBC SYARIAH</option>
                            <option value="466">PT. BANK JABAR BANTEN SYARIAH</option>
                            <option value="467">PT. BANK CIMB NIAGA TBK</option>
                            <option value="468">PT BANK BNI SYARIAH</option>
                            <option value="469">PT. BANK OCBC NILAI INTI SARI PENJIMPAN Tbk</option>
                            <option value="470">PT. BANK SINARMAS</option>
                            <option value="471">PT.BTPN</option>
                            <option value="472">PT.BANK PEMBANGUNAN DAERAH SULSEL</option>
                            <option value="473">PT. BANK TABUNGAN PENSIUNAN NASIONAL</option>
                            <option value="474">PT. BANK BCA SYARIAH</option>
                            <option value="475">PT. BANK VICTORIA INTERNATIONAL</option>
                            <option value="476">PT. BANK MAYORA INDONESIA</option>
                            <option value="477">PT. BANK YUDHA BHAKTI</option>
                            <option value="478">DBS BANK</option>
                            <option value="479">UOB SINGAPORE</option>
                            <option value="480">CITIBANK SINGAPORE</option>
                            <option value="481">MAYBANK SINGAPORE</option>
                            <option value="482">STANDARD CHARTERD SINGAPORE</option>
                            <option value="483">SBI SINGAPORE</option>
                            <option value="484">BANGKOK BANK SINGAPORE</option>
                            <option value="485">CIMB BANK SINGAPORE</option>
                            <option value="486">ICICI BANK SINGAPORE</option>
                            <option value="487">RHB BANK SINGAPORE</option>
                            <option value="488">BANK OF INDIA SINGAPORE</option>
                            <option value="489">INDIAN BANK</option>
                            <option value="490">INDIAN OVERSEAS BANK SINGAPORE</option>
                            <option value="491">ANZ SINGAPORE</option>
                            <option value="492">J.P. MORGAN SINGAPORE</option>
                            <option value="493">HSBC BANK SINGAPORE</option>
                            <option value="494">HONG LEONG FINANCE</option>
                            <option value="495">BNP PARIBAS SINGAPORE</option>
                            <option value="496">OCBC BANK SINGAPORE</option>
                            <option value="497">OCBC BANK SINGAPORE</option>
                            <option value="498">BANK OF SINGAPORE</option>
                            <option value="499">ISLAMIC BANK OF ASIA</option>
                            <option value="500">BANK OF AMERICA</option>
                            <option value="501">BANK OF CHINA</option>
                            <option value="502">BANK OF EAST ASIA</option>
                            <option value="503">BANK OF TOKYO-MITSUBISHI UFJ</option>
                            <option value="504">CALYON</option>
                            <option value="505">THE HONGKONG AND SHANGHAI BANKING CORPORATION</option>
                            <option value="506">SUMITOMO MITSUI BANKING CORPORATION</option>
                            <option value="507">UCO BANK</option>
                            <option value="508">POSB Bank</option>
                          </Select>
                        </Form.Item>
                        <Form.Item
                          label="Remark"
                          name="transfer_remark"
                        >
                          <TextArea rows={4} />
                        </Form.Item>
                        <Form.Item
                          wrapperCol={{
                            offset: 10,
                            span: 12,
                          }}
                        >
                          <Button type="primary" htmlType="submit">
                            Submit
                          </Button>
                          <Button htmlType="button" onClick={onReset} style={{ marginLeft: 8 }}>
                            Reset
                          </Button>
                        </Form.Item>
                      </Form>
                     
                    </div> : null}
                    </ContentWrapper>
                </Box>
                </LayoutContent>
                
              </TabPane>

            </Tabs>
          </Col>
        </Row>
      </ContentWrapper>
    </LayoutWrapper>
  );
}

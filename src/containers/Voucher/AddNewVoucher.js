import React, { useState } from "react";
import Wrapper, { ContentWrapper } from "./Voucher.styles";
import LayoutContent from "@iso/components/utility/layoutContent";
import SubHeader from "@iso/components/utility/subHeader";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import { Form, Input, DatePicker, Row, Col, Table, Pagination, Select, Checkbox, Divider, Button, PageHeader, Breadcrumb } from 'antd';
import IntlMessages from "@iso/components/utility/intlMessages";
import product2 from "@iso/assets/images/ProductImage/p2-rec.png";
import Editor from '@iso/components/uielements/editor';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import Uppy from '@uppy/core';
import Tus from '@uppy/tus';
import GoogleDrive from '@uppy/google-drive';
import Dropbox from '@uppy/dropbox';
import Instagram from '@uppy/instagram';
// import Webcam from '@uppy/webcam'
import { Dashboard } from '@uppy/react';

function onChange(date, dateString) {

    console.log(date, dateString);
}
const { TextArea } = Input;
const { Option } = Select;
const AddNewVoucher = () => {
    const [btnadd, setbtnadd] = React.useState(false);
    const [showCashValue, setshowCashValue] = React.useState(false);
    const [showPurchaseTable, setshowPurchaseTable] = React.useState(false);

    const columns = [
        {
            title: 'No.',
            width: '3%',
            dataIndex: 'list_num',
            key: 'list_num',
        },
        {
            title: 'Product Image',
            width: '5%',
            dataIndex: 'Imagem',
            key: 'Imagem',
        },
        {
            title: 'Product Name',
            dataIndex: 'p_name',
            key: 'p_name',
            width: '23%',
        },
        {
            title: 'Status',
            dataIndex: 'inv_stat',
            key: 'inv_stat',
            width: '20%',
        },
 
        // {
        //     title: 'Action',
        //     key: 'operation',

        //     width: 100,
        //     render: () => <Checkbox
        //         rowSelection={{
        //             type: selectionType,
        //             ...rowSelection,
        //         }}
        //         value="table_check"
        //         style={{
        //             lineHeight: '32px',
        //         }}
        //     >
        //     </Checkbox>,
        // },
    ];

    const data = [
        {
            key: '1',
            list_num: '1',
            Imagem: <img style={{ width: '90px', borderRadius: '8px' }} src={product2} />,
            p_name: 'Rocketfish - Blutooth Music Receiver Black, 0.991 models',
            amount: 'MYR 250.00',
            inv_stat: 'Active',
            p_Remark: 'Manufactured by AXXX Company',

        },
        {
            key: '2',
            list_num: '2',
            Imagem: <img style={{ width: '90px', borderRadius: '8px' }} src={product2} />,
            p_name: 'Rocketfish - Blutooth Music Receiver Black, 0.991 models',
            amount: 'MYR 250.00',
            inv_stat: 'Active',
            p_Remark: 'Manufactured by AXXX Company',

        },
        {
            key: '3',
            list_num: '3',
            Imagem: <img style={{ width: '90px', borderRadius: '8px' }} src={product2} />,
            p_name: 'Rocketfish - Blutooth Music Receiver Black, 0.991 models',
            amount: 'MYR 250.00',
            inv_stat: 'Active',
            p_Remark: 'Manufactured by AXXX Company',

        },
    ];
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record) => ({
            disabled: record.name === 'Disabled User',
            // Column configuration not to be checked
            name: record.name,
        }),
    };
    const onFinish = (values) => {
        setbtnadd(true)
        setTimeout(
            () => setbtnadd(false),
            3000
        );
        console.log('Received values of form: ', values);
    };
    const uppy = Uppy({
        debug: true,
        autoProceed: false,
        restrictions: {
            maxFileSize: 1000000,
            maxNumberOfFiles: 3,
            minNumberOfFiles: 2,
            allowedFileTypes: ['image/*', 'video/*'],
        },
    });

    uppy.use(GoogleDrive, {
        id: 'GoogleDrive',
        companionUrl: 'https://companion.uppy.io',
    });
    uppy.use(Dropbox, { companionUrl: 'https://companion.uppy.io' });
    uppy.use(Instagram, { companionUrl: 'https://companion.uppy.io' });
    // .use(Webcam)
    uppy.use(Tus, { endpoint: 'https://master.tus.io/files/' });

    uppy.on('complete', result => {
        console.log('successful files:', result.successful);
        console.log('failed files:', result.failed);
    });

    function onSelectVoucher(value) {
        if (value === "2") {
            setshowCashValue(true)
        }
        else {
            setshowCashValue(false)
        }
    }
    function onRepeatPurchase(value) {
        if (value === "repeat-purchase") {
            setshowPurchaseTable(true)
        }
        else {
            setshowPurchaseTable(false)
        }
    }
    return (
        <div style={{ width: '100%', padding: "40px 20px" }}>
            <PageHeader
                title="Add New Voucher"
                className="site-page-header"
                onBack={() => window.history.back()}
                //subTitle="This is a subtitle"
                //tags={<Tag color="blue">Running</Tag>}
                extra={[
                    <Breadcrumb >
                        <Breadcrumb.Item className="firstbreadcrumb">Voucher</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="/dashboard/productlist">Voucher List</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {/* <a href="/dashboard/announcement"></a> */}
                            Add New Voucher
                        </Breadcrumb.Item>
                    </Breadcrumb>
                ]}
            />

            <LayoutWrapper>
                <LayoutContent style={{ width: '100%', margin: '0 auto' }}>
                    <Form
                        colon={false}
                        layout='vertical'
                        name='add_voucher'
                        size='default'
                        wrapperCol={24}
                        onFinish={onFinish}

                    >
                        <Row gutter={[16, 16]} justify="center">
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.Item
                                    name='voucher_code'
                                    label='Voucher Code'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input Voucher Code',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.Item
                                    name='usage_limit'
                                    label='Usage Limit'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input Usage Limit',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.Item
                                    name='usage_per_user'
                                    label='Usage Per User'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input Usage Per User',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.Item
                                    name="voucher_type"
                                    label="Voucher Type"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select the Voucher Type',
                                        },
                                    ]}
                                >
                                    <Select defaultValue="Discount" onChange={onSelectVoucher}>
                                        <Option value="1">Discount</Option>
                                        <Option value="2">Cash</Option>
                                    </Select>
                                </Form.Item>
                            </Col>{showCashValue
                                ?
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Form.Item
                                        name="cashValue"
                                        label="Cash Value"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select the Cash Value',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Cash Value" />
                                    </Form.Item>
                                </Col>
                                : null}

                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.Item
                                    name='discount_percent'
                                    label='Discount Percent'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input Discount Percent',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.Item
                                    name="for_sales"
                                    label="For Sales"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please select the For Sales',
                                        },
                                    ]}
                                >
                                    <Select defaultValue="registration" onChange={onRepeatPurchase}>
                                        <Option value="registration">Registration</Option>
                                        <Option value="repeat-purchase">Repeat Purchase</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.Item
                                    name="publish_date"
                                    label="Publish Date"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <DatePicker style={{ width: '100%' }} onChange={onChange} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                <Form.Item

                                    name="expired_date"
                                    label="Expired Date"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <DatePicker style={{ width: '100%' }} onChange={onChange} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={24}>
                                <Form.Item
                                    name='description'
                                    label='Description'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input Voucher Description',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} xl={24}>
                                <Form.Item
                                    name="ranking"
                                    label="Ranking"
                                >
                                    <Checkbox.Group style={{ width: '100%' }}>
                                        <Row gutter={[10, 10]} justify="start" >
                                            <Col span={6}>
                                                <Checkbox
                                                    value="master_dealer"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Master Dealer
                                                </Checkbox>
                                            </Col>
                                            <Col span={6}>
                                                <Checkbox
                                                    value="dealer"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}

                                                >
                                                    Dealer
                                                </Checkbox>
                                            </Col>
                                            <Col span={6}>
                                                <Checkbox
                                                    value="cutomer"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Customer
                                                </Checkbox>
                                            </Col>
                                            <Col span={6}>
                                                <Checkbox
                                                    value="basic_member"
                                                    style={{
                                                        lineHeight: '32px',
                                                    }}
                                                >
                                                    Basic Member
                                                </Checkbox>
                                            </Col>

                                            {showPurchaseTable
                                                ?
                                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                                    <br></br>
                                                    <ContentWrapper >
                                                        <Table rowSelection={{
                                                            type: "checkbox",
                                                            className:"test",
                                                            ...rowSelection,
                                                        }}
                                                            pagination={false}
                                                            className='selectStyle'
                                                            columns={columns}
                                                            dataSource={data} />
                                                        <Row style={{ marginTop: '4%' }} justify='end'>
                                                            <Pagination
                                                                total={85}

                                                                showTotal={total => `Total ${total} items`}
                                                            /></Row>
                                                    </ContentWrapper>
                                                </Col>
                                                : null}
                                        </Row>
                                    </Checkbox.Group>
                                </Form.Item>
                                <Form.Item wrapperCol={{ offset: 11, span: 24 }}>
                                    <Button loading={btnadd} type="primary" htmlType="submit" style={{ width: 100, height: 30, fontWeight: '500' }}>
                                        Add
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </LayoutContent>
            </LayoutWrapper>
        </div>

    );
};
export default AddNewVoucher;

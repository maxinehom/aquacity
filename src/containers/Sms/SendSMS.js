import Editor from '@iso/components/uielements/editor';
import LayoutContent from "@iso/components/utility/layoutContent";
import TransferTable from "./TransferTable"
import IntlMessages from "@iso/components/utility/intlMessages";
import SubHeader from "@iso/components/utility/subHeader";
import Uppy from '@uppy/core';
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import Dropbox from '@uppy/dropbox';
import GoogleDrive from '@uppy/google-drive';
import Instagram from '@uppy/instagram';
import { Dashboard } from '@uppy/react';
import WidgetsWrapper, { ContentWrapper } from "./sms.styles";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import Tus from '@uppy/tus';
import { Button, Col, DatePicker, Divider, Form, Input, Row, Select, PageHeader, Breadcrumb, Table, Pagination, Checkbox, Transfer } from 'antd';
import React, { useState } from "react";

function onChange(date, dateString) {

    console.log(date, dateString);
}

const { TextArea } = Input;
const { Option } = Select;

const SendSMS = () => {

    const [btnadd, setbtnadd] = React.useState(false);
    const [lengthdata, setlengthdata] = React.useState(0);
    const onFinish = (values) => {
        setbtnadd(true)
        setTimeout(
            () => setbtnadd(false),
            3000
        );
        console.log('Received values of form: ', values);
    };
    const childdata = (value) => {
        setlengthdata(value);
        console.log(value);
    }
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
    const rowSelection1 = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
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
    // const columns = [
    //     {
    //         title: 'No.',
    //         width: 50,
    //         dataIndex: 'list_num',
    //         key: 'list_num'
    //     },
    //     {
    //         title: 'Distributor ID',
    //         dataIndex: 'distributorID',
    //         key: 'list_num',

    //     },
    //     {
    //         title: 'Name',
    //         dataIndex: 'fullname',
    //         key: 'list_num',
    //     },
    //     {
    //         title: 'Mobile No',
    //         dataIndex: 'mobile',
    //         key: 'list_num',
    //     },
    //     {
    //         title: 'Gender',
    //         dataIndex: 'gender',
    //         key: 'list_num',
    //     },
    //     {
    //         title: 'Country',
    //         dataIndex: 'country',
    //         key: 'list_num',
    //     },
    //     {
    //         title: 'State',
    //         dataIndex: 'state',
    //         key: 'list_num',
    //     },
    //     {
    //         title: 'Ranking',
    //         dataIndex: 'ranking',
    //         key: 'list_num',
    //     },
    //     {
    //         title: 'Join Date',
    //         dataIndex: 'joindate',
    //         key: 'list_num',
    //     },
    //     {
    //         title: 'Status',
    //         dataIndex: 'status',
    //         key: 'list_num',
    //     },
    // ];
    const data = [
        {
            key: '1',
            list_num: '1',
            // Imagem: <img style={{ width: '90px', borderRadius: '8px' }} src={product2} />,
            d_id: '016189',
            d_name: 'ACHONG',
            mobile_no: '60124203733',
            country: 'Malaysia',
            state: 'Kedah',
            ranking: 'Dealer',
            join_date: '26 Feb 2022',
            status: 'InActive',

        },
        {
            key: '2',
            list_num: '2',
            // Imagem: <img style={{ width: '90px', borderRadius: '8px' }} src={product2} />,
            d_id: '032476',
            d_name: 'CHONG AH MOY',
            mobile_no: '60166989131',
            country: 'Malaysia',
            state: 'Selangor',
            ranking: 'Master Dealer',
            join_date: '27 Nov 2021',
            status: 'Active',

        },
        {
            key: '3',
            list_num: '3',
            // Imagem: <img style={{ width: '90px', borderRadius: '8px' }} src={product2} />,
            d_id: '017377',
            d_name: 'GRACE TAN SHU TING',
            mobile_no: '60192607367',
            country: 'Malaysia',
            state: 'Malacca',
            ranking: 'Customer',
            join_date: '30 Sep 2021',
            status: 'Active',

        },
    ];
    const columns = [
        {
            title: 'No.',
            width: '3%',
            dataIndex: 'list_num',
            key: 'list_num',
        },
        // {
        //     title: 'Product Image',
        //     width: '5%',
        //     dataIndex: 'Imagem',
        //     key: 'Imagem',
        // },
        {
            title: 'Distributor ID',
            dataIndex: 'd_id',
            key: 'd_id',
            width: '15%',
        },
        {
            title: 'Name',
            dataIndex: 'd_name',
            key: 'd_name',
            width: '20%',
        },
        {
            title: 'Mobile No',
            dataIndex: 'mobile_no',
            key: 'mobile_no',
            width: '15%',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
            width: '10%',
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
            width: '10%',
        },
        {
            title: 'Ranking',
            dataIndex: 'ranking',
            key: 'ranking',
            width: '10%',
        },
        {
            title: 'Join Date',
            dataIndex: 'join_date',
            key: 'join_date',
            width: '40%',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: '15%',
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
    const columns2 = [
        {
            title: 'No.',
            width: '3%',
            dataIndex: 'list_num',
            key: 'list_num',
        },
        // {
        //     title: 'Product Image',
        //     width: '5%',
        //     dataIndex: 'Imagem',
        //     key: 'Imagem',
        // },
        {
            title: 'Distributor ID',
            dataIndex: 'd_id',
            key: 'd_id',
            width: '15%',
        },
        {
            title: 'Name',
            dataIndex: 'd_name',
            key: 'd_name',
            width: '20%',
        },
        {
            title: 'Mobile No',
            dataIndex: 'mobile_no',
            key: 'mobile_no',
            width: '15%',
        },
        {
            title: 'Country',
            dataIndex: 'country',
            key: 'country',
            width: '10%',
        },
        {
            title: 'State',
            dataIndex: 'state',
            key: 'state',
            width: '10%',
        },
        {
            title: 'Ranking',
            dataIndex: 'ranking',
            key: 'ranking',
            width: '10%',
        },
        {
            title: 'Join Date',
            dataIndex: 'join_date',
            key: 'join_date',
            width: '40%',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: '15%',
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
    return (
        <div style={{ width: '100%', padding: "40px 20px" }}>
            <PageHeader
                title="Send SMS"
                className="site-page-header"
                onBack={() => window.history.back()}
                //subTitle="This is a subtitle"
                //tags={<Tag color="blue">Running</Tag>}
                extra={[
                    <Breadcrumb >
                        <Breadcrumb.Item className="firstbreadcrumb">SMS</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="/dashboard/announcement">SMS Statement</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {/* <a href="/dashboard/announcement"></a> */}
                            Send SMS
                        </Breadcrumb.Item>
                    </Breadcrumb>
                ]}>
            </PageHeader>
            <LayoutWrapper>
                <LayoutContent style={{ width: '100%', margin: '0 auto' }}>
                    <ContentWrapper>
                        <Form
                            colon={false}
                            layout='vertical'
                            name='new_announcement'
                            size='default'
                            wrapperCol={24}
                            onFinish={onFinish}

                        >
                            <Row gutter={[16, 16]} justify="center">
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Form.Item
                                        name="sms_content"
                                        label="SMS Content"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input SMS Content',
                                            },
                                        ]}
                                    >
                                        <TextArea showCount rows={5} maxLength={200} />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Form.Item

                                        name='total_recipient'
                                        label='Total Recipient(s)'
                                        rules={[
                                            {

                                                message: 'Please input title!',
                                            },
                                        ]}
                                        disabled={true}
                                    >
                                        <Input disabled={true} placeholder={lengthdata}></Input>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <Form.Item

                                        name='total_sms_balance'
                                        label='Total SMS Balance'
                                        rules={[
                                            {

                                                message: 'Please input title!',
                                            },
                                        ]}
                                        disabled={true}
                                    >
                                        <Input disabled={true} placeholder="0"></Input>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[16, 16]} justify="center">

                                <Form.Item wrapperCol={{ span: 24 }}>
                                    <Button loading={btnadd} type="primary" htmlType="submit" style={{ width: 100, height: 30, fontWeight: '500' }}>

                                        Send
                                    </Button>
                                </Form.Item>
                            </Row> <Divider></Divider>
                            <h2>Select Recipient</h2>
                            <TransferTable datalength = {childdata}/>
                            
                        </Form>

                    </ContentWrapper>

                </LayoutContent>
            </LayoutWrapper>
        </div>
    );
};
export default SendSMS;

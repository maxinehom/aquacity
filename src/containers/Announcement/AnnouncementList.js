import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  FilterOutlined,
  RedoOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import LayoutContent from "@iso/components/utility/layoutContent";
import SubHeader from "@iso/components/utility/subHeader";
import {
  Button,
  Col,
  DatePicker,
  Input,
  Modal,
  Pagination,
  Row,
  Select,
  Space,
  Table,
  Breadcrumb,
  PageHeader,
} from "antd";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import IntlMessages from "@iso/components/utility/intlMessages";
import WidgetsWrapper, { ContentWrapper } from "./Announcement.styles";
import ProductMainImage from "@iso/assets/images/ProductImage/p1-sq.png";
import ReactQuill from "react-quill";
import { useHistory } from "react-router-dom";
const { RangePicker } = DatePicker;
const { Search } = Input;
const onSearch = (value) => console.log(value);
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}
let num = 0;

const ViewAnnouncement = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalText, setModalText] = React.useState([]);
  const history = useHistory();

  const [showFilter, setshowFilter] = React.useState(false);
  const handleFilter = () => {
    if (showFilter === false) {
      setshowFilter(true);
    } else if (showFilter === true) {
      setshowFilter(false);
    }
  };

  const [AnnouncementList, setAnnouncementList] = useState([]);
  React.useEffect(() => {
    let AnnList_config = {
      method: "POST",
      url: process.env.REACT_APP_API_KEY + "/announcement/GetAnnouncement/",
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios(AnnList_config)
      .then(function (response) {
        console.log(response.data.result);
        if (response.data.code) setAnnouncementList(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",
      render: (item, row, index) => <div>{index + 1}</div>,
    },
    {
      title: "Title",
      dataIndex: "annTitle",
      key: "annTitle",
    },
    {
      title: "Date",
      dataIndex: "displayDate",
      key: "displayDate",
    },
    {
      title: "Action",
      key: "operation",

      render: (text, row) => (
        <Button onClick={showModal(row.announcementID)}>View</Button>
      ),
    },
  ];

  const showModal = (value) => () => {
    var annDetail = {
      value: value,
    };
    let detail_config = {
      method: "POST",
      url:
        process.env.REACT_APP_API_KEY + "/announcement/GetAnnouncementDetail",
      headers: {
        "Content-Type": "application/json",
      },
      data: annDetail,
    };
    axios(detail_config)
      .then(function (response) {
        //console.log(JSON.stringify(response.data.code))
        if (response.data.code) setModalText(response.data.result);
      })
      .catch(function (error) {
        console.log(error);
      });
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div style={{ width: "100%", padding: "40px 20px" }}>
      <PageHeader
        title="Announcement List"
        className="site-page-header"
        //subTitle="This is a subtitle"
        //tags={<Tag color="blue">Running</Tag>}
        extra={[
          <Breadcrumb>
            <Breadcrumb.Item className="firstbreadcrumb">
              Announcement
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {/* <a href="/dashboard/announcement"></a> */}
              Announcement List
            </Breadcrumb.Item>
          </Breadcrumb>,
        ]}
      ></PageHeader>
      <LayoutWrapper>
        <LayoutContent>
          <Row style={{ marginBottom: "2%" }} justify="end">
            {/*<Col>
            <Button style={{ height: '40px', width: '40px' }} icon={< RedoOutlined />} size="medium" />
          </Col>*/}
            <Col>
              <Button
                style={{ height: "35px" }}
                onClick={handleFilter}
                icon={<FilterOutlined />}
                size="medium"
                className="filterbtn"
              >
                <span className="hide-font">Filter</span>
              </Button>
              <Button
                className="addbutton"
                style={{ height: "35px" }}
                onClick={() => {
                  history.push({
                    pathname: "/dashboard/addAnnouncement",
                  });
                }}
                icon={<PlusCircleOutlined />}
                size="medium"
                type="primary"
              >
                <span className="hide-font">Add Announcement</span>
              </Button>
            </Col>
          </Row>

          {showFilter ? (
            <div>
              <Row gutter={[40, 16]} justify="space-between">
                <Col
                  xs={24}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="colstyle"
                >
                  <h1>Search By (Title)</h1>
                  <Input placeholder="Search By (Member ID / Name / IC)" />
                </Col>

                <Col
                  xs={24}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                  className="colstyle"
                >
                  <h1>Search By (Display Date)</h1>
                  <Space direction="vertical" size={12}>
                    <RangePicker />
                  </Space>
                </Col>

                <Col
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                  xl={24}
                  className="colstyle"
                >
                  <Row
                    style={{
                      marginTop: "1%",
                      marginRight: "0%",
                      float: "right",
                    }}
                  >
                    <Col>
                      <Button style={{ width: 100 }} type="default">
                        Reset
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        style={{ width: 100, marginLeft: 10 }}
                        type="primary"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          ) : null}
          <ContentWrapper>
            <Modal
              className="modalclass"
              title={modalText.title}
              visible={isModalVisible}
              onCancel={handleCancel}
              width={800}
              style={{ borderRadius: "10px" }}
              footer={null}
            >
              <img src={modalText.imageLink} style={{ width: "100%" }} />
              <ReactQuill
                readOnly={true}
                value={modalText.annContent}
                theme={"bubble"}
              />
            </Modal>
            <Table
              pagination={true}
              className="btnStyle"
              columns={columns}
              dataSource={AnnouncementList}
              rowKey="ID"
            />
            {/* <Row style={{ marginTop: '4%' }} justify='end'>
            <Pagination
              total={85}
              showSizeChanger
              showQuickJumper
              showTotal={total => `Total ${total} items`}
            /></Row> */}
          </ContentWrapper>
        </LayoutContent>
      </LayoutWrapper>
    </div>
  );
};
export default ViewAnnouncement;

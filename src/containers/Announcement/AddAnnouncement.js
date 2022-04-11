import React from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import LayoutContent from "@iso/components/utility/layoutContent";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import { PageHeader } from "antd";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "react-quill/dist/quill.core.css";
import { QuillEditor } from "./Announcement.styles";
import { useHistory } from "react-router";
import moment from "moment";
import Swal from "sweetalert2";
import {
  Button,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Upload,
  message,
  Breadcrumb,
} from "antd";
import ImgCrop from "antd-img-crop";

const { Option } = Select;
const AddAnnouncement = () => {
  const [addloading, setaddloading] = React.useState(false);
  const [memberID, setMemberID] = React.useState("");
  const [accessToken, setAccessToken] = React.useState("");
  const [productImagelistURL, setProductImageListURL] = React.useState([]);
  const [editorValue, setEditorValue] = React.useState("");
  const [announcementStatus, setAnnouncementStatus] = React.useState([]);
  function handleEditor(value) {
    setEditorValue(value);
  }
  React.useEffect(() => {
    function getData() {
      setMemberID(JSON.parse(sessionStorage.getItem("memberID")));
      setAccessToken(sessionStorage.getItem("accessToken"));
    }
    getData();

    var announcementStatusConfig = {
      method: "GET",
      url:
        process.env.REACT_APP_API_KEY +
        "/announcement/getAnnouncementStatusList",
    };

    axios(announcementStatusConfig).then(function (response) {
      if (response.data.code === "200") {
        setAnnouncementStatus(response.data.result);
      }
    });
  }, []);

  const uploadDocs = (values) => {
    var data = JSON.stringify({
      dataString: values.dataString,
      fileType: values.fileType,
      fileName: values.fileName,
      pathway: values.pathway,
    });

    var config = {
      method: "POST",
      url: process.env.REACT_APP_API_KEY + "/utility/UploadDocs",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config).then(async (response) => {
      if (response.data.code === "200") {
        setProductImageListURL(response.data.result.pathway);
      } else alert("Fail to upload the documents");
    });
  };
  function beforeUpload(file) {
    // const encodedString = Buffer.from(item.uploadURL).toString("base64");
    //   console.log(encodedString);
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error("File size must be smaller than 5 MB");
    }
    return file.size / 1024 / 1024 < 5 ? true : Upload.LIST_IGNORE;
  }
  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
  function dummyRequest({ file, onSuccess }) {
    setTimeout(async () => {
      onSuccess("ok");
      var dataString = "";
      await getBase64(file).then((data) => {
        const splitString = data.split(",");
        dataString = splitString[1];
      });
      var fileType = file.type.split("/");
      const imageObject = {
        dataString: dataString,
        fileType: fileType[1],
        fileName: file.name,
        pathway: "product/img",
      };
      uploadDocs(imageObject);
    }, 0);
  }

  const addAnnouncement = async (values) => {
    setaddloading(true);
    setTimeout(() => setaddloading(false), 3000);
    let refreshTokenData = {
      token: accessToken,
    };

    var refreshTokenConfig = {
      method: "POST",
      url: process.env.REACT_APP_API_KEY + "/token/RefreshToken",
      header: {
        "Content-Type": "application/json",
      },
      data: refreshTokenData,
    };
    axios(refreshTokenConfig).then(function (response) {
      if (
        response.data.code === "200" &&
        response.data.message === "TOKEN RENEW"
      ) {
        insertData(values, response.data.result);
        setAccessToken(response.data.result);
        sessionStorage.setItem("accessToken", response.data.result);
      } else {
        insertData(values, accessToken);
      }
    });
    //let myList = [];

    // productImagelistURL.map(async (item, index) => {
    //   myList.push({
    //     imageLink: item.imageLink,
    //     imageCategory: item.imageCategory,
    //     imageNo: item.imageNo,
    //   });
    // });
    const insertData = (values, token) => {
      const startDate = moment(values.publishDate).format("YYYY-MM-DD");
      const endDate = moment(values.expiredDate).format("YYYY-MM-DD");
      let data = JSON.stringify({
        annTitle: values.title,
        annContent: editorValue,
        isActive: values.select_status,
        priorityOrder: values.priorityOrder,
        displayDate: startDate,
        expiredAt: endDate,
        createdBy: memberID,
        imageLink: productImagelistURL,
        linkURL: values.annUrl,
      });
      var addAnnConfig = {
        method: "POST",
        url: process.env.REACT_APP_API_KEY + "/announcement/InsertAnnouncement",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + token,
        },
        data: data,
      };
      axios(addAnnConfig).then(async (response) => {
        if ((response.data.code = "200")) {
          Swal.fire({
            icon: "success",
            title: "Added Announcement!",
          }).then(function () {
            window.location = "/dashboard/announcement";
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Add Announcement Failed!",
            text: "There is something error...",
          });
        }
      });
    };
  };
  return (
    <div style={{ width: "100%", padding: "40px 20px" }}>
      <PageHeader
        title="Add Announcement"
        className="site-page-header"
        onBack={() => window.history.back()}
        //subTitle="This is a subtitle"
        //tags={<Tag color="blue">Running</Tag>}
        extra={[
          <Breadcrumb>
            <Breadcrumb.Item className="firstbreadcrumb">
              Announcement
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="/dashboard/announcement">Announcement List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {/* <a href="/dashboard/announcement"></a> */}
              Add Announcement
            </Breadcrumb.Item>
          </Breadcrumb>,
        ]}
      ></PageHeader>
      <LayoutWrapper>
        <LayoutContent style={{ width: "100%", margin: "0 auto" }}>
          <Form
            colon={false}
            layout="vertical"
            name="new_announcement"
            size="default"
            wrapperCol={24}
            onFinish={addAnnouncement}
            initialValues={{ select_status: "1" }}
          >
            <h2>Announcement Detail</h2>
            <Divider />
            <Row gutter={[16, 16]} justify="start">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form.Item
                  name="title"
                  label="Title"
                  rules={[
                    {
                      required: true,
                      message: "Please input title!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  name="publishDate"
                  label="Publish Date"
                  rules={[
                    {
                      required: true,
                      message: "Please select the start Date!",
                    },
                  ]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  name="expiredDate"
                  label="Expired Date"
                  hasFeedback
                  dependencies={["publishDate"]}
                  rules={[
                    {
                      required: true,
                      message: "Please select the end Date!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("publishDate") <= value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "End date must not be earlier than start date"
                          )
                        );
                      },
                    }),
                  ]}
                >
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item name="select_status" label="Status">
                  <Select className="ignore-color">
                    {announcementStatus.map((item) => {
                      return (
                        <Option value={item.statusValue}>
                          {item.statusName}
                        </Option>
                      );
                    })}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item name="annUrl" label="URL">
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item name="priorityOrder" label="Priority Order">
                  <Input placeholder="Larger Number will display first" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form.Item name="annImageList" label="Upload Image">
                  {productImagelistURL.length != 0 ? (
                    <img
                      style={{ height: 150, width: 150 }}
                      src={productImagelistURL}
                    />
                  ) : null}
                  <ImgCrop>
                    <Upload
                      beforeUpload={beforeUpload}
                      maxCount={1}
                      accept=".jpg, .jpeg, .png"
                      customRequest={dummyRequest}
                      showUploadList={false}
                    >
                      <Button>Choose File</Button>
                    </Upload>
                  </ImgCrop>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <QuillEditor>
                  <ReactQuill
                    onChange={handleEditor}
                    // modules={editormodule}
                    // formats={editorformats}
                    placeholder="Write Something..."
                    theme={"snow"}
                  />
                </QuillEditor>
              </Col>
              <Form.Item wrapperCol={{ span: 24 }}>
                <Button
                  loading={addloading}
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: 100,
                    marginLeft: 10,
                    backgroundColor: "#19A399",
                    color: "#fff",
                  }}
                >
                  Add
                </Button>
              </Form.Item>
            </Row>
          </Form>
        </LayoutContent>
      </LayoutWrapper>
    </div>
  );
};
export default AddAnnouncement;

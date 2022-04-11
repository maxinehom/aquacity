import React, { useCallback } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import ImgCrop from "antd-img-crop";
import Wrapper, { ContentWrapper } from "./Product.styles";
import LayoutContent from "@iso/components/utility/layoutContent";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import moment from "moment";
import { useHistory, useLocation } from "react-router-dom";
import {
  Form,
  Input,
  Row,
  Col,
  Select,
  Checkbox,
  Divider,
  Button,
  DatePicker,
  Upload,
  message,
  Table,
  Tooltip,
} from "antd";
import update from "immutability-helper";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  UploadOutlined,
  CheckCircleTwoTone,
  CloseCircleTwoTone,
} from "@ant-design/icons";
import PageHeader from "@iso/components/utility/pageHeader";
import IntlMessages from "@iso/components/utility/intlMessages";
import Editor from "@iso/components/uielements/editor";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import { result, set } from "lodash";

const { TextArea } = Input;
const { Option } = Select;
const type = "DragableUploadList";
const DragableUploadListItem = ({ originNode, moveRow, file, fileList }) => {
  const ref = React.useRef();
  const index = fileList.indexOf(file);
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: (monitor) => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName:
          dragIndex < index ? " drop-over-downward" : " drop-over-upward",
      };
    },
    drop: (item) => {
      moveRow(item.index, index);
    },
  });
  const [, drag] = useDrag({
    type,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drop(drag(ref));
  const errorNode = (
    <Tooltip title="Upload Error">{originNode.props.children}</Tooltip>
  );
  return (
    <div
      ref={ref}
      className={`ant-upload-draggable-list-item ${isOver ? dropClassName : ""
        }`}
      style={{ cursor: "move" }}
    >
      {file.status === "error" ? errorNode : originNode}
    </div>
  );
};
const UpdateProduct = () => {
  const [btnsave, setbtnsave] = React.useState(false);
  const [productID, setProductID] = React.useState("");
  let data = useLocation();
  const history = useHistory();
  const [form] = Form.useForm();
  const [memberID, setMemberID] = React.useState("");
  const [editorValue, setEditorValue] = React.useState("");
  const [accessToken, setAccessToken] = React.useState("");
  const [productDisplayListDefault, setProductDisplayListDefault] =
    React.useState([]);
  const [productDisplayList, setProductDisplayList] = React.useState([]);
  const [productCategoryList, setProductCategoryList] = React.useState([]);
  const [priceZoneList, setPriceZoneList] = React.useState([]);
  const [productStatusList, setProductStatusList] = React.useState([]);
  const [productImagelistURL, setProductImageListURL] = React.useState([]);
  const [productDisplayChecked, setProductDisplayChecked] = React.useState([]);
  const [productCodeValid, setProductCodeValid] = React.useState();
  const [productList, setProductList] = React.useState([]);
  const [packageList, setPackageList] = React.useState([]);
  const [productDetails, setProductDetails] = React.useState([]);
  const [productisPackageCheckedBoolean, setProductisPackageCheckedBoolean] =
    React.useState(false);
  const [productisPackageChecked, setProductisPackageChecked] =
    React.useState("");
  const [disablePackageCheckbox, setDisablePackageCheckbox] =
    React.useState(false);
  const [priceListByCountry, setPriceListByCountry] = React.useState([]);

  React.useEffect(() => {
    function getData() {
      setMemberID(JSON.parse(sessionStorage.getItem("memberID")));
      setAccessToken(sessionStorage.getItem("accessToken"));
    }

    setProductID(data.state.data);
    getData();
    var productDisplayListConfig = {
      method: "GET",
      url:
        process.env.REACT_APP_API_KEY +
        "/product/getProductDisplayList?lang=en",
      headers: {
        "Content-Type": "application/json",
      },
    };

    var productCategoryListConfig = {
      method: "GET",
      url: process.env.REACT_APP_API_KEY + "/product/getProductCategoryList",
      headers: {
        "Content-Type": "application/json",
      },
    };

    var priceZoneConfig = {
      method: "GET",
      url: process.env.REACT_APP_API_KEY + "/product/getProductPriceZoneList",
      headers: {
        "Content-Type": "application/json",
      },
    };

    var productStatusConfig = {
      method: "GET",
      url: process.env.REACT_APP_API_KEY + "/product/getProductStatusList",
      headers: {
        "Content-Type": "application/json",
      },
    };

    var getPackageProductList = {
      method: "GET",
      url: process.env.REACT_APP_API_KEY + "/product/getPackageProductList/0",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(productDisplayListConfig).then(async (response) => {
      if (response.data.code === "200") {
        setProductDisplayList(response.data.result);
      } else alert("Failed to get product list");
    });

    axios(productCategoryListConfig).then(async (response) => {
      if (response.data.code === "200") {
        setProductCategoryList(response.data.result);
      }
    });

    axios(priceZoneConfig).then(async (response) => {
      if (response.data.code === "200") {
        setPriceZoneList(response.data.result);
      }
    });

    axios(productStatusConfig).then(async (response) => {
      if (response.data.code === "200") {
        setProductStatusList(response.data.result);
      }
    });

    axios(getPackageProductList).then(async (response) => {
      if (response.data.code === "200") {
        setProductList(response.data.result);
      }
    });
  }, []);

  React.useEffect(() => {
    var getProductDetailConfig = {
      method: "GET",
      url:
        process.env.REACT_APP_API_KEY +
        "/product/getProductDetails/" +
        productID,
    };

    axios(getProductDetailConfig).then(function (response) {
      if (response.data.code == "200") {
        setEditorValue(response.data.result.productDescription);
        setProductDetails(response.data.result);

        let list = [];
        response.data.result.productDisplayList.map((item) => {
          list.push(item.productDisplaySalesType);
        });

        setProductDisplayListDefault(list);
      }
    });
  }, [productID]);

  React.useEffect(() => {
    var data = "";

    if (productDetails.productStatus) {
      data = "1";
    } else {
      data = "0";
    }

    if (productDetails.isPackage) {
      setDisablePackageCheckbox(true);
      setProductisPackageChecked(true);
      setProductisPackageCheckedBoolean(true);
    }
    setPriceListByCountry(productDetails.productPricingList);

    var list = [];

    if (productDetails.productDisplayList != undefined) {
      productDetails.productDisplayList.map((item) => {
        list.push(item.productDisplaySalesType);
      });

      setProductDisplayChecked(list);
    }

    const newArray = packageList.slice();
    productList.map(async (item) => {
      let quantity = 0;
      let active = 0;
      if (productDetails.packageProductList != undefined) {
        if (
          productDetails.packageProductList.find(
            (v) => v.productID === item.productID
          )
        ) {
          quantity = productDetails.packageProductList.find(
            (v) => v.productID === item.productID
          ).quantity;
          active = 1;
        }
      }

      let product = {
        productID: item.productID,
        quantity: quantity,
        active: active,
      };
      newArray.push(product);
    });
    setPackageList(newArray);

    if (productDetails != undefined) {
      setProductImageListURL(productDetails.productImageList);

      var startDateTemp = productDetails.startDate;
      var endDateTemp = productDetails.endDate;
      if (endDateTemp != undefined) {
        var startDateString = startDateTemp.split(" ", 2);
        var endDateString = endDateTemp.split(" ", 2);
        form.setFieldsValue({
          startDate: moment(startDateString[0]),
          endDate: moment(endDateString[0]),
          productCode: productDetails.productCode,
          productName: productDetails.productName,
          productCategory: productDetails.productCategory,
          productStatus: data,
          productWeight: productDetails.productWeight,
          priorityOrder: productDetails.priorityOrder,
          productRemark: productDetails.productRemark,
        });
      }
    }
  }, [productDetails]);

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      key: "id",

      render: (item, record, index) => {
        return <span>{index + 1}</span>;
      },
    },
    {
      title: "Select",
      dataIndex: "select",
      key: "select",

      render: (item, record, key) => {
        let checked = false;
        if (packageList != undefined) {
          if (
            packageList.find((v) => v.productID === record.productID).active ==
            "1"
          ) {
            checked = true;
          }
        }

        return (
          <Checkbox
            defaultChecked={checked}
            onChange={(value) => {
              if (value.target.checked) {
                let updatedList = packageList.slice();

                updatedList.find(
                  (v) => v.productID === record.productID
                ).active = 1;
                setPackageList(updatedList);
              } else if (!value.target.checked) {
                let updatedList = packageList.slice();
                updatedList.find(
                  (v) => v.productID === record.productID
                ).active = 0;
                setPackageList(updatedList);
              }
            }}
          />
        );
      },
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",

      render: (item, record, key) => {
        let quantity = 0;
        if (packageList != undefined) {
          quantity = packageList.find(
            (v) => v.productID == record.productID
          ).quantity;
        }
        return (
          <Input
            defaultValue={quantity}
            onChange={(quantity) => {
              let updatedList = packageList.slice();
              updatedList.find(
                (v) => v.productID === record.productID
              ).quantity = quantity.target.value;
              setPackageList(updatedList);
            }}
          />
        );
      },
    },
    {
      title: "Product Code",
      dataIndex: "productCode",
      key: "productCode",
    },
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
  ];

  function beforeUpload(file) {
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error("File size must be smaller than 5 MB");
    }
    return file.size / 1024 / 1024 < 5 ? true : Upload.LIST_IGNORE;
  }

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file.originFileObj);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  function dummyRequest({ file, onSuccess }) {
    setTimeout(async () => {
      onSuccess("ok");
    }, 0);
  }

  const checkProductCode = (text) => {
    if (text.target.value != productDetails.productCode) {
      var data = {
        value: text.target.value,
      };

      var checkProductCodeConfig = {
        method: "POST",
        url: process.env.REACT_APP_API_KEY + "/basic/CheckProductCode",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(checkProductCodeConfig).then(async (response) => {
        if (response.data.code === "200") {
          setProductCodeValid(true);
        } else setProductCodeValid(false);
      });
    } else {
      setProductCodeValid(true);
    }
  };

  const uploadDocs = (file) => {
    return new Promise(async function (resolve, reject) {
      var dataString = "";
      await getBase64(file).then((data) => {
        const splitString = data.split(",");
        dataString = splitString[1];
      });
      var fileType = file.type.split("/");
      var filename = file.name.split(".");

      const data = JSON.stringify({
        dataString: dataString,
        fileType: fileType[1],
        fileName: filename[0],
        pathway: "product/img",
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
          const imageList = {
            url: response.data.result.pathway,
            imageCategory: "0",
            imageNo: productImagelistURL.length,
          };
          resolve(imageList);
        } else alert("Fail to upload the documents");
      });
    });
  };

  const handleCheck = (value) => {
    setProductDisplayListDefault(value);
    setProductDisplayChecked(value);
  };

  const handleisPackageCheck = (value) => {
    if (value.target.checked) {
      setProductisPackageCheckedBoolean(true);
      setProductisPackageChecked("1");
    } else {
      setProductisPackageCheckedBoolean(false);
      setProductisPackageChecked("0");
    }
  };

  const validateUpdateProduct = (values) => {
    setbtnsave(true)
    setTimeout(
      () => setbtnsave(false),
      3000
    );
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
        console.log("new token");
        updateProduct(values, response.data.result);
        setAccessToken(response.data.result);
        sessionStorage.setItem("accessToken", response.data.result);
      } else {
        console.log("old token");
        updateProduct(values, accessToken);
      }
    });
  };

  const updateProduct = async (values, accessToken) => {
    let myList = [];
    let pricingList = [];
    let displayList = [];
    let packageListing = [];
    let isPackageCheck = "";
    const startDate = moment(values.startDate).format("YYYY-MM-DD");
    const endDate = moment(values.endDate).format("YYYY-MM-DD");

    // console.log(productisPackageChecked + " " + productisPackageCheckedBoolean);

    if (productisPackageChecked === "1" || productisPackageChecked == true) {
      packageList.map((item) => {
        isPackageCheck = "1";
        if (item.active == "1") {
          packageListing.push({
            productID: item.productID,
            quantity: parseInt(item.quantity),
          });
        }
      });
    } else isPackageCheck = "0";

    //console.log(packageListing);

    productDisplayChecked.map((item, index) => {
      displayList.push({
        productDisplaySalesType: item,
      });
    });

    priceZoneList.map((item, index) => {
      const priceZone = "priceZoneID" + index;
      const memberPV = "memberPV" + index;
      const memberPrice = "memberPrice" + index;
      const retailPV = "retailPV" + index;
      const retailPrice = "memberPrice" + index;

      pricingList.push({
        priceZoneID: values[priceZone],
        memberPV: values[memberPV],
        memberPrice: values[memberPrice],
        retailPV: values[retailPV],
        retailPrice: values[retailPrice],
      });
    });

    await Promise.all(
      productImagelistURL.map(async (item, index) => {
        if (item.url == undefined) {
          await uploadDocs(item).then(function (result) {
            result.imageNo = index;
            myList.push({
              url: result.url,
              imageCategory: result.imageCategory,
              imageNo: result.imageNo,
            });
          });
        } else {
          item.imageNo = index;
          myList.push({
            url: item.url,
            imageCategory: item.imageCategory,
            imageNo: item.imageNo,
          });
        }
      })
    ).then(() => {
      let data = JSON.stringify({
        productID: productDetails.productID,
        productCode: values.productCode,
        productName: values.productName,
        productCategory: values.productCategory,
        productStatus: values.productStatus,
        createdBy: memberID,
        isPackage: parseInt(isPackageCheck),
        priorityOrder: values.priorityOrder,
        productWeight: values.productWeight,
        startDate: startDate,
        endDate: endDate,
        productDescription: editorValue,
        productRemark: values.productRemark,
        productPricingList: pricingList,
        productImageList: myList,
        productDisplayList: displayList,
        packageProductList: packageListing,
      });

      var updateProductConfig = {
        method: "POST",
        url: process.env.REACT_APP_API_KEY + "/product/UpdateProduct",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer " + accessToken,
        },
        data: data,
      };

      //(data);
      axios(updateProductConfig).then(async (response) => {
        if (response.data.code === "200") {
          history.push("/dashboard/product");
        }
      });
    });
  };

  const moveRow = React.useCallback(
    (dragIndex, hoverIndex) => {
      const dragRow = productImagelistURL[dragIndex];
      setProductImageListURL(
        update(productImagelistURL, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        })
      );
    },
    [productImagelistURL]
  );

  return (
    <LayoutContent style={{ width: "100%", margin: "0 auto" }}>
      <Form
        form={form}
        colon={false}
        layout="vertical"
        name="add_product"
        size="default"
        wrapperCol={24}
        onFinish={validateUpdateProduct}
      >
        <h2>1. Product Information</h2>
        <Divider />
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="productCode" label="Product Code">
              <Input disabled />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              name="productName"
              label="Product Name"
              rules={[
                {
                  required: true,
                  message: "Please input product name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              name="productStatus"
              label="Status"
              rules={[
                {
                  required: true,
                  message: "Please select product status!",
                },
              ]}
            >
              <Select>
                {productStatusList.map((item, index) => {
                  return (
                    <Option value={item.statusValue}>{item.statusName}</Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              name="productCategory"
              label="Product Category"
              rules={[
                {
                  required: true,
                  message: "Please select product category!",
                },
              ]}
            >
              <Select>
                {productCategoryList.map(function (item, i) {
                  return (
                    <Option value={item.categoryID}>{item.categoryName}</Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              name="startDate"
              label="Start Date"
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
              name="endDate"
              label="End Date"
              hasFeedback
              dependencies={["startDate"]}
              rules={[
                {
                  required: true,
                  message: "Please select the end Date!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("startDate") <= value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error("End date must not be earlier than start date")
                    );
                  },
                }),
              ]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              name="productWeight"
              label="Product Weight (gram)"
              rules={[
                {
                  required: true,
                  message: "Please enter the product weight!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="priorityOrder" label="Priority Order">
              <Input placeholder="Larger Number will display first" />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item
              name="productDisplayList"
              label="Product Display"
              valuePropName="checked"
            >
              <Checkbox.Group
                style={{ width: "100%" }}
                onChange={handleCheck}
                value={productDisplayListDefault}
              //defaultValue={productDisplayListDefault}
              >
                {productDisplayList.map(function (count, a) {
                  if (a % 3 == 0) {
                    return (
                      <Row gutter={[10, 10]} justify="start">
                        {productDisplayList.map(function (item, j) {
                          if (item.salesTypeValues !== '1') {
                            if (j < a + 3 && j >= a) {
                              let checked = false;
                              return (
                                <Col span={8}>
                                  <Checkbox
                                    value={item.salesTypeValues}
                                    style={{
                                      lineHeight: "32px",
                                    }}
                                  >
                                    {item.salesTypeName}
                                  </Checkbox>
                                </Col>
                              );
                            }
                          }

                        })}
                      </Row>
                    );
                  }
                })}
              </Checkbox.Group>
            </Form.Item>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="isPackage" label="Is Package?">
              <Checkbox
                checked={productisPackageCheckedBoolean}
                // disabled={disablePackageCheckbox}
                disabled
                onChange={handleisPackageCheck}
              >
                Yes
              </Checkbox>
            </Form.Item>
          </Col>
          {productisPackageChecked == "1" && (
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Table
                pagination={true}
                dataSource={productList}
                columns={columns}
              ></Table>
            </Col>
          )}
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <Form.Item name="productList"></Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item
              name="productRemark"
              label="Product Remark"
              initialValue=""
            >
              <TextArea showCount rows={5} maxLength={500} />
            </Form.Item>
          </Col>
        </Row>
        <h2>2. Product Pricing</h2>
        <Divider />
        {priceZoneList.map((item, index) => {
          if (priceListByCountry != undefined) {
            let country = {};
            let memberPrice = 0;
            let memberPV = 0;
            let retailPV = 0;
            let retailPrice = 0;
            country = priceListByCountry.find(
              (v) => v.priceZoneID == item.priceZoneID
            );
            memberPrice = country.memberPrice;
            memberPV = country.memberPV;
            retailPV = country.retailPV;
            retailPrice = country.retailPrice;

            return (
              <Row gutter={[16, 16]} justify="center">
                <Col xs={12} sm={8} md={4} lg={4} xl={4}>
                  <Form.Item
                    name={"priceZoneID" + index}
                    label="Register Country"
                    initialValue={item.priceZoneID}
                  >
                    {item.priceZoneName}
                  </Form.Item>
                </Col>
                <Col xs={12} sm={8} md={4} lg={4} xl={4}>
                  <Form.Item
                    name={"memberPV" + index}
                    label="Member PV"
                    initialValue={memberPV}
                    rules={[
                      {
                        pattern: new RegExp(/^-?\d*(\.\d*)?$/),
                        message: "Only Numbers!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={12} sm={8} md={4} lg={4} xl={4}>
                  <Form.Item
                    name={"memberPrice" + index}
                    label="Member Price"
                    initialValue={memberPrice}
                    rules={[
                      {
                        pattern: new RegExp(/^-?\d*(\.\d*)?$/),
                        message: "Only Numbers!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={12} sm={8} md={4} lg={4} xl={4}>
                  <Form.Item
                    name={"retailPV" + index}
                    label="Retail PV"
                    initialValue={retailPV}
                    rules={[
                      {
                        pattern: new RegExp(/^-?\d*(\.\d*)?$/),
                        message: "Only Numbers!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={12} sm={8} md={4} lg={4} xl={4}>
                  <Form.Item
                    name={"retailPrice" + index}
                    label="Retail Price"
                    initialValue={retailPrice}
                    rules={[
                      {
                        pattern: new RegExp(/^-?\d*(\.\d*)?$/),
                        message: "Only Numbers!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                {/* <Col xs={12} sm={12} md={12} lg={12} xl={12}></Col> */}
              </Row>
            );
          }
        })}

        <h2>3. Product Description</h2>
        <Divider />
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <ReactQuill
              value={editorValue}
              onChange={(value) => {
                setEditorValue(value);
              }}
              placeholder="Write Something..."
              theme={"snow"}
            />
          </Col>
        </Row>
        <h2>4. Product Thumbnail</h2>
        <Divider />
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Form.Item name="productImageList" label="Product Image List">
              <ImgCrop aspect={213 / 278} quality={1} rotate>
                <DndProvider backend={HTML5Backend}>
                  <Upload
                    fileList={productImagelistURL}
                    beforeUpload={beforeUpload}
                    maxCount={5}
                    accept=".jpg, .jpeg, .png"
                    listType="picture"
                    customRequest={dummyRequest}
                    onChange={({ fileList: newFileList }) => {
                      console.log(newFileList);
                      setProductImageListURL(newFileList);
                    }}
                    itemRender={(originNode, file, currFileList) => (
                      <DragableUploadListItem
                        originNode={originNode}
                        file={file}
                        fileList={currFileList}
                        moveRow={moveRow}
                      />
                    )}
                  >
                    <Button>Choose File</Button>
                  </Upload>
                </DndProvider>
              </ImgCrop>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 11, span: 24 }}>
              <Button
                className="searchbutton"
                type="primary"
                htmlType="submit"
                loading={btnsave}
                style={{ height: 30, fontWeight: "500" }}
              >
                Save
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </LayoutContent>
  );
};
export default UpdateProduct;

import React, { useCallback, useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Select,
  Input,
  Space,
  DatePicker,
  Button,
  Row,
  Col,
  Pagination,
  PageHeader,
  Breadcrumb,
} from "antd";
import { ContentWrapper } from "./Product.styles";
import LayoutContent from "@iso/components/utility/layoutContent";
import SubHeader from "@iso/components/utility/subHeader";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import { RedoOutlined } from "@ant-design/icons";
import { FilterOutlined, PlusCircleOutlined } from "@ant-design/icons";
import product1 from "@iso/assets/images/ProductImage/p1-sq.png";
import product2 from "@iso/assets/images/ProductImage/p2-rec.png";
import { useHistory } from "react-router-dom";
import IntlMessages from "@iso/components/utility/intlMessages";
import { AudioOutlined } from "@ant-design/icons";
import { Column } from "rc-table";
import { toUpper } from "lodash";

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
const onSearch = (value) => console.log(value);
const { Option } = Select;
function handleChange(value) {
  console.log(`selected ${value}`);
}

const ProductList = () => {
  const history = useHistory();
  const [showFilter, setshowFilter] = React.useState(false);
  const [productList, setProductList] = React.useState([]);
  const handleFilter = () => {
    if (showFilter === false) {
      setshowFilter(true);
    } else if (showFilter === true) {
      setshowFilter(false);
    }
  };

  const columns = [
    {
      fixed: "left",
      title: "No.",
      key: "index",
      render(text, record, index) {
        return {
          props: {
            style: { maxWidth: 100 },
          },
          children: <div>{index + 1}</div>,
        };
      },
      width: "6%",
    },
    {
      title: "Product Image",
      width: "12%",
      dataIndex: "imageLink",
      key: "imageLink",
      render: (item) => {
        const search = "/FileUpload";
        const replacedWith = "https://techbaseapi.techbasemlm.com/FileUpload";
        const replaced = item.split(search).join(replacedWith);

        return (
          <img style={{ width: "90px", borderRadius: "8px" }} src={replaced} />
        );
      },
    },
    {
      title: "Product",
      dataIndex: "productCode",
      key: "productCode",
      render: (item, row) => {
        return (
          <div>
            <div>
              Product Code :{" "}
              <p style={{ fontWeight: "bold" }}>{row.productCode}</p>
            </div>
            <div>
              Product Name :{" "}
              <p style={{ fontWeight: "bold" }}>{row.productName}</p>
            </div>
          </div>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      width: "15%",
      render: (item, row) => {
        return (
          <div>
            <div>Member Price : {row.memberPrice}</div>
            <div>Member PV : {row.memberPV}</div>
          </div>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "productStatus",
      key: "productStatus",

      render: (item) => {
        if (toUpper(item) === "TRUE") {
          return <div>Active</div>;
        } else {
          return <div>Inactive</div>;
        }
      },
    },
    {
      title: "Product Remark",
      dataIndex: "productRemark",
      key: "productRemark",
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: "10%",
      render: (item, record) => (
        <Select
          defaultValue="Action"
          onChange={(selected) => {
            if (selected == "view") {
              history.push({
                pathname: "/dashboard/viewproduct",
                state: { data: record.productCode },
              });
            } else if (selected == "edit") {
              // return (
              //   <Link
              //     to={{
              //       pathname: "/editproduct",
              //       state: { data: record.productCode },
              //     }}
              //   />
              // );
              history.push({
                pathname: "/dashboard/editproduct",
                state: { data: record.productCode },
              });
            }
          }}
        >
          <option value="view">View</option>
          <option value="edit">Update</option>
        </Select>
      ),
    },
  ];

  useEffect(() => {
    var getProductListConfig = {
      method: "GET",
      url: process.env.REACT_APP_API_KEY + "/product/getProductList",
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(getProductListConfig).then(async (response) => {
      if (response.data.code === "200") {
        setProductList(response.data.result);
      } else alert("Failed to get product list from the database");
    });
  }, []);

  return (
    <div style={{ width: "100%", padding: "40px 20px" }}>
      <PageHeader
        title="Product List"
        className="site-page-header"
        //subTitle="This is a subtitle"
        //tags={<Tag color="blue">Running</Tag>}
        extra={[
          <Breadcrumb>
            <Breadcrumb.Item className="firstbreadcrumb">
              Product
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              {/* <a href="/dashboard/announcement"></a> */}
              Product List
            </Breadcrumb.Item>
          </Breadcrumb>,
        ]}
      ></PageHeader>
      <LayoutWrapper>
        <LayoutContent>
          <Row style={{ marginBottom: "2%" }} justify="end">
            {/*<Col>
            <Button style={{height:'40px',width:'40px'}} icon={< RedoOutlined />} size="medium"/>
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
                    pathname: "/dashboard/productadd",
                  });
                }}
                icon={<PlusCircleOutlined />}
                size="medium"
                type="primary"
              >
                <span className="hide-font">Add Product</span>
              </Button>
            </Col>
          </Row>
          {showFilter ? (
            <div>
              <ContentWrapper>
                <Row gutter={[40, 16]} justify="space-between">
                  <Col
                    xs={24}
                    sm={12}
                    md={12}
                    lg={12}
                    xl={12}
                    className="colstyle"
                  >
                    <h1>Search By (Member ID / Name / IC)</h1>
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
                    <h1>Search By Status</h1>
                    <Input.Group compact>
                      <Select defaultValue="Please Approval">
                        <Option value="Zhejiang">Ready to Dispense</Option>
                        <Option value="Jiangsu">Collected</Option>
                        <Option value="Jiangsu">On Delivery</Option>
                        <Option value="Jiangsu">Packing in Progress</Option>
                      </Select>
                    </Input.Group>
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
              </ContentWrapper>
            </div>
          ) : null}
          <ContentWrapper>
            <Table
              pagination={{ showSizeChanger: true }}
              className="selectStyle"
              columns={columns}
              dataSource={productList}
            />
          </ContentWrapper>
        </LayoutContent>
      </LayoutWrapper>
    </div>
  );
};
export default ProductList;

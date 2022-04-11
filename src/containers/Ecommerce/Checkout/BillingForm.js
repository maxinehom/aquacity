import React from "react";
import Input from "@iso/components/uielements/input";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { BillingFormWrapper } from "./Checkout.styles";
import { Form, Upload, message } from "antd";
import SingleOrderInfo from './SingleOrder';
import { OrderTable } from './Checkout.styles';
import { useSelector } from 'react-redux';
import Button from '@iso/components/uielements/button';
import Box from '@iso/components/utility/box';

const Option = SelectOption;
let totalPrice;

export default function () {
  const [showShipping, setshowShipping] = React.useState(true);
  const [showPickUp, setshowPickUp] = React.useState(false);
  const [showPayment, setshowPayment] = React.useState(false);
  const [showShipselect, setshowShipselect] = React.useState(true);
  const [showPlaceorder, setshowPlaceorder] = React.useState(false);
  const [showPaymentbtn, setshowPaymentbtn] = React.useState(true);
  const [showUploadreceipt, setshowUploadreceipt] = React.useState(false);
  const [showWallet, setshowWallet] = React.useState(false);
  const { productQuantity, products } = useSelector(state => state.Ecommerce);

  function renderProducts() {
    totalPrice = 0;
    return productQuantity.map(product => {
      totalPrice += product.quantity * products[product.objectID].price;
      return (
        <SingleOrderInfo
          key={product.objectID}
          quantity={product.quantity}
          {...products[product.objectID]}
        />
      );
    });
  }

  function handleChange(value) {
    if (value == "delivery") {
      setshowShipping(true);
      setshowPickUp(false);
    } else if (value== "selfpickup") {
      setshowShipping(false);
      setshowPickUp(true);
    }
    else if (value == "online_transfer"){
      setshowUploadreceipt(true);
      setshowWallet(false)
    }
    else if (value == "wallet_credit"){
      setshowWallet(true);
      setshowUploadreceipt(false);
    }
  }
  function handlePay() {
      setshowShipselect(false);
      setshowShipping(false);
      setshowPickUp(false);
      setshowPayment(true);
      setshowPaymentbtn(false);
      setshowPlaceorder(true);
  }

  function beforeUpload(file) {
    const isLt5M = file.size / 1024 / 1024 < 5;
    const isImage =
    file.type === "image/png" ||
    file.type === "image/jpg" ||
    file.type === "application/pdf" ||
    file.type === "image/jpeg";
    if (!isLt5M) {
      message.error("File size must be smaller than 5 MB");
    }
    // if(!isImage) {
      
    // }

    return file.size / 1024 / 1024 < 5 && isImage ? true : Upload.LIST_IGNORE;
  }
 

  function dummyRequest({ file, onSuccess }) {
    setTimeout(() => {
      onSuccess("ok");
    }, 0);
  }
  return (
    
    <Box>
     <div className="isoBillingAddressWrapper">
        <h3 className="isoSectionTitle">Billing details</h3>
        <div className="isoBillingSection">
          <BillingFormWrapper className="isoBillingForm">
            <Form layout="vertical">
              {showShipselect ? (<div>
              <Form.Item
                name="shipping_method"
                label="Shipping Method"
                colon={false}
                rules={[
                  {
                    required: true,
                  },
                ]}>
                <Select size="large" defaultValue="delivery" onChange={handleChange}>
                  <Option value="delivery">Delivery</Option>
                  <Option value="selfpickup">Self Pickup</Option>
                </Select>
              </Form.Item>
              </div>):null}
              
              {showPayment ? (<div>
              <Form.Item
                name="payment_method"
                label="Payment Method"
                colon={false}
                rules={[
                  {
                    required: true,
                  },
                ]}>
                <Select size="large" defaultValue="Please Select" onChange={handleChange}>
                  <Option value="online_transfer">Online Transfer</Option>
                  <Option value="wallet_credit">Wallet Credit</Option>
                </Select>
              </Form.Item>
              </div>):null}
              {showUploadreceipt ? (<div>
                <Form.Item
                  name="upload_receipt"
                  label="Upload Transfer Receipt"
                  colon={false}
                  rules={[
                    {
                      required: true,
                    },
                  ]}>
                  <Upload 
                  accept=".pdf, .jpg, .jpeg, .png" 
                  beforeUpload={beforeUpload} 
                  customRequest={dummyRequest} 
                  maxCount={1}> 
                  <Button>Click to Upload</Button></Upload>
                </Form.Item>
              </div>):null}
              {showWallet ? (<div>
                <Form.Item
                  name="wallet_type"
                  label="Wallet Type"
                  colon={false}
                  rules={[
                    {
                      required: true,
                    },
                  ]}>
                  <Select size="large" defaultValue="Please Select" onChange={handleChange}>
                  <Option value="wallet_c">C$ Wallet</Option>
                  <Option value="wallet_s">S$ Wallet</Option>
                  <Option value="wallet_r">R$ Wallet</Option>
                </Select>
                </Form.Item>
              </div>):null}
              {showShipping ? (
                <div>
                  <Form.Item
                    name="shipping_name"
                    label="Shipping Name"
                    colon={false}
                    rules={[
                      {
                        required: true,
                      },
                    ]}>
                    <Input placeholder="" />
                  </Form.Item>

                  <Form.Item
                    name="shipping_contact_no"
                    label="Shipping Contact No"
                    colon={false}
                    rules={[
                      {
                        required: true,
                      },
                    ]}>
               
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label="Email"
                    colon={false}
                    rules={[
                      {
                        type: 'email',
                        required: true,
                      },
                    ]}>
                    <Input />
                  </Form.Item>

                  <Form.Item
                    name="shipping_address"
                    label="Shipping Address"
                    colon={false}
                    rules={[
                      {
                        required: true,
                      },
                    ]}>
                    <Input placeholder="" />
                  </Form.Item>

                  <Form.Item
                    name="shipping_postcode"
                    label="Shipping Postcode"
                    colon={false}
                    rules={[
                      {
                        required: true,
                      },
                    ]}>
                    <Input placeholder="" />
                  </Form.Item>

                  <Form.Item
                    name="shipping_country"
                    label="Shipping Country"
                    colon={false}
                    rules={[
                      {
                        required: true,
                      },
                    ]}>
                   
                    <Input placeholder="" />
                  </Form.Item>

                  <Form.Item
                    name="shipping_state"
                    label="Shipping State"
                    colon={false}
                    rules={[
                      {
                        required: true,
                      },
                    ]}>
                   
                    <Input placeholder="" />
                  </Form.Item>
                </div>
              ) : null}

              {showPickUp ? (
                <div>
                  <Form.Item
                    name="pickup_from"
                    label="Pickup From"
                    colon={false}
                    rules={[
                      {
                        required: true,
                      },
                    ]}>
                    <Select size="large" defaultValue="HQ">
                      <Option value="ps">Please Select</Option>
                      <Option value="hq">HQ</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="warehouse_address"
                    label="Warehouse Address"
                    colon={false}
                    rules={[
                      {
                        // required: true,
                      },
                    ]}>
                   
                    <Input placeholder="HQ" />
                  </Form.Item>
                </div>
              ) : null}
                  
            </Form>
          </BillingFormWrapper>
          <OrderTable className="isoOrderInfo">
            <div className="isoOrderTable">
              <div className="isoOrderTableHead">
                <span className="tableHead">Product</span>
                <span className="tableHead">Total</span>
              </div>

              <div className="isoOrderTableBody">{renderProducts()}</div>
              <div className="isoOrderTableFooter">
                <span>Sub Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="isoOrderTableFooter">
                <span>Shipping Fees</span>
                <span>$20.00</span>
              </div>
              <div className="isoOrderTableFooter">
                <span>SST</span>
                <span>$00.00</span>
              </div>
              <div className="isoOrderTableFooter">
                <span>Total Amount</span>
                <span>$249.88</span>
              </div>
              {showPaymentbtn ? (<div style={{textAlign: "center", paddingTop: 8}}>
              <Button type="primary" onClick={handlePay}>
                Proceed to Payment
              </Button>
              </div> ) : null}
              {showPlaceorder ? (<div  style={{textAlign: "center", paddingTop: 8}} >
              <Button type="primary" onClick={handlePay}>
                Place Order
              </Button>
              </div> ) : null}
            </div>
          </OrderTable>
        </div>
      </div>
    </Box>
    

    // <BillingFormWrapper className="isoBillingForm">
    //   <div className="InputBox">
    //     <InputBox
    //       label={<IntlMessages id="checkout.billingform.firstname" />}
    //       important
    //     />
    //     <InputBox
    //       label={<IntlMessages id="checkout.billingform.lastname" />}
    //       important
    //     />
    //   </div>

    //   <div className="isoInputFieldset">
    //     <InputBox label={<IntlMessages id="checkout.billingform.company" />} />
    //   </div>

    //   <div className="isoInputFieldset">
    //     <InputBox
    //       label={<IntlMessages id="checkout.billingform.email" />}
    //       important
    //     />
    //     <InputBox label={<IntlMessages id="checkout.billingform.mobile" />} />
    //   </div>

    //   <div className="isoInputFieldset">
    //     <InputBoxWrapper className="isoInputBox">
    //       <label>{<IntlMessages id="checkout.billingform.country" />}</label>
    //       <Select size="large" defaultValue="unitedstate">
    //         <Option value="argentina">Argentina</Option>
    //         <Option value="australia">Australia</Option>
    //         <Option value="brazil">Brazil</Option>
    //         <Option value="france">France</Option>
    //         <Option value="germany">Germany</Option>
    //         <Option value="southafrica">South Africa</Option>
    //         <Option value="spain">Spain</Option>
    //         <Option value="unitedstate">United State</Option>
    //         <Option value="unitedkingdom">United Kingdom</Option>
    //       </Select>
    //     </InputBoxWrapper>

    //     <InputBox label={<IntlMessages id="checkout.billingform.city" />} />
    //   </div>

    //   <div className="isoInputFieldset vertical">
    //     <InputBox
    //       label={<IntlMessages id="checkout.billingform.address" />}
    //       placeholder="Address"
    //     />
    //     <Input
    //       size="large"
    //       placeholder="Apartment, suite, unit etc. (optional)"
    //       style={{ marginTop: '35px' }}
    //     />
    //   </div>

    //   <Checkbox onChange={handleOnChange}>
    //     <IntlMessages id="checkout.billingform.checkbox" />
    //   </Checkbox>
    // </BillingFormWrapper>
  );
}

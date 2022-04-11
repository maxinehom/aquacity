import React from "react";
import { Form, Input, Checkbox, Button, Steps, message, Upload, List, Card, Descriptions, Table, Typography, Row, Col, Divider } from "antd";
import Select, { SelectOption } from "@iso/components/uielements/select";
import { UploadOutlined } from "@ant-design/icons";
import IntlMessages from "@iso/components/utility/intlMessages";
import top_up_images from "@iso/assets/images/sticker/top-up.png";
import logo_images from "@iso/assets/images/logo.png";

import { number } from "prop-types";
import { dropRight } from "lodash-es";
import Wrapper from "./RegistrationForm.styles";
const props = {

  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Step = Steps.Step;

const Option = SelectOption;
function callback(key) {}

function handleChange(value) {
  console.log(`selected ${value}`);
}

const RegistrationForm = () => {
  const [current, setCurrent] = React.useState(0);

  function next() {
    setCurrent((current) => current + 1);
  }
  function prev() {
    setCurrent((current) => current - 1);
  }
  function checkEmpty(event) {
    event.preventDefault();
  }

  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const carddata = [
    {
      title: "Platinum Package",
      price: "4200",
      benefit: "3000",
    },
    {
      title: "Gold Package",
      price: "2100",
      benefit: "1500",
    },
    {
      title: "Silver Package",
      price: "1260",
      benefit: "1500",
    },
    {
      title: "Bronze Package",
      price: "420",
      benefit: "300",
    },
  ];
  //table
  const { Text } = Typography;
  const columns = [
    {
      title: "No",
      dataIndex: "no",
    },
    {
      title: "Product Code",
      dataIndex: "productcode",
    },
    {
      title: "Product Name",
      dataIndex: "productname",
    },
    {
      title: "Package Content",
      dataIndex: "packagecontent",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Price (MYR)",
      dataIndex: "price",
    },
  ];
  const data = [
    {
      no: "1",
      productcode: "SR1",
      productname: "Silver Package",
      packagecontent: "",
      quantity: 1,
      price: 1260.0,
    },
  ];
  // table ^

  const { Meta } = Card;

  const steps = [
    {
      title: "", // Information
      content: (
        <Form
          // {...formItemLayout}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 24 }}
          form={form}
          name="register"
          onFinish={next}
          scrollToFirstError>
          <h2 style={{ marginTop:"30PX" }}>Referrer Information</h2>
          <Divider/>
          <Form.Item style={{ marginTop:"30PX" }} name="referrer_id" 
          label="Referrer ID">
          <Input disabled={true} placeholder="000001" />
          </Form.Item>
          <h2 style={{ marginTop:"30PX" }}>Personal Information</h2>
          <Divider/>
          <Form.Item style={{ marginTop:"30PX" }}
            name="full_name"
            label="Full Name"
            rules={[
              {
                // required: true,
              },
            ]}
            extra="(As per IC/Passport/Other Identity Documents)">
            <Input />
          </Form.Item>

          <Form.Item
            label="Identity Registration No."
            // rules={[{ required: true}]}
          >
            <Input.Group compact>
              <Select defaultValue="ic_num" style={{ width: "30%" }} onChange={handleChange}>
                <Option value="ic_num">Identity Card</Option>
                <Option value="passport_num">Passport</Option>
                <Option value="company_reg_num">Company Register Number</Option>
                <Option value="others_num">Others</Option>
              </Select>
              <Form.Item style={{ width: "70%" }} name="identity_num">
                <Input />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                // required: true,
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Mobile No."
            // rules={[{ required: true }]}
          >
            <Input.Group compact>
              <Form.Item name="country_code" style={{ width: "30%" }}>
                <Select defaultValue="60" style={{ width: "100%" }} onChange={handleChange}>
                  <option data-countryCode="DZ" value="213">
                    Algeria (+213)
                  </option>
                  <option data-countryCode="AD" value="376">
                    Andorra (+376)
                  </option>
                  <option data-countryCode="AO" value="244">
                    Angola (+244)
                  </option>
                  <option data-countryCode="AI" value="1264">
                    Anguilla (+1264)
                  </option>
                  <option data-countryCode="AG" value="1268">
                    Antigua &amp; Barbuda (+1268)
                  </option>
                  <option data-countryCode="AR" value="54">
                    Argentina (+54)
                  </option>
                  <option data-countryCode="AM" value="374">
                    Armenia (+374)
                  </option>
                  <option data-countryCode="AW" value="297">
                    Aruba (+297)
                  </option>
                  <option data-countryCode="AU" value="61">
                    Australia (+61)
                  </option>
                  <option data-countryCode="AT" value="43">
                    Austria (+43)
                  </option>
                  <option data-countryCode="AZ" value="994">
                    Azerbaijan (+994)
                  </option>
                  <option data-countryCode="BS" value="1242">
                    Bahamas (+1242)
                  </option>
                  <option data-countryCode="BH" value="973">
                    Bahrain (+973)
                  </option>
                  <option data-countryCode="BD" value="880">
                    Bangladesh (+880)
                  </option>
                  <option data-countryCode="BB" value="1246">
                    Barbados (+1246)
                  </option>
                  <option data-countryCode="BY" value="375">
                    Belarus (+375)
                  </option>
                  <option data-countryCode="BE" value="32">
                    Belgium (+32)
                  </option>
                  <option data-countryCode="BZ" value="501">
                    Belize (+501)
                  </option>
                  <option data-countryCode="BJ" value="229">
                    Benin (+229)
                  </option>
                  <option data-countryCode="BM" value="1441">
                    Bermuda (+1441)
                  </option>
                  <option data-countryCode="BT" value="975">
                    Bhutan (+975)
                  </option>
                  <option data-countryCode="BO" value="591">
                    Bolivia (+591)
                  </option>
                  <option data-countryCode="BA" value="387">
                    Bosnia Herzegovina (+387)
                  </option>
                  <option data-countryCode="BW" value="267">
                    Botswana (+267)
                  </option>
                  <option data-countryCode="BR" value="55">
                    Brazil (+55)
                  </option>
                  <option data-countryCode="BN" value="673">
                    Brunei (+673)
                  </option>
                  <option data-countryCode="BG" value="359">
                    Bulgaria (+359)
                  </option>
                  <option data-countryCode="BF" value="226">
                    Burkina Faso (+226)
                  </option>
                  <option data-countryCode="BI" value="257">
                    Burundi (+257)
                  </option>
                  <option data-countryCode="KH" value="855">
                    Cambodia (+855)
                  </option>
                  <option data-countryCode="CM" value="237">
                    Cameroon (+237)
                  </option>
                  <option data-countryCode="CA" value="1">
                    Canada (+1)
                  </option>
                  <option data-countryCode="CV" value="238">
                    Cape Verde Islands (+238)
                  </option>
                  <option data-countryCode="KY" value="1345">
                    Cayman Islands (+1345)
                  </option>
                  <option data-countryCode="CF" value="236">
                    Central African Republic (+236)
                  </option>
                  <option data-countryCode="CL" value="56">
                    Chile (+56)
                  </option>
                  <option data-countryCode="CN" value="86">
                    China (+86)
                  </option>
                  <option data-countryCode="CO" value="57">
                    Colombia (+57)
                  </option>
                  <option data-countryCode="KM" value="269">
                    Comoros (+269)
                  </option>
                  <option data-countryCode="CG" value="242">
                    Congo (+242)
                  </option>
                  <option data-countryCode="CK" value="682">
                    Cook Islands (+682)
                  </option>
                  <option data-countryCode="CR" value="506">
                    Costa Rica (+506)
                  </option>
                  <option data-countryCode="HR" value="385">
                    Croatia (+385)
                  </option>
                  <option data-countryCode="CU" value="53">
                    Cuba (+53)
                  </option>
                  <option data-countryCode="CY" value="90392">
                    Cyprus North (+90392)
                  </option>
                  <option data-countryCode="CY" value="357">
                    Cyprus South (+357)
                  </option>
                  <option data-countryCode="CZ" value="42">
                    Czech Republic (+42)
                  </option>
                  <option data-countryCode="DK" value="45">
                    Denmark (+45)
                  </option>
                  <option data-countryCode="DJ" value="253">
                    Djibouti (+253)
                  </option>
                  <option data-countryCode="DM" value="1809">
                    Dominica (+1809)
                  </option>
                  <option data-countryCode="DO" value="1809">
                    Dominican Republic (+1809)
                  </option>
                  <option data-countryCode="EC" value="593">
                    Ecuador (+593)
                  </option>
                  <option data-countryCode="EG" value="20">
                    Egypt (+20)
                  </option>
                  <option data-countryCode="SV" value="503">
                    El Salvador (+503)
                  </option>
                  <option data-countryCode="GQ" value="240">
                    Equatorial Guinea (+240)
                  </option>
                  <option data-countryCode="ER" value="291">
                    Eritrea (+291)
                  </option>
                  <option data-countryCode="EE" value="372">
                    Estonia (+372)
                  </option>
                  <option data-countryCode="ET" value="251">
                    Ethiopia (+251)
                  </option>
                  <option data-countryCode="FK" value="500">
                    Falkland Islands (+500)
                  </option>
                  <option data-countryCode="FO" value="298">
                    Faroe Islands (+298)
                  </option>
                  <option data-countryCode="FJ" value="679">
                    Fiji (+679)
                  </option>
                  <option data-countryCode="FI" value="358">
                    Finland (+358)
                  </option>
                  <option data-countryCode="FR" value="33">
                    France (+33)
                  </option>
                  <option data-countryCode="GF" value="594">
                    French Guiana (+594)
                  </option>
                  <option data-countryCode="PF" value="689">
                    French Polynesia (+689)
                  </option>
                  <option data-countryCode="GA" value="241">
                    Gabon (+241)
                  </option>
                  <option data-countryCode="GM" value="220">
                    Gambia (+220)
                  </option>
                  <option data-countryCode="GE" value="7880">
                    Georgia (+7880)
                  </option>
                  <option data-countryCode="DE" value="49">
                    Germany (+49)
                  </option>
                  <option data-countryCode="GH" value="233">
                    Ghana (+233)
                  </option>
                  <option data-countryCode="GI" value="350">
                    Gibraltar (+350)
                  </option>
                  <option data-countryCode="GR" value="30">
                    Greece (+30)
                  </option>
                  <option data-countryCode="GL" value="299">
                    Greenland (+299)
                  </option>
                  <option data-countryCode="GD" value="1473">
                    Grenada (+1473)
                  </option>
                  <option data-countryCode="GP" value="590">
                    Guadeloupe (+590)
                  </option>
                  <option data-countryCode="GU" value="671">
                    Guam (+671)
                  </option>
                  <option data-countryCode="GT" value="502">
                    Guatemala (+502)
                  </option>
                  <option data-countryCode="GN" value="224">
                    Guinea (+224)
                  </option>
                  <option data-countryCode="GW" value="245">
                    Guinea - Bissau (+245)
                  </option>
                  <option data-countryCode="GY" value="592">
                    Guyana (+592)
                  </option>
                  <option data-countryCode="HT" value="509">
                    Haiti (+509)
                  </option>
                  <option data-countryCode="HN" value="504">
                    Honduras (+504)
                  </option>
                  <option data-countryCode="HK" value="852">
                    Hong Kong (+852)
                  </option>
                  <option data-countryCode="HU" value="36">
                    Hungary (+36)
                  </option>
                  <option data-countryCode="IS" value="354">
                    Iceland (+354)
                  </option>
                  <option data-countryCode="IN" value="91">
                    India (+91)
                  </option>
                  <option data-countryCode="ID" value="62">
                    Indonesia (+62)
                  </option>
                  <option data-countryCode="IR" value="98">
                    Iran (+98)
                  </option>
                  <option data-countryCode="IQ" value="964">
                    Iraq (+964)
                  </option>
                  <option data-countryCode="IE" value="353">
                    Ireland (+353)
                  </option>
                  <option data-countryCode="IL" value="972">
                    Israel (+972)
                  </option>
                  <option data-countryCode="IT" value="39">
                    Italy (+39)
                  </option>
                  <option data-countryCode="JM" value="1876">
                    Jamaica (+1876)
                  </option>
                  <option data-countryCode="JP" value="81">
                    Japan (+81)
                  </option>
                  <option data-countryCode="JO" value="962">
                    Jordan (+962)
                  </option>
                  <option data-countryCode="KZ" value="7">
                    Kazakhstan (+7)
                  </option>
                  <option data-countryCode="KE" value="254">
                    Kenya (+254)
                  </option>
                  <option data-countryCode="KI" value="686">
                    Kiribati (+686)
                  </option>
                  <option data-countryCode="KP" value="850">
                    Korea North (+850)
                  </option>
                  <option data-countryCode="KR" value="82">
                    Korea South (+82)
                  </option>
                  <option data-countryCode="KW" value="965">
                    Kuwait (+965)
                  </option>
                  <option data-countryCode="KG" value="996">
                    Kyrgyzstan (+996)
                  </option>
                  <option data-countryCode="LA" value="856">
                    Laos (+856)
                  </option>
                  <option data-countryCode="LV" value="371">
                    Latvia (+371)
                  </option>
                  <option data-countryCode="LB" value="961">
                    Lebanon (+961)
                  </option>
                  <option data-countryCode="LS" value="266">
                    Lesotho (+266)
                  </option>
                  <option data-countryCode="LR" value="231">
                    Liberia (+231)
                  </option>
                  <option data-countryCode="LY" value="218">
                    Libya (+218)
                  </option>
                  <option data-countryCode="LI" value="417">
                    Liechtenstein (+417)
                  </option>
                  <option data-countryCode="LT" value="370">
                    Lithuania (+370)
                  </option>
                  <option data-countryCode="LU" value="352">
                    Luxembourg (+352)
                  </option>
                  <option data-countryCode="MO" value="853">
                    Macao (+853)
                  </option>
                  <option data-countryCode="MK" value="389">
                    Macedonia (+389)
                  </option>
                  <option data-countryCode="MG" value="261">
                    Madagascar (+261)
                  </option>
                  <option data-countryCode="MW" value="265">
                    Malawi (+265)
                  </option>
                  <option data-countryCode="MY" value="60">
                    Malaysia (+60)
                  </option>
                  <option data-countryCode="MV" value="960">
                    Maldives (+960)
                  </option>
                  <option data-countryCode="ML" value="223">
                    Mali (+223)
                  </option>
                  <option data-countryCode="MT" value="356">
                    Malta (+356)
                  </option>
                  <option data-countryCode="MH" value="692">
                    Marshall Islands (+692)
                  </option>
                  <option data-countryCode="MQ" value="596">
                    Martinique (+596)
                  </option>
                  <option data-countryCode="MR" value="222">
                    Mauritania (+222)
                  </option>
                  <option data-countryCode="YT" value="269">
                    Mayotte (+269)
                  </option>
                  <option data-countryCode="MX" value="52">
                    Mexico (+52)
                  </option>
                  <option data-countryCode="FM" value="691">
                    Micronesia (+691)
                  </option>
                  <option data-countryCode="MD" value="373">
                    Moldova (+373)
                  </option>
                  <option data-countryCode="MC" value="377">
                    Monaco (+377)
                  </option>
                  <option data-countryCode="MN" value="976">
                    Mongolia (+976)
                  </option>
                  <option data-countryCode="MS" value="1664">
                    Montserrat (+1664)
                  </option>
                  <option data-countryCode="MA" value="212">
                    Morocco (+212)
                  </option>
                  <option data-countryCode="MZ" value="258">
                    Mozambique (+258)
                  </option>
                  <option data-countryCode="MN" value="95">
                    Myanmar (+95)
                  </option>
                  <option data-countryCode="NA" value="264">
                    Namibia (+264)
                  </option>
                  <option data-countryCode="NR" value="674">
                    Nauru (+674)
                  </option>
                  <option data-countryCode="NP" value="977">
                    Nepal (+977)
                  </option>
                  <option data-countryCode="NL" value="31">
                    Netherlands (+31)
                  </option>
                  <option data-countryCode="NC" value="687">
                    New Caledonia (+687)
                  </option>
                  <option data-countryCode="NZ" value="64">
                    New Zealand (+64)
                  </option>
                  <option data-countryCode="NI" value="505">
                    Nicaragua (+505)
                  </option>
                  <option data-countryCode="NE" value="227">
                    Niger (+227)
                  </option>
                  <option data-countryCode="NG" value="234">
                    Nigeria (+234)
                  </option>
                  <option data-countryCode="NU" value="683">
                    Niue (+683)
                  </option>
                  <option data-countryCode="NF" value="672">
                    Norfolk Islands (+672)
                  </option>
                  <option data-countryCode="NP" value="670">
                    Northern Marianas (+670)
                  </option>
                  <option data-countryCode="NO" value="47">
                    Norway (+47)
                  </option>
                  <option data-countryCode="OM" value="968">
                    Oman (+968)
                  </option>
                  <option data-countryCode="PW" value="680">
                    Palau (+680)
                  </option>
                  <option data-countryCode="PA" value="507">
                    Panama (+507)
                  </option>
                  <option data-countryCode="PG" value="675">
                    Papua New Guinea (+675)
                  </option>
                  <option data-countryCode="PY" value="595">
                    Paraguay (+595)
                  </option>
                  <option data-countryCode="PE" value="51">
                    Peru (+51)
                  </option>
                  <option data-countryCode="PH" value="63">
                    Philippines (+63)
                  </option>
                  <option data-countryCode="PL" value="48">
                    Poland (+48)
                  </option>
                  <option data-countryCode="PT" value="351">
                    Portugal (+351)
                  </option>
                  <option data-countryCode="PR" value="1787">
                    Puerto Rico (+1787)
                  </option>
                  <option data-countryCode="QA" value="974">
                    Qatar (+974)
                  </option>
                  <option data-countryCode="RE" value="262">
                    Reunion (+262)
                  </option>
                  <option data-countryCode="RO" value="40">
                    Romania (+40)
                  </option>
                  <option data-countryCode="RU" value="7">
                    Russia (+7)
                  </option>
                  <option data-countryCode="RW" value="250">
                    Rwanda (+250)
                  </option>
                  <option data-countryCode="SM" value="378">
                    San Marino (+378)
                  </option>
                  <option data-countryCode="ST" value="239">
                    Sao Tome &amp; Principe (+239)
                  </option>
                  <option data-countryCode="SA" value="966">
                    Saudi Arabia (+966)
                  </option>
                  <option data-countryCode="SN" value="221">
                    Senegal (+221)
                  </option>
                  <option data-countryCode="CS" value="381">
                    Serbia (+381)
                  </option>
                  <option data-countryCode="SC" value="248">
                    Seychelles (+248)
                  </option>
                  <option data-countryCode="SL" value="232">
                    Sierra Leone (+232)
                  </option>
                  <option data-countryCode="SG" value="65">
                    Singapore (+65)
                  </option>
                  <option data-countryCode="SK" value="421">
                    Slovak Republic (+421)
                  </option>
                  <option data-countryCode="SI" value="386">
                    Slovenia (+386)
                  </option>
                  <option data-countryCode="SB" value="677">
                    Solomon Islands (+677)
                  </option>
                  <option data-countryCode="SO" value="252">
                    Somalia (+252)
                  </option>
                  <option data-countryCode="ZA" value="27">
                    South Africa (+27)
                  </option>
                  <option data-countryCode="ES" value="34">
                    Spain (+34)
                  </option>
                  <option data-countryCode="LK" value="94">
                    Sri Lanka (+94)
                  </option>
                  <option data-countryCode="SH" value="290">
                    St. Helena (+290)
                  </option>
                  <option data-countryCode="KN" value="1869">
                    St. Kitts (+1869)
                  </option>
                  <option data-countryCode="SC" value="1758">
                    St. Lucia (+1758)
                  </option>
                  <option data-countryCode="SD" value="249">
                    Sudan (+249)
                  </option>
                  <option data-countryCode="SR" value="597">
                    Suriname (+597)
                  </option>
                  <option data-countryCode="SZ" value="268">
                    Swaziland (+268)
                  </option>
                  <option data-countryCode="SE" value="46">
                    Sweden (+46)
                  </option>
                  <option data-countryCode="CH" value="41">
                    Switzerland (+41)
                  </option>
                  <option data-countryCode="SI" value="963">
                    Syria (+963)
                  </option>
                  <option data-countryCode="TW" value="886">
                    Taiwan (+886)
                  </option>
                  <option data-countryCode="TJ" value="7">
                    Tajikstan (+7)
                  </option>
                  <option data-countryCode="TH" value="66">
                    Thailand (+66)
                  </option>
                  <option data-countryCode="TG" value="228">
                    Togo (+228)
                  </option>
                  <option data-countryCode="TO" value="676">
                    Tonga (+676)
                  </option>
                  <option data-countryCode="TT" value="1868">
                    Trinidad &amp; Tobago (+1868)
                  </option>
                  <option data-countryCode="TN" value="216">
                    Tunisia (+216)
                  </option>
                  <option data-countryCode="TR" value="90">
                    Turkey (+90)
                  </option>
                  <option data-countryCode="TM" value="7">
                    Turkmenistan (+7)
                  </option>
                  <option data-countryCode="TM" value="993">
                    Turkmenistan (+993)
                  </option>
                  <option data-countryCode="TC" value="1649">
                    Turks &amp; Caicos Islands (+1649)
                  </option>
                  <option data-countryCode="TV" value="688">
                    Tuvalu (+688)
                  </option>
                  <option data-countryCode="UG" value="256">
                    Uganda (+256)
                  </option>
                  <option data-countryCode="GB" value="44">
                    UK (+44)
                  </option>
                  <option data-countryCode="UA" value="380">
                    Ukraine (+380)
                  </option>
                  <option data-countryCode="AE" value="971">
                    United Arab Emirates (+971)
                  </option>
                  <option data-countryCode="UY" value="598">
                    Uruguay (+598)
                  </option>
                  <option data-countryCode="US" value="1">
                    USA (+1)
                  </option>
                  <option data-countryCode="UZ" value="7">
                    Uzbekistan (+7)
                  </option>
                  <option data-countryCode="VU" value="678">
                    Vanuatu (+678)
                  </option>
                  <option data-countryCode="VA" value="379">
                    Vatican City (+379)
                  </option>
                  <option data-countryCode="VE" value="58">
                    Venezuela (+58)
                  </option>
                  <option data-countryCode="VN" value="84">
                    Vietnam (+84)
                  </option>
                  <option data-countryCode="VG" value="84">
                    Virgin Islands - British (+1284)
                  </option>
                  <option data-countryCode="VI" value="84">
                    Virgin Islands - US (+1340)
                  </option>
                  <option data-countryCode="WF" value="681">
                    Wallis &amp; Futuna (+681)
                  </option>
                  <option data-countryCode="YE" value="969">
                    Yemen (North)(+969)
                  </option>
                  <option data-countryCode="YE" value="967">
                    Yemen (South)(+967)
                  </option>
                  <option data-countryCode="ZM" value="260">
                    Zambia (+260)
                  </option>
                  <option data-countryCode="ZW" value="263">
                    Zimbabwe (+263)
                  </option>
                </Select>
              </Form.Item>
              <Form.Item
                name="mobile_num"
                style={{ width: "70%" }}
                rules={[
                  {
                    // required: true,
                  },
                ]}>
                <Input />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <h2 style={{ marginBottom:"30PX" }} >Address Information</h2>
          <Divider/>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                // required: true,
              },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item name="country" label="Country">
            <Select defaultValue="Malaysia" style={{ width: "100%" }}>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Åland Islands">Åland Islands</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Christmas Island">Christmas Island</option>
              <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cote D'ivoire">Cote D'ivoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Guiana">French Guiana</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="French Southern Territories">French Southern Territories</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guadeloupe">Guadeloupe</option>
              <option value="Guam">Guam</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guernsey">Guernsey</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea-bissau">Guinea-bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
              <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
              <option value="Honduras">Honduras</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
              <option value="Korea, Republic of">Korea, Republic of</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Macao">Macao</option>
              <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Martinique">Martinique</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mayotte">Mayotte</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
              <option value="Moldova, Republic of">Moldova, Republic of</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="New Caledonia">New Caledonia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Niue">Niue</option>
              <option value="Norfolk Island">Norfolk Island</option>
              <option value="Northern Mariana Islands">Northern Mariana Islands</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Pitcairn">Pitcairn</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Reunion">Reunion</option>
              <option value="Romania">Romania</option>
              <option value="Russian Federation">Russian Federation</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Saint Helena">Saint Helena</option>
              <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
              <option value="Saint Lucia">Saint Lucia</option>
              <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
              <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
              <option value="Samoa">Samoa</option>
              <option value="San Marino">San Marino</option>
              <option value="Sao Tome and Principe">Sao Tome and Principe</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Senegal">Senegal</option>
              <option value="Serbia">Serbia</option>
              <option value="Seychelles">Seychelles</option>
              <option value="Sierra Leone">Sierra Leone</option>
              <option value="Singapore">Singapore</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Solomon Islands">Solomon Islands</option>
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option>
              <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
              <option value="Spain">Spain</option>
              <option value="Sri Lanka">Sri Lanka</option>
              <option value="Sudan">Sudan</option>
              <option value="Suriname">Suriname</option>
              <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Syrian Arab Republic">Syrian Arab Republic</option>
              <option value="Taiwan">Taiwan</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
              <option value="Thailand">Thailand</option>
              <option value="Timor-leste">Timor-leste</option>
              <option value="Togo">Togo</option>
              <option value="Tokelau">Tokelau</option>
              <option value="Tonga">Tonga</option>
              <option value="Trinidad and Tobago">Trinidad and Tobago</option>
              <option value="Tunisia">Tunisia</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Viet Nam">Viet Nam</option>
              <option value="Virgin Islands, British">Virgin Islands, British</option>
              <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
              <option value="Wallis and Futuna">Wallis and Futuna</option>
              <option value="Western Sahara">Western Sahara</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
            </Select>
          </Form.Item>
          <Form.Item
            name="postcode"
            label="Postcode"
            rules={[
              {
                // required: true,
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="state"
            label="State"
            rules={[
              {
                // required: true,
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="city"
            label="City"
            rules={[
              {
                // required: true,
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item className="steps-action" style={{ textAlign: "center", paddingTop: 15 }}>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: "", //ADD-ON SERVICES & PRICING
      content: (
        <Form form={form} labelCol={{ span: 6 }} wrapperCol={{ span: 24 }} name="register" onFinish={next} scrollToFirstError>
          <h2 style={{ marginTop:"30PX" }}>Choose Product</h2>
      <Divider/>
          <Form.Item name="pricing"
          style={{ marginTop:"30PX" }}>
           
            <List
              grid={{ gutter: 20, xs:1 , sm:2, md:2, lg:2, xl:2, xxl:2}}
              dataSource={carddata}
              renderItem={(item) => (
                
                <List.Item style={{ paddingTop: 10 }}>
                  <Card hoverable>
                  <Row gutter={[40,16]} justify="end">
                  <Col xs={24} sm={24} md={12} lg={12} xl={12} className="colstyle"><img className="logoImage" alt="/" src={logo_images}/></Col>
                  <Col xs={24} sm={24} md={12} lg={12} xl={12} className="colstyle">
                  <Descriptions
                      // title="Custom Size"
                      layout="vertical"
                      column={1}
                    >
                      <Descriptions.Item className="resgistrationTitle">{item.title}</Descriptions.Item>
                      <Descriptions.Item className="resgistrationLabel" label="Price (MYR)">{item.price}</Descriptions.Item>
                      <Descriptions.Item className="resgistrationLabel" label="benefit">{item.benefit}</Descriptions.Item>
                    </Descriptions>  
                    <Button style={{ marginTop:"10PX", backgroundColor:"darkblue", color:"white", borderRadius:"10px"}} className="buttons" onClick={next}>
                      Select
                    </Button>
                  </Col>
                  </Row>
                  </Card>
                </List.Item> 
                
              )}
            />
           
          </Form.Item> 
          {/* <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Should accept agreement"),
              },
            ]}
          >
            <Checkbox>
              I have read the <a href="/">agreement</a>
            </Checkbox>
          </Form.Item> */}
          <Form.Item className="steps-action" style={{ textAlign: "center", paddingTop: 15 }}>
            <Button onClick={prev}>Previous</Button>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
              Next
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      title: "", //SETTLEMENT INFO & OTHERS
      content: (
        <Form
          // {...formItemLayout}
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 24 }}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError>
          {" "}
          <h2 style={{ marginTop:"30PX" }}>Payment Details</h2>
          <Divider/>
          <Table
          style={{ marginTop:"30PX" }} 
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
            summary={(pageData) => {
              let totalBorrow = 0;
              let totalRepayment = 0;

              pageData.forEach(({ borrow, repayment }) => {
                totalBorrow += borrow;
                totalRepayment += repayment;
              });

              return (
                <>
                  {/* <Table.Summary.Row>
                    <Table.Summary.Cell>SubTotal</Table.Summary.Cell>
                    <Table.Summary.Cell>
                      <Text type="danger">{totalBorrow}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell>
                      <Text>{totalRepayment}</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell>Shipping Fees</Table.Summary.Cell>
                    <Table.Summary.Cell>
                      <Text type="danger">{totalBorrow}</Text>
                    </Table.Summary.Cell>
                    <Table.Summary.Cell>
                      <Text>{totalRepayment}</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row> */}
                  <Table.Summary.Row>
                    <Table.Summary.Cell colSpan={5} align="right">
                      Sub Total
                    </Table.Summary.Cell>
                    <Table.Summary.Cell>
                      <Text type="default">1260</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell colSpan={5} align="right">
                      Shipping Fees
                    </Table.Summary.Cell>
                    <Table.Summary.Cell>
                      <Text type="default">20</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                  <Table.Summary.Row>
                    <Table.Summary.Cell colSpan={5} align="right">
                      Total Amount
                    </Table.Summary.Cell>
                    <Table.Summary.Cell>
                      <Text type="default">1280</Text>
                    </Table.Summary.Cell>
                  </Table.Summary.Row>
                </>
              );
            }}
          />
          <h2 style={{ marginTop:"30PX" }}  >Member Details Comfirmation</h2>
          <Divider/>
          <Form.Item style={{ marginTop:"30PX" }}
            name="referrer_id"
            label="Referrer ID"
            rules={[
              {
                // required: true,
              },
            ]}>
            {" "}
            <Input placeholder="" />
          </Form.Item>
          <Form.Item
            name="placement_id"
            label="Placement ID"
            rules={[
              {
                // required: true,
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                // required: true,
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="identity_card_number"
            label="Identity Card Number"
            rules={[
              {
                // required: true,
              },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email">
            {/* <Input placeholder="To be filled by your introducer" /> */}
            <Input />
          </Form.Item>
          <Form.Item name="mobile_no" label="Mobile No">
            <Input />
            {/* <Select defaultValue="No" style={{ width: "100%" }}>
              <Option value="no">No</Option>
              <Option value="yes">Yes</Option>
            </Select> */}
          </Form.Item>
          <h2 style={{ marginTop:"30PX" }}>Shipping Method</h2>
          <Divider/>
          <Form.Item style={{ marginTop:"30PX" }}
            name="shipping_method"
            label="Shipping Method"
            rules={[
              {
                // required: true,
              },
            ]}>
            <Select defaultValue="Select Shipment Method" style={{ width: "100%" }}>
              <option value="Self Pick Up">Self Pick Up</option>
              <option value="Delivery">Delivery</option>
            </Select>
          </Form.Item>
          <Form.Item
            name="S_A_RA"
            valuePropName="checked"
            label="Same As Residential Address"
            rules={[
              {
                validator: (_, value) => (value ? Promise.resolve() : Promise.reject("Should accept agreement")),
              },
            ]}>
            <Checkbox></Checkbox>
          </Form.Item>
          <Form.Item
            name="shipping_name"
            label="Shipping Name"
            rules={[
              {
                // required: true,
              },
            ]}>
            {" "}
            <Input placeholder="" />
          </Form.Item>
          <Form.Item
            name="shipping_contact_no"
            label="Shipping Contact No"
            rules={[
              {
                // required: true,
              },
            ]}>
            {" "}
            <Input placeholder="" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                // required: true,
              },
            ]}>
            {" "}
            <Input placeholder="" />
          </Form.Item>
          <Form.Item
            name="shipping_address"
            label="Shipping Address"
            rules={[
              {
                // required: true,
              },
            ]}>
            {" "}
            <Input placeholder="" />
          </Form.Item>
          <Form.Item
            name="shipping_posscode"
            label="Shipping Posscode"
            rules={[
              {
                // required: true,
              },
            ]}>
            {" "}
            <Input placeholder="" />
          </Form.Item>
          <Form.Item
            name="shipping_city"
            label="Shipping City"
            rules={[
              {
                // required: true,
              },
            ]}>
            {" "}
            <Input placeholder="" />
          </Form.Item>
          <Form.Item
            name="shipping_country"
            label="Shipping Country"
            rules={[
              {
                // required: true,
              },
            ]}>
            {" "}
            <Select defaultValue="QATAR" style={{ width: "100%" }}>
              <option value="1">AFGHANISTAN</option>
              <option value="2">ALBANIA</option>
              <option value="3">ALGERIA</option>
              <option value="4">AMERICAN SAMOA</option>
              <option value="5">ANDORRA</option>
              <option value="6">ANGOLA</option>
              <option value="7">ANGUILLA</option>
              <option value="8">ANTARCTICA</option>
              <option value="9">ANTIGUA AND BARBUDA</option>
              <option value="10">ARGENTINA</option>
              <option value="11">ARMENIA</option>
              <option value="12">ARUBA</option>
              <option value="13">AUSTRALIA</option>
              <option value="14">AUSTRIA</option>
              <option value="15">AZERBAIJAN</option>
              <option value="16">BAHAMAS</option>
              <option value="17">BAHRAIN</option>
              <option value="18">BANGLADESH</option>
              <option value="19">BARBADOS</option>
              <option value="20">BELARUS</option>
              <option value="21">BELGIUM</option>
              <option value="22">BELIZE</option>
              <option value="23">BENIN</option>
              <option value="24">BERMUDA</option>
              <option value="25">BHUTAN</option>
              <option value="26">BOLIVIA</option>
              <option value="27">BOSNIA AND HERZEGOVINA</option>
              <option value="28">BOTSWANA</option>
              <option value="29">BOUVET ISLAND</option>
              <option value="30">BRAZIL</option>
              <option value="31">BRITISH INDIAN OCEAN TERRITORY</option>
              <option value="32">BRITISH VIRGIN ISLANDS</option>
              <option value="33">BRUNEI</option>
              <option value="34">BULGARIA</option>
              <option value="35">BURKINA FASO</option>
              <option value="36">BURUNDI</option>
              <option value="37">CAMBODIA</option>
              <option value="38">CAMEROON</option>
              <option value="39">CANADA</option>
              <option value="40">CAPE VERDE</option>
              <option value="41">CAYMAN ISLANDS</option>
              <option value="42">CENTRAL AFRICAN REPUBLIC</option>
              <option value="43">CHAD</option>
              <option value="44">CHILE</option>
              <option value="45">CHINA</option>
              <option value="46">CHRISTMAS ISLAND</option>
              <option value="47">COCOS ISLANDS</option>
              <option value="48">COLOMBIA</option>
              <option value="49">COMOROS</option>
              <option value="50">COOK ISLANDS</option>
              <option value="51">COSTA RICA</option>
              <option value="52">CROATIA</option>
              <option value="53">CUBA</option>
              <option value="54">CYPRUS</option>
              <option value="55">CZECH REPUBLIC</option>
              <option value="56">DEMOCRATIC REPUBLIC OF THE CONGO</option>
              <option value="57">DENMARK</option>
              <option value="58">DJIBOUTI</option>
              <option value="59">DOMINICA</option>
              <option value="60">DOMINICAN REPUBLIC</option>
              <option value="61">EAST TIMOR</option>
              <option value="62">ECUADOR</option>
              <option value="63">EGYPT</option>
              <option value="64">EL SALVADOR</option>
              <option value="65">EQUATORIAL GUINEA</option>
              <option value="66">ERITREA</option>
              <option value="67">ESTONIA</option>
              <option value="68">ETHIOPIA</option>
              <option value="69">FALKLAND ISLANDS</option>
              <option value="70">FAROE ISLANDS</option>
              <option value="71">FIJI</option>
              <option value="72">FINLAND</option>
              <option value="73">FRANCE</option>
              <option value="74">FRENCH GUIANA</option>
              <option value="75">FRENCH POLYNESIA</option>
              <option value="77">GABON</option>
              <option value="78">GAMBIA</option>
              <option value="79">GEORGIA</option>
              <option value="80">GERMANY</option>
              <option value="81">GHANA</option>
              <option value="82">GIBRALTAR</option>
              <option value="83">GREECE</option>
              <option value="84">GREENLAND</option>
              <option value="85">GRENADA</option>
              <option value="86">GUADELOUPE</option>
              <option value="87">GUAM</option>
              <option value="88">GUATEMALA</option>
              <option value="89">GUINEA</option>
              <option value="90">GUINEA-BISSAU</option>
              <option value="91">GUYANA</option>
              <option value="92">HAITI</option>
              <option value="93">HEARD ISLAND AND MCDONALD ISLANDS</option>
              <option value="94">HONDURAS</option>
              <option value="95">HONG KONG</option>
              <option value="96">HUNGARY</option>
              <option value="97">ICELAND</option>
              <option value="98">INDIA</option>
              <option value="99">INDONESIA</option>
              <option value="100">IRAN</option>
              <option value="101">IRAQ</option>
              <option value="102">IRELAND</option>
              <option value="103">ISRAEL</option>
              <option value="104">ITALY</option>
              <option value="105">IVORY COAST</option>
              <option value="106">JAMAICA</option>
              <option value="107">JAPAN</option>
              <option value="108">JORDAN</option>
              <option value="109">KAZAKHSTAN</option>
              <option value="110">KENYA</option>
              <option value="111">KIRIBATI</option>
              <option value="112">KUWAIT</option>
              <option value="113">KYRGYZSTAN</option>
              <option value="114">LAOS</option>
              <option value="115">LATVIA</option>
              <option value="116">LEBANON</option>
              <option value="117">LESOTHO</option>
              <option value="118">LIBERIA</option>
              <option value="119">LIBYA</option>
              <option value="120">LIECHTENSTEIN</option>
              <option value="121">LITHUANIA</option>
              <option value="122">LUXEMBOURG</option>
              <option value="123">MACAU</option>
              <option value="124">MACEDONIA</option>
              <option value="125">MADAGASCAR</option>
              <option value="126">MALAWI</option>
              <option value="127">MALAYSIA</option>
              <option value="128">MALDIVES</option>
              <option value="129">MALI</option>
              <option value="130">MALTA</option>
              <option value="131">MARSHALL ISLANDS</option>
              <option value="132">MARTINIQUE</option>
              <option value="133">MAURITANIA</option>
              <option value="134">MAURITIUS</option>
              <option value="135">MAYOTTE</option>
              <option value="136">MEXICO</option>
              <option value="137">MICRONESIA</option>
              <option value="138">MOLDOVA</option>
              <option value="139">MONACO</option>
              <option value="140">MONGOLIA</option>
              <option value="141">MONTSERRAT</option>
              <option value="142">MOROCCO</option>
              <option value="143">MOZAMBIQUE</option>
              <option value="144">MYANMAR</option>
              <option value="145">NAMIBIA</option>
              <option value="146">NAURU</option>
              <option value="147">NEPAL</option>
              <option value="148">NETHERLANDS</option>
              <option value="149">NETHERLANDS ANTILLES</option>
              <option value="150">NEW CALEDONIA</option>
              <option value="151">NEW ZEALAND</option>
              <option value="152">NICARAGUA</option>
              <option value="153">NIGER</option>
              <option value="154">NIGERIA</option>
              <option value="155">NIUE</option>
              <option value="156">NORFOLK ISLAND</option>
              <option value="157">NORTH KOREA</option>
              <option value="158">NORTHERN MARIANA ISLANDS</option>
              <option value="159">NORWAY</option>
              <option value="160">OMAN</option>
              <option value="161">PAKISTAN</option>
              <option value="162">PALAU</option>
              <option value="163">PALESTINIAN TERRITORY</option>
              <option value="164">PANAMA</option>
              <option value="165">PAPUA NEW GUINEA</option>
              <option value="166">PARAGUAY</option>
              <option value="167">PERU</option>
              <option value="168">PHILIPPINES</option>
              <option value="169">PITCAIRN</option>
              <option value="170">POLAND</option>
              <option value="171">PORTUGAL</option>
              <option value="172">PUERTO RICO</option>
              <option value="173">QATAR</option>
              <option value="174">REPUBLIC OF THE CONGO</option>
              <option value="175">REUNION</option>
              <option value="176">ROMANIA</option>
              <option value="177">RUSSIA</option>
              <option value="178">RWANDA</option>
              <option value="179">SAINT HELENA</option>
              <option value="180">SAINT KITTS AND NEVIS</option>
              <option value="181">SAINT LUCIA</option>
              <option value="182">SAINT PIERRE AND MIQUELON</option>
              <option value="183">SAINT VINCENT AND THE GRENADINES</option>
              <option value="184">SAMOA</option>
              <option value="185">SAN MARINO</option>
              <option value="186">SAO TOME AND PRINCIPE</option>
              <option value="187">SAUDI ARABIA</option>
              <option value="188">SENEGAL</option>
              <option value="189">SERBIA AND MONTENEGRO</option>
              <option value="190">SEYCHELLES</option>
              <option value="191">SIERRA LEONE</option>
              <option value="192">SINGAPORE</option>
              <option value="193">SLOVAKIA</option>
              <option value="194">SLOVENIA</option>
              <option value="195">SOLOMON ISLANDS</option>
              <option value="196">SOMALIA</option>
              <option value="197">SOUTH AFRICA</option>
              <option value="198">SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS</option>
              <option value="199">SOUTH KOREA</option>
              <option value="200">SPAIN</option>
              <option value="201">SRI LANKA</option>
              <option value="202">SUDAN</option>
              <option value="203">SURINAME</option>
              <option value="204">SVALBARD AND JAN MAYEN</option>
              <option value="205">SWAZILAND</option>
              <option value="206">SWEDEN</option>
              <option value="207">SWITZERLAND</option>
              <option value="208">SYRIA</option>
              <option value="209">TAIWAN</option>
              <option value="210">TAJIKISTAN</option>
              <option value="211">TANZANIA</option>
              <option value="212">THAILAND</option>
              <option value="213">TOGO</option>
              <option value="214">TOKELAU</option>
              <option value="215">TONGA</option>
              <option value="216">TRINIDAD AND TOBAGO</option>
              <option value="217">TUNISIA</option>
              <option value="218">TURKEY</option>
              <option value="219">TURKMENISTAN</option>
              <option value="220">TURKS AND CAICOS ISLANDS</option>
              <option value="221">TUVALU</option>
              <option value="222">U.S. VIRGIN ISLANDS</option>
              <option value="223">UGANDA</option>
              <option value="224">UKRAINE</option>
              <option value="225">UNITED ARAB EMIRATES</option>
              <option value="226">UNITED KINGDOM</option>
              <option value="227">UNITED STATES</option>
              <option value="228">UNITED STATES MINOR OUTLYING ISLANDS</option>
              <option value="229">URUGUAY</option>
              <option value="230">UZBEKISTAN</option>
              <option value="231">VANUATU</option>
              <option value="232">VATICAN</option>
              <option value="233">VENEZUELA</option>
              <option value="234">VIETNAM</option>
              <option value="235">WALLIS AND FUTUNA</option>
              <option value="236">WESTERN SAHARA</option>
              <option value="237">YEMEN</option>
              <option value="238">ZAMBIA</option>
              <option value="239">ZIMBABWE</option>
            </Select>
          </Form.Item>
          <Form.Item
            name="shipping_state"
            label="Shipping State"
            rules={[
              {
                // required: true,
              },
            ]}>
            {" "}
            <Select defaultValue="OTHER" style={{ width: "100%" }}>
              <option value="OTHER">OTHER</option>
              {/* <option value="Delivery">Delivery</option> */}
            </Select>
          </Form.Item>
          <h2 style={{ marginTop:"30PX" }}>Payment Method</h2>
          <Divider/>
          <Form.Item
            style={{ marginTop:"30PX" }}
            name="payment_method"
            label="Payment Method"
            rules={[
              {
                // required: true,
              },
            ]}>
            {" "}
            <Select defaultValue="Select Payment Method" style={{ width: "100%" }}>
              <option value="Online Payment">Online Payment</option>
              {/* <option value="Delivery">Delivery</option> */}
            </Select>
          </Form.Item>
          <Form.Item name="upload_receipt" label=" " colon={false}>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
          <Form.Item
            className="steps-action"
            style={{ textAlign: "center", paddingTop: 15 }}
            // labelCol={{offset:10}}
          >
            <Button onClick={prev}>Previous</Button>
            <Button type="primary" htmlType="submit" style={{ marginLeft: 8 }}>
              Next
            </Button>
          </Form.Item>
        </Form>
      ),
    },
  ];

  return (
    <Wrapper>
    <div className="contentHolder" style={{ width: "100%" }}>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <div s="steps-content">{steps[current].content}</div>
      {/* <div
        className="steps-action"
        style={{ textAlign: "center", paddingTop: 15 }}
      >
        {current > 0 && <Button onClick={prev}>Previous</Button>}
        {current < steps.length - 1 && (
          <Button
            style={{ marginLeft: 8 }}
            type="primary"
            onClick={next}
            htmlType="submit"
          >
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            style={{ marginLeft: 8 }}
            type="submit"
            onClick={() => message.success("Application completed!")}
          >
            Done
          </Button>
        )}
      </div> */}
    </div></Wrapper>
  );
};

export default RegistrationForm;

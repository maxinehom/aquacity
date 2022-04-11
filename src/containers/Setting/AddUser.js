import React from "react";
import Wrapper, { ContentWrapper } from "./Setting.styles";
import LayoutContent from "@iso/components/utility/layoutContent";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import { Form, Input, Row, Col, Select, Checkbox, Divider, Button } from 'antd';
import PageHeader from "@iso/components/utility/pageHeader";
import IntlMessages from "@iso/components/utility/intlMessages";
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


const { Option } = Select;
const AddProduct = () => {
  const onFinish = (values) => {
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
  return (
    <LayoutWrapper>
      
        <Wrapper>
          
            <Form 
            colon={false}  
            layout='vertical' 
            name='add_product' 
            size='default' 
            wrapperCol={24} 
            onFinish={onFinish} 
            
            >
            <h2>User Basic Information</h2>
            <Divider/>
            <Row gutter={[16, 16]} justify="center">    
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name="user_type"
                    label="User Type"
                    rules={[
                      {
                        required: true,
                        message: 'Please select user type!',
                      },
                    ]}
                  >
                    <Select placeholder="Please Select">
                      <Option value="active">Active</Option>
                      <Option value="suspended">Suspended</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name='user_id'
                    label='User ID'
                    rules={[
                      {
                        required: true,
                        message: 'Please input User ID!',
                      },
                    ]}
                  >
                    <Input/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name='user_name'
                    label='User Name'
                    rules={[
                      {
                        required: true,
                        message: 'Please input User Name!',
                      },
                    ]}
                  >
                    <Input/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name='user_name'
                    label='User Name'
                    rules={[
                      {
                        type:"email",
                        required: true,
                        message: 'Please input Email!',
                      },
                    ]}
                  >
                    <Input/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name='login_pw'
                    label='Login Password'
                    extra="Atleast 6 numbers."
                    rules={[
                      {
                        required: true,
                        message: 'Please input Login Password!',
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name='confirm_pw'
                    label='Confirm Password'
                    dependencies={['login_pw']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name='ic_num'
                    label='Identity Card Number'
                    rules={[
                      {                
                        required: true,
                        message: 'Please input IC Number!',
                      },
                    ]}
                  >
                    <Input/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                  <Form.Item
                    name='mobile_num'
                    label='Mobile Phone Number'
                    rules={[
                      {
                        required: true,
                        message: 'Please input Mobile Phone Number!',
                      },
                    ]}
                  >
                    <Input/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  name="shipping_country"
                  label="Shipping Country"
                  rules={[
                    {
                      required: true,
                    },
                  ]}>
                  {" "}
                  <Select placeholder="Please Select" style={{ width: "100%" }}>
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
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}></Col>
            </Row>
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Form.Item wrapperCol={{ offset: 11, span: 24 }}>
                  <Button type="primary" htmlType="submit" style={{width: 100, height:30, fontWeight:'500'}}>
                    Add
                  </Button>
                </Form.Item>
              </Col>
            </Row>
            </Form>
         
        </Wrapper>
    </LayoutWrapper>
  );
};
export default AddProduct;

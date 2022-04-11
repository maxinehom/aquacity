import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from "@iso/components/uielements/checkbox";
import IntlMessages from "@iso/components/utility/intlMessages";
import authAction from "@iso/redux/auth/actions";
import appAction from "@iso/redux/app/actions";
import SignInStyleWrapper from "./SignIn.styles";
import { Form, Button, Input, Spin } from 'antd';
import {PageGlobalStyleWrapper} from "../../pageGlobal.styles"
/*Images component*/
import logoImage from "@iso/assets/images/logo.png";
import bgImage from "@iso/assets/images/login-bg.png";

const { login } = authAction;
const { clearMenu } = appAction;

export default function SignIn() {
  const [btnsignin, setbtnsignin] = React.useState(false);
  var crypto = require("crypto");

  let history = useHistory();
  let location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.Auth.idToken);

  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  React.useEffect(() => {
    if (isLoggedIn) {
      setRedirectToReferrer(true);
    }
  }, [isLoggedIn]);
  const Loading = () => {
    return <Spin size="large" />;
  };
  function handleLogin(values, token = false) {
    setbtnsignin(true)
        setTimeout(
            () => setbtnsignin(false),
            3000
        );
    var username = values.username;
    var password = values.password;
    var tokenString = username + process.env.REACT_APP_KEY + password;

    const accessToken = crypto
      .createHash("sha256")
      .update(tokenString)
      .digest("hex");
    var data = JSON.stringify({
      username: username,
      password: password,
      signature: accessToken.toUpperCase(),
    });
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(process.env.REACT_APP_API_KEY + "/token/GetToken", requestOptions)
      .then(async (response) => {
        const data = await response.data;
        if (data.code == 200) {
          Loading();

          localStorage.setItem("accessToken", data.result);
          if (token) {
            dispatch(login(token));
          } else {
            dispatch(login());
          }
          dispatch(clearMenu());
          history.push("/dashboard");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong password or username!",
          });
        }
      })
      .catch(function (error) {
        alert(error);
      });
  }

  let { from } = location.state || { from: { pathname: "/dashboard" } };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }
  return (
    <PageGlobalStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <img className="bgImageMd" alt="#" src={bgImage} />
        
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">
              {/* <IntlMessages id="page.signInTitle" /> */}
              <img className="logoImage" alt="#" src={logoImage} />
            </Link>
          </div>
          <div className="isoSignInForm">
          
          <Form onFinish={handleLogin}>
              <div className="isoInputWrapper">
                <Form.Item name="username" rules={[{ required: true }]}>
                  <Input
                    size="large"
                    placeholder="Username"
                    autoComplete="true"
                  />
                </Form.Item>
              </div>

              <div className="isoInputWrapper">
                <Form.Item name="password" rules={[{ required: true }]}>
                  <Input.Password
                    size="large"
                    type="password"
                    placeholder="Password"
                    autoComplete="false"
                  />
                </Form.Item>
              </div>

              <Form.Item>
                <div className="isoInputWrapper isoLeftRightComponent">
                  <Checkbox>
                    <IntlMessages id="page.signInRememberMe" />
                  </Checkbox>
                  <Button loading={btnsignin} type="primary" htmlType="submit">
                    <IntlMessages id="page.signInButton" />
                  </Button>
                </div>
              </Form.Item>

              {/* <p className="isoHelperText">
                <IntlMessages id="page.signInPreview" />
              </p> */}
            </Form>
{/*             
            <div className="isoInputWrapper isoOtherLogin">
              <Button onClick={signInWithFacebook} type="primary" className="btnFacebook">
                <IntlMessages id="page.signInFacebook" />
              </Button>
              <Button onClick={signInWithGoogle} type="primary" className="btnGooglePlus">

                <IntlMessages id="page.signInGooglePlus" />
              </Button>

              <Button
                onClick={() => {
                  Auth0.login();
                }}
                type="primary"
                className="btnAuthZero">
                <IntlMessages id="page.signInAuth0" />
              </Button> 

              
            </div>
 */}
            <div className="isoCenterComponent isoHelperWrapper">
              <Link to="/forgotpassword" className="isoForgotPass">
                <IntlMessages id="page.signInForgotPass" />
              </Link>
              <Link to="/signup">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageGlobalStyleWrapper>
  );
}

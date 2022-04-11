import React from 'react';
import { Link } from 'react-router-dom';
import Input from '@iso/components/uielements/input';
import Button from '@iso/components/uielements/button';
import IntlMessages from '@iso/components/utility/intlMessages';
import ForgotPasswordStyleWrapper from './ForgotPassword.styles';
import bgImage from "@iso/assets/images/forgotpw-bg.png";
import logoImage from "@iso/assets/images/logo.png";
import {PageGlobalStyleWrapper} from "../../pageGlobal.styles"

export default function() {
  return (
    <PageGlobalStyleWrapper className="isoForgotPassPage">
      <div className="isoLoginContentWrapper">
      <img className="bgImageMd" alt="#" src={bgImage} />

        <div className="isoLoginContent">
        <div className="isoLogoWrapper">
            <Link to="/dashboard">
              {/* <IntlMessages id="page.signInTitle" /> */}
              <img className="logoImage" alt="#" src={logoImage} />
            </Link>
          </div>

          <div className="isoFormHeadText">
            <h3>
              <IntlMessages id="page.forgetPassSubTitle" />
            </h3>
            <p>
              <IntlMessages id="page.forgetPassDescription" />
            </p>
          </div>

          <div className="isoForgotPassForm">
            <div className="form-margin">
              <Input size="large" placeholder="Email" />
            </div>

            <div className="isoInputWrapper">
              <Button type="primary">
                <IntlMessages id="page.sendRequest" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageGlobalStyleWrapper>
  );
}

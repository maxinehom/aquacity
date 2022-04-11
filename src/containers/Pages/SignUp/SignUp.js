import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import authAction from "@iso/redux/auth/actions";
import appActions from "@iso/redux/app/actions";
import PageHeader from "@iso/components/utility/pageHeader";
import LayoutContent from "@iso/components/utility/layoutContent";
import RegistrationForm from "../../Forms/RegistrationForm/RegistrationForm";
import signupLogo from "@iso/assets/images/logo.png";
import SignUpStyleWrapper from "./SignUp.styles";

const { login } = authAction;
const { clearMenu } = appActions;

export default function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();


  return (
    <SignUpStyleWrapper>
      <Link to="/" className="signupLogo">
        <img alt="#" src={signupLogo} className="signupLogo" />
      </Link>
      <PageHeader style={{ maxWidth: 700 }}>Member Registration</PageHeader>
      <LayoutContent className="signUpContent">
        <RegistrationForm />
      </LayoutContent>
    </SignUpStyleWrapper>
  );
}

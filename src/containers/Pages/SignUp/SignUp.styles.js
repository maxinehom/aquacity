import styled from "styled-components";
import { palette } from "styled-theme";
import WithDirection from "@iso/lib/helpers/rtl";

const SignUpStyleWrapper = styled.div`
  padding: 40px 20px;
  display: flex;
  flex-flow: row wrap;
  overflow: auto;
  max-width: 1000px;
  margin: 0 auto;

  @media only screen and (max-width: 767px) {
    padding: 50px 20px;
  }

  @media (max-width: 580px) {
    padding: 15px;
  }

  .signupLogo {
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    height: auto;
    justify-content: center;
    padding-bottom: 20px;
  }

  .signUpContent {
  }

  .formTitle {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .buttons {
    margin-top: 20px;
    background-color: #1890ff;
    color: white;
  }
`;

export default WithDirection(SignUpStyleWrapper);

import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Alert from "@material-ui/lab/Alert";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Layout from "../../components/Layout";

import { FONTS } from "../../constants";

const Wrapper = styled.div`
  padding: 100px;
  text-align: center;
  p {
    font-size: 1.5em;
  }
`;
const Title = styled.h1`
  padding-top: 50px;
  font-size: 3em;
  font-weight: 400;
  font-family: ${FONTS.font2};
  left: calc(50% - 267px/2 + 0.5px)
  top: 86px
`;

const Subtitle = styled.p`
  font-size: max(1.1vw, 20px);
  font-weight: 500;
  font-style: normal;
  font-family: ${FONTS.font2};
`;


const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <Layout>
    <Wrapper>
      <Alert icon={false} severity="warning">
        <Title>{t("Contact.Title")}</Title>
        <Subtitle>{t("Contact.Subtitle")}</Subtitle> <br />
        <br />
        <br />
        <p>
          Check out the <a href="/faqs">FAQs</a> page to see if we've already
          answered your question. If you don't see your question there, for
          general questions, please email us at{" "}
          <a href="mailto:coveducation@gmail.com">coveducation@gmail.com</a>
          ! <br />
          <br /> For any inquiries related to media/news releases, please
          contact us at <a href="mailto:covedpr@gmail.com">covedpr@gmail.com</a>
          . <br /> For technical issues related to your account please contact
          us at <a href="mailto:coved.dev@gmail.com">coved.dev@gmail.com</a>
          . <br />
          <br /> We're excited to hear from you~
        </p>
        <p>
          If you wish to file a complaint, please contact{" "}
          <a href="mailto:coved.management@gmail.com">
            coved.management@gmail.com
          </a>
        </p>
      </Alert>
    </Wrapper>
    </Layout>
  );
};
export default ContactUs;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;


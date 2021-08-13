import React from 'react';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';

import Accordion, { AccordionRow } from '../../components/Accordion';
import Layout from '../../components/Layout';

import { FONTS, FAQS } from '../../constants';

const FAQsWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  p{
    font-family: ${FONTS.font2};
  }
  h2 {
    font-family: ${FONTS.font1};
    font-weight: 500;
    padding-top: 20px;
  }
`;

const FAQsPage = () => {
  return (
    <Layout>
    <FAQsWrapper>
      <Grid container direction="row" justify="center" spacing={2}>
      <Grid item sm={6} xs={10}>
        <h2> General </h2>
        <Accordion>
          {FAQS.filter((f) => f.category === "general").map((faq) => {
            return (
              <AccordionRow key={faq.question} title={faq.question} id={faq.key}>
                {faq.answer}
              </AccordionRow>
            )
          })}
        </Accordion>
        <h2> For Parents & Students </h2>
        <Accordion>
          {FAQS.filter((f) => f.category === "mentee").map((faq) => {
            return (
              <AccordionRow key={faq.question} title={faq.question} id={faq.key}>
                {faq.answer}
              </AccordionRow>
            )
          })}
        </Accordion>
        <h2> For Mentors </h2>
        <Accordion>
          {FAQS.filter((f) => f.category === "mentor").map((faq) => {
            return (
              <AccordionRow key={faq.question} title={faq.question} id={faq.key}>
                {faq.answer}
              </AccordionRow>
            )
          })}
        </Accordion>
        </Grid>
        </Grid>
    </FAQsWrapper>
    </Layout>
  )
}

export default FAQsPage;

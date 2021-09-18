import React from 'react';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import { graphql, useStaticQuery } from "gatsby";

import Accordion, { AccordionRow } from '../../components/Accordion';
import Layout from '../../components/Layout';

import { FONTS } from '../../constants';
import Markdown from '../../components/Markdown';

const FAQsWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin: 2em auto;
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

const FaqSection = ({ title, data }) => {
  return (<div>
    <h2> {title} </h2>
    <Accordion>
      {data.map((faq) => {
        return (
          <AccordionRow key={faq.question} title={faq.question} id={faq.key}>
            <Markdown>{faq.answer.childMdx.body}</Markdown>
          </AccordionRow>
        )
      })}
    </Accordion>
  </div>
  );
}

const FAQsPage = () => {
  // Contentful does not have strict ordering.
  const data = useStaticQuery(graphql`
    query FaqQuery {
      faqs: allContentfulFaq {
        nodes {
          question
          answer {
            childMdx {
              body
            }
          }
          category
        }
      }
    }
  `);

  // use the index of the faq as keys
  const faqs = data.faqs.nodes.map((f, i) => { return { ...f, key: i } });

  return (
    <Layout>
      <FAQsWrapper>
        <Grid container direction="row" justify="center" spacing={2}>
          <Grid item sm={6} xs={10}>
            <FaqSection
              title="General"
              data={faqs.filter(f => f.category === "general")} />
            <FaqSection
              title="For Parents & Students"
              data={faqs.filter(f => f.category === "mentee")} />
            <FaqSection
              title="For Mentors"
              data={faqs.filter(f => f.category === "mentor")} />
          </Grid>
        </Grid>
      </FAQsWrapper>
    </Layout>
  );
}

export default FAQsPage;

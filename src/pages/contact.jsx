import React from "react"
import ReCAPTCHA from "react-google-recaptcha"
import styled from "styled-components"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => (
  <Layout>
    <Head title="Contact" />
    <ContactContainer>
      <h1>Contact</h1>
      <p style={{ textAlign: "center" }}>
        <span style={{ fontWeight: "800" }}>Want to get in touch?</span>
        <br /> Use the form below to hire me, ask questions, give feedback on my
        site, etc.
      </p>
      <form
        className="flex-center"
        name="feedback"
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
        action="/thank-you"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" />
        </div>
        {/* <div> */}
        <ReCAPTCHA sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY} />
        {/* </div> */}
        <div className="flex-center">
          <button type="submit">Send</button>
        </div>
      </form>
    </ContactContainer>
  </Layout>
)

export default ContactPage

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

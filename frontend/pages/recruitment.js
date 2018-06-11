import React, { Component } from 'react';
import { Config } from "../config.js";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout.js";
import Menu from "../components/Menu.js";
import PageWrapper from "../components/PageWrapper.js";

class Recruitment extends Component {
  static async getInitialProps(context) {
    const pageRes = await fetch(
        `${Config.apiUrl}/wp-json/postlight/v1/page?slug=recruitment`
    );
    const page = await pageRes.json();
    return { page };
  }
  render() {
    return (
      <Layout>
        <Menu menu={this.props.headerMenu} />
          <h2 dangerouslySetInnerHTML={{
            __html: this.props.page.title.rendered}}
          />
      </Layout>
    );
  }
}

export default PageWrapper(Recruitment);
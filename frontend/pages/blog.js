import React, { Component } from 'react'
import Layout from "../components/Layout.js"
import { Config } from '../config'
import fetch from "isomorphic-unfetch"
import Menu from "../components/Menu.js";
import PageWrapper from "../components/PageWrapper.js";

class Blog extends Component {
  // grab data and pass into props before
  // component is loaded
  static async getInitialProps(){
    const postsRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts`)
    const posts = await postsRes.json()
    // pass prop into component
    return { posts }
  }
  render() {
    const { posts } = this.props
    console.log(this.props)
    return (
      <Layout>
        <Menu menu={this.props.headerMenu} />
        <h1>Blog</h1>
        {posts.map(post => (
          <li>
            {post.title.rendered}
            {post.acf.author_description}
          </li>
        ))}
      </Layout>
    );
  }
}

export default PageWrapper(Blog);
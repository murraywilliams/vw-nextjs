import React, { Component } from 'react'
import Layout from "../components/Layout.js"
import { Config } from '../config'
import fetch from "isomorphic-unfetch"

class Blog extends Component {
  // grab data and pass into props before
  // component is loaded
  static async getInitialProps(){
    const postsRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts`)
    const posts = await postsRes.json()
    // pass prop into component
    return {
      posts
    }
  }
  render() {
    const { posts } = this.props
    return (
      <Layout>
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

export default Blog;
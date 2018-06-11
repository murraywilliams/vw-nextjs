import React, { Component } from 'react';
import { Config } from "../config.js";
import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout.js";
import Menu from "../components/Menu.js";
import PageWrapper from "../components/PageWrapper.js";

const bannerWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  color: 'rgb(255, 255, 255)',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#333f48',
  padding: '4rem 0px',
  textAlign: 'center',
}
const bannerSubtitleStyle = {
  fontWeight: '300',
  textTransform: 'uppercase',
  lineHeight: '1.6',
  letterSpacing: '1px',
  padding: '0px 20px',
}
const padgeWrapperStyle = {
  width: '100%',
  maxWidth: '80%',
  margin: '80px auto 0px'
}
const cardColumnStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  justifyContent: 'center',
  width: '100%',
  margin: '0px 0px 15px'
}
const cardItemStyle = {
  height: '100%',
  padding: '30px 25px 20px',
  background: 'rgb(245, 245, 245)',
  margin: '0px 15px',
}
const cardInnerStyle = {
  fontSize: '13px',
  fontWeight: '300',
  display: 'flex',
  flexDirection: 'column',
  flex: '0 0 25%',
  alignItems: 'center',
}
const imageStyle = {
  width: '100%',
  maxWidth: '80px',
  height: 'auto',
  display: 'block',
  margin: '0px auto',
}
const splitColumnStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  textAlign: 'left',
  fontSize: '14px',
  lineHeight: '1.8',
  margin: '60px auto',
}
const leftColumnStyle = {
  maxwidth: '50%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  justifyContent: 'space-around',
  flex: '0 0 50%',
  padding: '0px 20px',
}
const rightColumnStyle = {
  maxwidth: '50%',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  justifyContent: 'space-around',
  flex: '0 0 50%',
  padding: '0px 20px',
}

class Recruitment extends Component {
  static async getInitialProps() {
    const pageRes = await fetch(
        `${Config.apiUrl}/wp-json/postlight/v1/page?slug=recruitment`
    );
    const page = await pageRes.json();
    return { page };
  }

  render() {
    const data = this.props.page.acf;
    const cardColumns = data.column_cards.map( card => {
      return (
        <div style={cardItemStyle}>
          <div style={cardInnerStyle}>
            <div>
              <img style={imageStyle} src={card.icon.url} alt=""/>
            </div>
            <p style={{ fontWeight: '600'}}>{card.icon_title}</p>
            <p>{card.icon_description}</p>
          </div>
        </div>
      )})

    return (
      <Layout>
        <Menu menu={this.props.headerMenu} />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          color: 'rgb(255, 255, 255)',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#333f48',
          padding: '4rem 0px',
          textAlign: 'center',
          background: `url(${this.props.page.acf.banner_image.url}) 0% 0% / cover rgb(51, 63, 72)`
        }}>
          <div style={{ maxWidth: '50%', fontWeight: '400', flex: '0 0 50%'}}>
            <h2 style={{ margin: '0 0 20px'}} dangerouslySetInnerHTML={{
              __html: this.props.page.acf.page_title}}
            />
            <p style={bannerSubtitleStyle}>{this.props.page.acf.page_subtitle}</p>
          </div>
        </div>
        <div style={padgeWrapperStyle}>
            <h3 style={{fontWeight: '300', fontSize:'45px', color:'#768692', marginBottom:'30px', textAlign:'center'}}>{this.props.page.acf.lead_section_title}</h3>
            <div style={cardColumnStyle}>
              {cardColumns}
            </div>
            <div id="recruitmentSplit" style={splitColumnStyle}>
              <div style={leftColumnStyle}>
                <h4 style={{fontSize: '22px', textTransform: 'uppercase', fontWeight: '300'}}>For our clients</h4>
                <h5>A world for the taking.</h5>
                <p>With offices in five countries, we represent top marketing talent globally.</p>
                <h5>Masters of marketing.</h5>
                <p>Work with a company that understands the global marketing industry and the roles you need to fill.</p>
                <h5>Excellence at all costs.</h5>
                <p>Providing a tailored solution at a price point to fit your need, we ensure high-touch and high-value excellence.</p>
                <h5>Exceptional care.</h5>
                <p>We are always seeking long-term partnerships with our clients, and will provide you with a range of resources to set you up for success.</p>
              </div>
              <div style={rightColumnStyle}>
                <h4 style={{fontSize: '22px', textTransform: 'uppercase', fontWeight: '300'}}>For our people</h4>
                <h5>We understand.</h5>
                <p>Knowing the market, we know how to best match unique experience and skills.</p>
                <h5>We care.</h5>
                <p>Full support to both client and candidate, to ensure our people have everything they need to succeed.</p>
                <h5>Relationship trumps transaction.</h5>
                <p>Commitment to people who are professional, approachable and who deliver. Mutual trust and respect as well as a shared understanding is key.</p>
                <h5>Attract the best talent.</h5>
                <p>With a 20-year-strong network, we enable our people to work for leading and innovative clients. By providing a top job market, we attract the best talent.</p>
              </div>
            </div>
        </div>
      </Layout>
    );
  }
}

export default PageWrapper(Recruitment);